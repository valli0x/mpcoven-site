import { LogoMark } from './icons.jsx'
import { REPO_URL, DOCS_URL } from '../constants.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="brand">
            <span className="brand__mark brand__mark--sm">
              <LogoMark size={16} />
            </span>
            <span className="brand__name">mpcoven</span>
          </div>
          <p className="site-footer__blurb">
            Threshold MPC signature escrow for trustless cross-chain atomic swaps.
          </p>
        </div>

        <div>
          <div className="site-footer__heading">Product</div>
          <a href={DOCS_URL} className="site-footer__link">Documentation</a>
          <a href="/#how" className="site-footer__link">How it works</a>
          <a href="https://mpcoven.net/app/" className="site-footer__link">Open the app</a>
        </div>

        <div>
          <div className="site-footer__heading">Protocols</div>
          <div className="site-footer__item">ECDSA · CMP</div>
          <div className="site-footer__item">FROST · Schnorr</div>
          <div className="site-footer__item">EIP-191 auth</div>
        </div>

        <div>
          <div className="site-footer__heading">Resources</div>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="site-footer__link">
            GitHub
          </a>
          <a href="https://github.com/taurusgroup/multi-party-sig" target="_blank" rel="noopener noreferrer" className="site-footer__link">
            multi-party-sig
          </a>
          <a href="https://nats.io" target="_blank" rel="noopener noreferrer" className="site-footer__link">
            NATS
          </a>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__bottom">© {year} mpcoven</div>
      </div>
    </footer>
  )
}
