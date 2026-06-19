import { Link } from 'react-router-dom'
import { LogoMark, GitHubIcon } from './icons.jsx'
import { REPO_URL } from '../constants.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand">
          <span className="brand__mark">
            <LogoMark size={17} />
          </span>
          <span className="brand__name">mpcoven</span>
          <span className="brand__tag">/ escrow</span>
        </Link>

        <nav className="site-nav">
          <a href="/#how" className="site-nav__link">How it works</a>
          <a href="/#architecture" className="site-nav__link">Architecture</a>
          <Link to="/docs" className="site-nav__link">Docs</Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav__github"
          >
            <GitHubIcon size={15} />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
