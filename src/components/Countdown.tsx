import { config } from '../data/birthdayConfig'
export default function Countdown({ ms }: { ms: number }) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const parts = [['Days', Math.floor(s / 86400)], ['Hours', Math.floor(s / 3600) % 24], ['Minutes', Math.floor(s / 60) % 60], ['Seconds', s % 60]] as const
  return (
    <main className="cd">
      <div className="particles" aria-hidden>{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.7) % 9}s`, animationDuration: `${9 + (i % 5) * 3}s` }} />)}</div>
      <h1 className="serif big">Four years. Countless stories. One brotherhood.</h1>
      <p className="sub">For {config.fullName} — my favourite partner in chaos, midnight adventures, and memories that never get old.</p>
      <div className="frame" role="timer" aria-label={`${Math.floor(s / 86400)} days ${Math.floor(s / 3600) % 24} hours until the surprise`}>
        {parts.map(([l, v]) => <div key={l} className="unit"><b className="serif">{String(v).padStart(2, '0')}</b><span>{l}</span></div>)}
      </div>
      <p className="serif it">Something special is waiting for you.</p>
      <p className="sub">Your next chapter begins at midnight.</p>
      <small className="hint">Best experienced with sound on.</small>
    </main>
  )
}
