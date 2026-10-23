import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Memory } from '../data/memories'
import { Photo } from './Reveal'
export default function PhotoLightbox({ items, index, setIndex }: { items: Memory[]; index: number | null; setIndex: (i: number | null) => void }) {
  const x0 = useRef(0)
  const n = items.length
  useEffect(() => {
    if (index === null) return
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((index + 1) % n)
      if (e.key === 'ArrowLeft') setIndex((index - 1 + n) % n)
    }
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [index, n, setIndex])
  if (index === null) return null
  const m = items[index]
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer"
      onTouchStart={e => (x0.current = e.touches[0].clientX)}
      onTouchEnd={e => { const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 50) setIndex((index + (d < 0 ? 1 : -1) + n) % n) }}>
      <button className="ib close" aria-label="Close" onClick={() => setIndex(null)} autoFocus><X /></button>
      <button className="ib prev" aria-label="Previous photo" onClick={() => setIndex((index - 1 + n) % n)}><ChevronLeft /></button>
      <figure><Photo src={m.src} alt={m.alt} /><figcaption className="hand">{m.caption}{m.date ? ` · ${m.date}` : ''}</figcaption></figure>
      <button className="ib next" aria-label="Next photo" onClick={() => setIndex((index + 1) % n)}><ChevronRight /></button>
    </div>
  )
}
