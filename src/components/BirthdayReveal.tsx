import { ArrowRight } from 'lucide-react'
import { config } from '../data/birthdayConfig'
export default function BirthdayReveal({ onEnter }: { onEnter: () => void }) {
  return (
    <main className="reveal">
      <div className="streak" aria-hidden /><div className="confetti" aria-hidden>{Array.from({ length: 40 }, (_, i) => <i key={i} style={{ left: `${(i * 53) % 100}%`, animationDelay: `${(i * 0.23) % 4}s`, background: i % 3 ? '#d4af6a' : '#f4ecdc' }} />)}</div>
      <h1 className="serif big zoom">Happy birthday, {config.name}!</h1>
      <p className="serif it lead">Another year older. Four years of memories richer. And a lifetime of stories still waiting to be written.</p>
      <button className="cta" onClick={onEnter}>Enter our story <ArrowRight size={18} /></button>
    </main>
  )
}
