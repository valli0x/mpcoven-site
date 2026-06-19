import { KeyIcon, ShieldPlain, LockIcon, ClockIcon } from './icons.jsx'

const CARDS = [
  {
    accent: 'eth',
    icon: <KeyIcon size={19} stroke="#8AA0F5" />,
    title: 'MPC Keygen',
    body: 'Distributed key generation via CMP (ECDSA) and FROST (Schnorr).',
    tag: 'CMP · FROST',
  },
  {
    accent: 'btc',
    icon: <ShieldPlain size={19} stroke="#F7A943" />,
    title: 'Escrow Verification',
    body: 'Cross-validation of signatures via the pollination pattern before release.',
    tag: 'pollination',
  },
  {
    accent: 'eth',
    icon: <LockIcon size={19} stroke="#8AA0F5" />,
    title: 'MetaMask Auth',
    body: 'EIP-191 signature auth. JWT sessions with nonce validation and replay protection.',
    tag: 'EIP-191 · JWT',
  },
  {
    accent: 'btc',
    icon: <ClockIcon size={19} stroke="#F7A943" />,
    title: 'gRPC + NATS',
    body: 'Session-isolated relay for MPC protocol messages. Prevents cross-session collisions.',
    tag: 'NATS',
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="arch container">
      <div className="eyebrow">Architecture</div>
      <h2 className="section-title">Three-process design</h2>
      <p className="arch__lede">
        One binary, three modes — selected by the <code className="code-chip">MODE</code>{' '}
        environment variable.
      </p>

      <div className="arch__ports">
        <span className="port">Host <span className="port--eth">:8282</span></span>
        <span className="port">Client <span className="port--eth">:8080</span></span>
        <span className="port">Communication <span className="port--btc">gRPC</span></span>
      </div>

      <div className="arch__grid">
        {CARDS.map((c) => (
          <div className={`feature feature--${c.accent}`} key={c.title}>
            <div className={`feature__icon feature__icon--${c.accent}`}>{c.icon}</div>
            <h3 className="feature__title">{c.title}</h3>
            <p className="feature__body">{c.body}</p>
            <div className="feature__tag">{c.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
