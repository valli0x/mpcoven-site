#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Usage: ./setup-ssl.sh yourdomain.com"
    echo "The domain must point to the server IP: 155.212.147.24"
    exit 1
fi

DOMAIN=$1
SERVER="root@155.212.147.24"
REMOTE_DIR="/root/mpcoven"

echo "Setting up SSL for domain: $DOMAIN"
echo "Make sure $DOMAIN points to 155.212.147.24"

# Upload files for SSL
ssh $SERVER "mkdir -p $REMOTE_DIR/certbot/conf $REMOTE_DIR/certbot/www"
scp docker/docker-compose.yml nginx/nginx-ssl.conf root@155.212.147.24:$REMOTE_DIR/

# Update nginx config with domain
ssh $SERVER "cd $REMOTE_DIR && sed 's/DOMAIN_NAME/$DOMAIN/g' nginx-ssl.conf > nginx-ssl.conf.tmp && mv nginx-ssl.conf.tmp nginx-ssl.conf"

# Stop current container
ssh $SERVER "cd $REMOTE_DIR && docker compose -f docker-compose-simple.yml down 2>/dev/null || true"

# Remove old temp containers
ssh $SERVER "docker stop nginx-temp 2>/dev/null || true && docker rm nginx-temp 2>/dev/null || true"

# Copy nginx config for certbot
scp nginx/nginx-certbot.conf root@155.212.147.24:$REMOTE_DIR/

# Start temp nginx for certificate
ssh $SERVER "cd $REMOTE_DIR && docker run -d --name nginx-temp -p 80:80 -v $REMOTE_DIR/build:/usr/share/nginx/html:ro -v $REMOTE_DIR/certbot/www:/var/www/certbot:ro -v $REMOTE_DIR/nginx-certbot.conf:/etc/nginx/conf.d/default.conf:ro nginx:alpine && sleep 2"

# Get certificate
echo "Requesting SSL certificate from Let's Encrypt..."
ssh $SERVER "docker run --rm -v $REMOTE_DIR/certbot/conf:/etc/letsencrypt -v $REMOTE_DIR/certbot/www:/var/www/certbot certbot/certbot certonly --webroot --webroot-path=/var/www/certbot --email admin@$DOMAIN --agree-tos --no-eff-email -d $DOMAIN --non-interactive"

# Stop temp container
ssh $SERVER "docker stop nginx-temp && docker rm nginx-temp"

# Start containers with SSL
echo "Starting nginx with SSL..."
ssh $SERVER "cd $REMOTE_DIR && docker compose up -d"

echo "SSL setup complete!"
echo "Website is now available at: https://$DOMAIN"
