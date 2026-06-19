const STATS = [
  { value: '2 / 2', label: 'keyshares required' },
  { value: '100', label: 'accounts per pair' },
  { value: 'ETH + BTC', label: 'chains supported' },
  { value: '0', label: 'trusted intermediaries' },
]

export default function StatsStrip() {
  return (
    <div className="container">
      <div className="stats">
        {STATS.map((s) => (
          <div className="stats__cell" key={s.label}>
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
