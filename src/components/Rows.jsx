import { useRef } from 'react'
import { motion } from 'framer-motion'
import { experience, originals, awards } from '../data.js'

const ease = [0.22, 1, 0.36, 1]

export function Section({ id, title, sub, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`row ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="row-head">
        <h2>{title}</h2>
        {sub && <span className="row-sub">{sub}</span>}
      </div>
      {children}
    </motion.section>
  )
}

function Slider({ children, className = '' }) {
  const ref = useRef(null)
  const by = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <div className="slider">
      <button className="slider-arrow left" onClick={() => by(-1)} aria-label="Scroll left">
        ‹
      </button>
      <div className={`slider-track ${className}`} ref={ref} data-lenis-prevent-wheel>
        {children}
      </div>
      <button className="slider-arrow right" onClick={() => by(1)} aria-label="Scroll right">
        ›
      </button>
    </div>
  )
}

const cardIn = (i) => ({
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.08, duration: 0.7, ease },
})

export function ExperienceRow({ viewer, onOpen }) {
  return (
    <Section id="experience" title={`Continue Watching for ${viewer.label}`} sub="Experience">
      <Slider>
        {experience.map((e, i) => (
          <motion.button
            key={e.id}
            className="ep-card"
            style={{ '--h': e.hue }}
            onClick={() => onOpen({ kind: 'experience', item: e })}
            {...cardIn(i)}
          >
            <motion.div className="ep-art" layoutId={`art-${e.id}`}>
              <span className="ep-tag">{e.tag}</span>
              <span className="ep-company">{e.company}</span>
              <span className="ep-play">▶</span>
            </motion.div>
            <div className="ep-progress">
              <span style={{ width: `${e.progress}%` }} />
            </div>
            <div className="ep-body">
              <strong>{e.title}</strong>
              <span>{e.period}</span>
            </div>
          </motion.button>
        ))}
      </Slider>
    </Section>
  )
}

export function OriginalsRow({ onOpen }) {
  return (
    <Section id="originals" title="Shivam Originals" sub="Projects">
      <Slider>
        {originals.map((p, i) => (
          <motion.button
            key={p.id}
            className="poster"
            style={{ '--h': p.hue }}
            onClick={() => onOpen({ kind: 'project', item: p })}
            {...cardIn(i)}
          >
            <motion.div className="poster-art" layoutId={`art-${p.id}`}>
              <span className="s-mark small">S</span>
              <span className="poster-kicker">{p.kicker}</span>
              <span className="poster-title">{p.title}</span>
              <span className="poster-new">NEW EPISODES</span>
            </motion.div>
            <div className="poster-hover">
              <span className="match">{p.match}% Match</span>
              <span className="poster-genres">{p.genre.join(' • ')}</span>
            </div>
          </motion.button>
        ))}
      </Slider>
    </Section>
  )
}

export function AwardsRow() {
  return (
    <Section id="awards" title="Top 10 in Achievements Today" sub="Awards & Honors">
      <Slider className="top10-track">
        {awards.map((a, i) => (
          <motion.div key={a.title} className="top10-item" {...cardIn(i)}>
            <span className="top10-num">{a.rank}</span>
            <div className="top10-card" style={{ '--h': 352 - i * 18 }}>
              <span className="s-mark small">S</span>
              <strong>{a.title}</strong>
              <span>{a.org}</span>
              <em>{a.year}</em>
            </div>
          </motion.div>
        ))}
      </Slider>
    </Section>
  )
}
