import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { config } from '../data/birthdayConfig'
export default function MusicPlayer() {
  const a = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false), [muted, setMuted] = useState(false), [err, setErr] = useState(false), [started, setStarted] = useState(false)
  const toggle = async () => {
    const el = a.current!
    try { if (el.paused) { await el.play(); setPlaying(true); setStarted(true) } else { el.pause(); setPlaying(false) } } catch { setErr(true) }
  }
  return (
    <div className="music" role="group" aria-label="Soundtrack controls">
      <audio ref={a} src={import.meta.env.BASE_URL + config.soundtrack.src} loop preload="none" onError={() => setErr(true)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
      <button className="ib" onClick={toggle} aria-label={playing ? 'Pause soundtrack' : 'Play our soundtrack'}>{playing ? <Pause size={18} /> : <Play size={18} />}</button>
      {!started && !err && <span className="mt">Play our soundtrack</span>}
      {started && <><div className={`wave ${playing ? 'live' : ''}`} aria-hidden>{[0, 1, 2, 3, 4].map(i => <i key={i} style={{ animationDelay: `${i * 0.15}s` }} />)}</div>
        <span className="mt">{config.soundtrack.title}</span>
        <button className="ib" onClick={() => { a.current!.muted = !muted; setMuted(!muted) }} aria-label={muted ? 'Unmute' : 'Mute'}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button></>}
      {err && <span className="mt">Soundtrack unavailable — add public/audio/soundtrack.mp3</span>}
    </div>
  )
}
