import { config } from '../data/birthdayConfig'
import { letter } from '../data/memories'
import Reveal from './Reveal'
export default function BirthdayLetter() {
  return (
    <section className="sec spot">
      <Reveal><h2 className="serif center">Not just a flatmate. Always a brother.</h2></Reveal>
      <Reveal className="paper">
        {letter.map((p, i) => <p key={i} className={i === 0 ? 'serif lead' : ''}>{p}</p>)}
        <p className="hand sig">{config.signature}<br />{config.fromName}</p>
      </Reveal>
    </section>
  )
}
