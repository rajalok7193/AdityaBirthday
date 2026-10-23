import { MessageCircle, RotateCcw } from 'lucide-react'
import { config } from '../data/birthdayConfig'
export default function FinalScene() {
  const share = `https://wa.me/?text=${encodeURIComponent(`${config.shareTeaser}\n${location.origin}${location.pathname}`)}`
  return (
    <section className="sec final">
      <h2 className="serif big">To more midnight adventures, more unexpected plans, more laughter, and a thousand more memories.</h2>
      <p className="serif it lead">Happy birthday, {config.name}. Four years down, a lifetime of stories to go.</p>
      <div className="row">
        <button className="cta" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}><RotateCcw size={16} /> Replay our memories</button>
        <a className="cta alt" href={share} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Share on WhatsApp</a>
      </div>
      <p className="hand sig">{config.fromName}</p>
    </section>
  )
}
