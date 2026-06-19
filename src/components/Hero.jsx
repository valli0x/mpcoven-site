import { Link } from 'react-router-dom'
import { ArrowRight } from './icons.jsx'
import EscrowSchematic from './EscrowSchematic.jsx'
import { REPO_URL } from '../constants.js'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero__copy">
        <div className="eyebrow">2-of-2 Threshold MPC</div>

        <h1 className="hero__title">
          Signature escrow for cross-chain{' '}
          <span className="hero__title-accent">atomic swaps</span>
        </h1>

        <p className="hero__lede">
          Two parties jointly control ETH and BTC accounts — neither holds the
          full private key. Swap across chains through escrow-verified signature
          exchange, with no trusted intermediary.
        </p>

        <div className="hero__actions">
          <Link to="/docs" className="btn btn--solid">
            Read the docs
            <ArrowRight size={15} />
          </Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            View on GitHub
          </a>
        </div>

        <p className="hero__footnote">
          no trusted intermediary · neither party holds the full key
        </p>
      </div>

      <EscrowSchematic />
    </section>
  )
}
