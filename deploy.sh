#!/bin/bash

set -e

SERVER="root@155.212.147.24"
REMOTE_DIR="/root/mpcoven"
DOMAIN="${1:-mpcoven.net}"

echo "Building React application..."
npm run build

echo "Creating certbot directories..."
mkdir -p certbot/conf certbot/www

echo "Copying files to server..."
ssh $SERVER "mkdir -p $REMOTE_DIR/certbot/conf $REMOTE_DIR/certbot/www"

# Copy files to server
scp -r build $SERVER:$REMOTE_DIR/
scp docker/docker-compose.yml $SERVER:$REMOTE_DIR/
scp nginx/nginx-ssl.conf $SERVER:$REMOTE_DIR/

# Update nginx config with domain
ssh $SERVER "cd $REMOTE_DIR && sed 's/DOMAIN_NAME/$DOMAIN/g' nginx-ssl.conf > nginx-ssl.conf.tmp && mv nginx-ssl.conf.tmp nginx-ssl.conf"

echo "Setting up SSL certificate..."
# If IP address, skip SSL
if [[ $DOMAIN =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "IP address detected. Skipping SSL certificate setup."
    echo "To enable SSL, use a domain name: ./deploy.sh yourdomain.com"
    
    # Use no-SSL config
    scp nginx/nginx-no-ssl.conf $SERVER:$REMOTE_DIR/nginx.conf
    ssh $SERVER "cd $REMOTE_DIR && docker compose -f docker-compose.yml down && docker compose -f docker-compose.yml up -d"
else
    echo "Domain name detected: $DOMAIN"
    ssh $SERVER "cd $REMOTE_DIR && docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot --email admin@$DOMAIN --agree-tos --no-eff-email -d $DOMAIN" || echo "Certificate may already exist or domain is not pointing to this server"
    ssh $SERVER "cd $REMOTE_DIR && docker compose down && docker compose up -d"
fi

echo "Deployment complete!"
echo "Website should be available at:"
if [[ $DOMAIN =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "  http://$DOMAIN"
else
    echo "  https://$DOMAIN"
fi
