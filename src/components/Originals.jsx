import { useEffect, useRef } from 'react'
import { originals, profile } from '../data.js'
import { gsap } from '../smooth.js'

const arts = {
  bolt: <path d="M54 8L22 56h22l-6 36 34-50H50z" />,
  pipeline: (
    <>
      <circle cx="18" cy="50" r="9" />
      <circle cx="50" cy="50" r="9" />
      <circle cx="82" cy="50" r="9" />
      <path d="M27 50h14M59 50h14M76 30l8 8-8 8" />
    </>
  ),
  globe: (
    <>
      <circle cx="50" cy="50" r="36" />
      <path d="M14 50h72M50 14c-14 18-14 54 0 72M50 14c14 18 14 54 0 72" />
    </>
  ),
  people: (
    <>
      <circle cx="36" cy="36" r="12" />
      <circle cx="66" cy="40" r="10" />
      <path d="M14 82c2-18 12-26 22-26s20 8 22 26M56 80c2-14 8-20 14-20s14 6 16 20" />
    </>
  ),
  shield: (
    <>
      <path d="M50 10l34 12v26c0 22-14 36-34 44-20-8-34-22-34-44V22z" />
      <path d="M34 50l11 11 21-23" />
    </>
  ),
  grid: (
    <>
      <rect x="14" y="14" width="30" height="30" rx="4" />
      <rect x="56" y="14" width="30" height="30" rx="4" />
      <rect x="14" y="56" width="30" height="30" rx="4" />
      <rect x="56" y="56" width="30" height="30" rx="4" />
    </>
  ),
}

// "S Originals": the section pins and the posters slide sideways as you scroll.
export default function Originals({ onOpen }) {
  const root = useRef(null)
  const track = useRef(null)
  const bar = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const dist = () => track.current.scrollWidth - window.innerWidth + 60
      gsap.to(track.current, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => bar.current && (bar.current.style.transform = `scaleX(${self.progress})`),
        },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section className="originals" id="originals" ref={root}>
      <div className="originals-track" ref={track}>
        <div className="originals-intro">
          <p className="sec-kicker">
            <span className="s-mark">S</span> Originals · 2024 – 2025
          </p>
          <h2 className="originals-title">Originals</h2>
          <p>
            Six productions from the resume: a trigger engine, the pipelines that ship it, and four client builds. Open any title for the full story.
          </p>
          <span className="originals-cue">Scroll to browse →</span>
        </div>
        {originals.map((o) => (
          <button key={o.id} className="og" style={{ '--a': o.grad[0], '--b': o.grad[1] }} onClick={() => onOpen({ kind: 'project', item: o })}>
            <span className="og-top">
              <span className="s-mark">S</span> ORIGINAL
              <em>{o.year}</em>
            </span>
            <svg className="og-art" viewBox="0 0 100 100" aria-hidden>
              {arts[o.art]}
            </svg>
            <span className="og-kicker">{o.kicker}</span>
            <strong className="og-title">{o.title}</strong>
            <span className="og-desc">{o.desc}</span>
            <span className="og-tags">
              {o.stack.map((s) => (
                <i key={s}>{s}</i>
              ))}
            </span>
            <span className="og-actions">
              <span className="og-view">▶ View Project</span>
              <span className="og-studio">{o.studio}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="originals-progress">
        <span>ORIGINALS</span>
        <i>
          <b ref={bar} />
        </i>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </section>
  )
}
