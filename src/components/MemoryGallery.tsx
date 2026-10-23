import { useState } from 'react'
import { chapters, memories } from '../data/memories'
import Reveal, { Photo } from './Reveal'
import PhotoLightbox from './PhotoLightbox'
export default function MemoryGallery() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="gallery" className="sec">
      {chapters.map((c, ci) => (
        <div key={ci} className="chap">
          <Reveal><h2 className="serif">{c.title}</h2><p className="sub">{c.blurb}</p></Reveal>
          <div className="masonry">
            {memories.map((m, i) => m.chapter !== ci ? null : (
              <Reveal key={i} className={`card ${m.size}`}>
                <div className="film"><Photo src={m.src} alt={m.alt} onClick={() => setOpen(i)} /></div>
                <p className="hand">{m.caption}{m.date ? ` · ${m.date}` : ''}</p>
                <button className="sr" onClick={() => setOpen(i)}>Open photo {i + 1} full screen</button>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
      <PhotoLightbox items={memories} index={open} setIndex={setOpen} />
    </section>
  )
}
