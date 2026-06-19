const STEPS = [
  {
    n: '01',
    title: 'Pair & authenticate',
    body: 'Two parties pair addresses. MetaMask EIP-191 login, JWT sessions with replay protection.',
  },
  {
    n: '02',
    title: 'Distributed keygen',
    body: 'CMP (ECDSA) and FROST (Schnorr) generate split keys — up to 100 shared accounts per pair.',
  },
  {
    n: '03',
    title: 'Escrow verification',
    body: 'Signatures are cross-validated via the pollination pattern; the agent verifies both parties before release.',
  },
  {
    n: '04',
    title: 'Atomic settlement',
    body: 'Verified signatures release funds on both chains — no counterparty risk, no intermediary.',
    accent: 'btc',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="how container">
      <div className="eyebrow">How it works</div>
      <h2 className="section-title how__title">From pairing to atomic settlement</h2>

      <div className="how__grid">
        {STEPS.map((s) => (
          <div className="how__step" key={s.n}>
            <div className={`how__num${s.accent === 'btc' ? ' how__num--btc' : ''}`}>
              {s.n}
            </div>
            <h3 className="how__step-title">{s.title}</h3>
            <p className="how__step-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
