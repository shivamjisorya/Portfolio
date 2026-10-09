import { motion } from 'framer-motion'
import { profile, topPicks } from '../data.js'
import SectionHead from './SectionHead.jsx'
import Slider from './Slider.jsx'

export default function TopPicks() {
  const first = profile.first.charAt(0) + profile.first.slice(1).toLowerCase()
  return (
    <section className="sec" id="picks">
      <SectionHead kicker="Top 6 Today" title={`${first}’s Top Picks`} />
      <Slider className="picks-track">
        {topPicks.map((p, i) => (
          <motion.div
            key={p.title}
            className="pick"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="pick-num">{i + 1}</span>
            <div className="pick-card" style={{ '--a': p.grad[0], '--b': p.grad[1] }}>
              <span className="pick-label">{p.label}</span>
              <strong>{p.title}</strong>
              <span className="pick-note">{p.note}</span>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  )
}
