import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ArrowRight } from '../components/icons.jsx'
import { REPO_URL } from '../constants.js'
import './docs.css'

// Docs stub — placeholder shell matching the dark theme. The full Docs page
// (endpoints, config, dependencies) from the original site can be ported here.
export default function Docs() {
  return (
    <div className="page page--docs">
      <Header />
      <main className="docs container">
        <div className="eyebrow">Documentation</div>
        <h1 className="docs__title">Docs are on the way</h1>
        <p className="docs__lede">
          API reference, configuration, and deployment guides for mpcoven's
          three-process MPC escrow are being ported here. In the meantime, the
          source and README cover endpoints, the <code className="code-chip">MODE</code>{' '}
          environment variable, and protocol dependencies.
        </p>

        <div className="docs__actions">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
            Read on GitHub
            <ArrowRight size={15} />
          </a>
          <Link to="/" className="btn btn--ghost">Back to home</Link>
        </div>

        <div className="docs__toc">
          {[
            { k: 'Authentication', v: 'MetaMask EIP-191 · JWT sessions' },
            { k: 'Keygen', v: 'CMP (ECDSA) · FROST (Schnorr)' },
            { k: 'Escrow', v: 'pollination cross-validation' },
            { k: 'Transport', v: 'gRPC · NATS · Host :8282 · Client :8080' },
          ].map((row) => (
            <div className="docs__toc-row" key={row.k}>
              <span className="docs__toc-key">{row.k}</span>
              <span className="docs__toc-val">{row.v}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
