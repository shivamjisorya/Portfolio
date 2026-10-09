import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { seasons } from '../data.js'
import SectionHead from './SectionHead.jsx'

const ease = [0.22, 1, 0.36, 1]
const grads = [
  ['#e50914', '#3a0408'],
  ['#f0a020', '#3d2304'],
  ['#2c7be5', '#08213f'],
]

export default function Journey() {
  const [active, setActive] = useState(3)
  const s = seasons[active]
  const tabs = useRef(null)

  // Keep the selected season visible when the tab strip scrolls (mobile).
  useEffect(() => {
    const on = tabs.current?.querySelector('.on')
    if (on) tabs.current.scrollLeft = on.offsetLeft - tabs.current.offsetLeft - 16
  }, [active])

  return (
    <section className="sec" id="journey">
      <SectionHead kicker={`${seasons.length} Seasons`} title="My Journey" aside="Pick a season. Every one of them is a true story." />
      <div className="season-tabs" role="tablist" ref={tabs}>
        {seasons.map((x, i) => (
          <button key={x.n} role="tab" aria-selected={active === i} className={active === i ? 'on' : ''} onClick={() => setActive(i)}>
            <small>Season {x.n}</small>
            {x.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45, ease }}>
          <div className="season-head">
            <h3>
              <span>S{s.n}</span> {s.name}
            </h3>
            <span className="season-meta">
              {s.years} · {s.episodes.length} Episode{s.episodes.length > 1 ? 's' : ''}
            </span>
          </div>
          <p className="season-blurb">{s.blurb}</p>
          <div className="episodes">
            {s.episodes.map((e, i) => (
              <motion.article
                key={e.title}
                className="episode"
                style={{ '--a': grads[i % 3][0], '--b': grads[i % 3][1] }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
              >
                <div className="episode-art">
                  <span className="episode-big" aria-hidden>
                    E{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="episode-code">
                    S{s.n} · EPISODE {String(i + 1).padStart(2, '0')}
                  </span>
                  <strong>{e.title}</strong>
                </div>
                <div className="episode-body">
                  <span className="episode-when">{e.when}</span>
                  <p>{e.note}</p>
                  <span className="episode-tags">
                    {e.tags.map((t) => (
                      <i key={t}>{t}</i>
                    ))}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
