import { useEffect, useRef, useState, ReactNode } from 'react'
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`rv ${on ? 'on' : ''} ${className}`}>{children}</div>
}
export function Photo({ src, alt, className = '', onClick }: { src: string; alt: string; className?: string; onClick?: () => void }) {
  const [bad, setBad] = useState(false)
  const url = import.meta.env.BASE_URL + src
  if (bad) return <div className={`ph ${className}`} role="img" aria-label={alt} onClick={onClick}><span>Replaceable photo<br /><small>{src}</small></span></div>
  return <img className={className} src={url} alt={alt} loading="lazy" decoding="async" onError={() => setBad(true)} onClick={onClick} />
}
