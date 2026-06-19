import { StarIcon, BitcoinGlyph, ShieldCheck } from './icons.jsx'

// Hero visual: the escrow schematic (default `diagramStyle: 'escrow'` from the design).
export default function EscrowSchematic() {
  return (
    <div className="schematic">
      <div className="schematic__head">
        <span className="schematic__label">Shared accounts</span>
        <span className="schematic__badge">2-of-2</span>
      </div>

      <div className="schematic__chains">
        <div className="chain chain--eth">
          <div className="chain__head">
            <span className="chain__icon">
              <StarIcon size={14} stroke="#8AA0F5" />
            </span>
            <span className="chain__name">ETH</span>
          </div>
          <div className="chain__proto chain__proto--eth">ECDSA · CMP</div>
          <div className="chain__shares">
            share<span className="chain__share-key">ᴀ</span> +
            share<span className="chain__share-key">ʙ</span>
          </div>
        </div>

        <div className="chain chain--btc">
          <div className="chain__head">
            <span className="chain__icon">
              <BitcoinGlyph size={14} stroke="#F7A943" />
            </span>
            <span className="chain__name">BTC</span>
          </div>
          <div className="chain__proto chain__proto--btc">FROST · Schnorr</div>
          <div className="chain__shares">
            share<span className="chain__share-key">ᴀ</span> +
            share<span className="chain__share-key">ʙ</span>
          </div>
        </div>
      </div>

      <div className="schematic__agent">
        <span className="schematic__agent-icon">
          <ShieldCheck size={16} stroke="#8AA0F5" />
        </span>
        <div>
          <div className="schematic__agent-title">Escrow agent</div>
          <div className="schematic__agent-sub">
            verifies both signatures before release
          </div>
        </div>
      </div>

      <div className="schematic__foot">
        neither party holds the full private key
      </div>
    </div>
  )
}
