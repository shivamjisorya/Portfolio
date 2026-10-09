import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillGenres, originals } from '../data.js'
import SectionHead from './SectionHead.jsx'

// Which originals use a skill, for the hover hint.
const usedIn = (name) => originals.filter((o) => o.stack.some((s) => s.toLowerCase().includes(name.toLowerCase().split(' ')[0])))

export default function Skills() {
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(null)
  const g = skillGenres[active]
  const hits = hover ? usedIn(hover) : []

  return (
    <section className="sec" id="skills">
      <SectionHead kicker="Genres" title="My Skill Universe" aside="Hover or tap a skill to see where it shows up across the originals." />
      <div className="universe">
        <div className="genres" role="tablist">
          {skillGenres.map((s, i) => (
            <button key={s.genre} role="tab" aria-selected={active === i} className={active === i ? 'on' : ''} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
              <strong>{s.genre}</strong>
              <span>
                {s.items.length} skills · {s.caption}
              </span>
            </button>
          ))}
        </div>
        <div className="genre-panel">
          <p className="genre-line">
            <b>{g.genre}</b> · {g.caption}
          </p>
          <AnimatePresence mode="wait">
            <motion.div key={active} className="skill-grid" initial="hide" animate="show" exit="hide">
              {g.items.map(([name, abbr, primary], i) => (
                <motion.button
                  key={name}
                  className="skill"
                  onMouseEnter={() => setHover(name)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setHover(hover === name ? null : name)}
                  variants={{ hide: { opacity: 0, y: 20, scale: 0.92 }, show: { opacity: 1, y: 0, scale: 1 } }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <span className="skill-icon">{abbr}</span>
                  <span className="skill-name">{name}</span>
                  {primary && <span className="skill-primary">PRIMARY</span>}
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
          <p className="skill-hint">
            {hover
              ? hits.length
                ? `${hover} shows up in: ${hits.map((h) => h.title).join(', ')}`
                : `${hover}: part of the day-to-day toolkit`
              : ' '}
          </p>
        </div>
      </div>
    </section>
  )
}
