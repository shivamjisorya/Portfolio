import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '../data.js'
import { Section } from './Rows.jsx'

export default function Skills() {
  const [active, setActive] = useState(0)
  const all = skills.flatMap((s) => s.items)

  return (
    <Section id="skills" title="My Skill Universe" sub="Tech stack" className="skills">
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...all, ...all].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
      <div className="skills-grid">
        <div className="skills-tabs" role="tablist">
          {skills.map((s, i) => (
            <button key={s.group} role="tab" aria-selected={active === i} className={active === i ? 'on' : ''} onClick={() => setActive(i)}>
              <span className="skills-idx">0{i + 1}</span>
              {s.group}
              <span className="skills-count">{s.items.length}</span>
            </button>
          ))}
        </div>
        <div className="skills-panel">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="skills-chips" initial="hide" animate="show" exit="hide">
              {skills[active].items.map((it, i) => (
                <motion.span
                  key={it}
                  className="chip"
                  variants={{ hide: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  {it}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
