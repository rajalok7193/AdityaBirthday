import { useEffect, useState } from 'react'
import { config, getClockOffset, targetMs } from './data/birthdayConfig'
import { brotherhood, jokes } from './data/memories'
import Countdown from './components/Countdown'
import BirthdayReveal from './components/BirthdayReveal'
import MemoryGallery from './components/MemoryGallery'
import FriendshipTimeline from './components/FriendshipTimeline'
import BirthdayLetter from './components/BirthdayLetter'
import FinalScene from './components/FinalScene'
import MusicPlayer from './components/MusicPlayer'
import Reveal from './components/Reveal'

const offset = getClockOffset()
const now = () => Date.now() + offset

export default function App() {
  const [ms, setMs] = useState(targetMs - now())
  const [story, setStory] = useState(false)
  useEffect(() => {
    if (ms <= 0) return
    // Recompute from the clock every tick, so background-tab throttling can't cause drift.
    const id = setInterval(() => setMs(targetMs - now()), 1000)
    const vis = () => setMs(targetMs - now())
    document.addEventListener('visibilitychange', vis)
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', vis) }
  }, [ms <= 0])
  useEffect(() => { document.title = ms <= 0 ? `Happy Birthday, ${config.name}!` : document.title }, [ms <= 0])

  if (ms > 0) return <Countdown ms={ms} />
  if (!story) return <BirthdayReveal onEnter={() => { setStory(true); scrollTo(0, 0) }} />
  return (
    <>
      <MusicPlayer />
      <header className="sec hero"><h1 className="serif big">Four years. One brotherhood.</h1></header>
      <section className="sec narrow">
        {brotherhood.map((l, i) => <Reveal key={i}><p className={`serif story ${i === 0 || i === brotherhood.length - 1 ? 'em' : ''}`}>{l}</p></Reveal>)}
      </section>
      <MemoryGallery />
      <FriendshipTimeline />
      <section className="sec">
        <Reveal><h2 className="serif center">Things that will never make sense to anyone else.</h2></Reveal>
        <div className="jokes">{jokes.map(j => (
          <details key={j.title} className="joke"><summary className="serif">{j.title}</summary><p className="hand">{j.text}</p></details>
        ))}</div>
      </section>
      <BirthdayLetter />
      <FinalScene />
    </>
  )
}
