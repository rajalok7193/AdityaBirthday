import { timeline } from '../data/memories'
import Reveal, { Photo } from './Reveal'
export default function FriendshipTimeline() {
  return (
    <section className="sec">
      <Reveal><h2 className="serif center">Four years, frame by frame.</h2></Reveal>
      <div className="tl" tabIndex={0} aria-label="Timeline, scroll sideways on desktop">
        {timeline.map(t => (
          <article key={t.year} className="tl-item">
            <Photo src={t.photo} alt={`${t.year} photo (replaceable)`} />
            <h3 className="serif">{t.year}</h3><small>{t.date}</small>
            <p>{t.story}</p>
            {t.joke && <p className="hand">Inside joke: {t.joke}</p>}
            {t.quote && <blockquote className="serif it">“{t.quote}”</blockquote>}
          </article>
        ))}
      </div>
    </section>
  )
}
