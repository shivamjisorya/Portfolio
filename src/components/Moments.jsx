import { motion } from 'framer-motion'
import { moments, certifications } from '../data.js'
import SectionHead, { reveal } from './SectionHead.jsx'
import Slider from './Slider.jsx'

function Laurel({ flip }) {
  return (
    <svg className={`laurel ${flip ? 'flip' : ''}`} viewBox="0 0 30 80" aria-hidden>
      <path d="M24 4C10 18 6 40 14 76" fill="none" stroke="currentColor" strokeWidth="1.6" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse key={i} cx={14 - i * 0.6} cy={14 + i * 11} rx="7" ry="3" transform={`rotate(-40 ${14 - i * 0.6} ${14 + i * 11})`} fill="currentColor" />
      ))}
    </svg>
  )
}

export default function Moments() {
  return (
    <section className="sec" id="moments">
      <SectionHead kicker="Awards Season" title="Top Moments" />
      <div className="moments">
        {moments.map((m, i) => (
          <motion.article key={m.title} className="moment" {...reveal(i * 0.07)} whileHover={{ y: -8 }}>
            <div className="moment-laurels">
              <Laurel />
              <span>{m.label}</span>
              <Laurel flip />
            </div>
            <h3>{m.title}</h3>
            <p className="moment-sub">{m.sub}</p>
            <p className="moment-org">{m.org}</p>
            <p className="moment-note">{m.note}</p>
          </motion.article>
        ))}
      </div>

      <div className="certs">
        <h3 className="certs-title">
          Certified <span>· {certifications.length} credentials</span>
        </h3>
        <Slider>
          {certifications.map((c, i) => (
            <motion.div key={c.title} className="cert" {...reveal(i * 0.08)}>
              <span className="cert-issuer">{c.issuer}</span>
              <strong>{c.title}</strong>
              <span className="cert-grade">{c.grade}</span>
            </motion.div>
          ))}
          <motion.div className="cert cert-next" {...reveal(0.2)}>
            <span className="cert-issuer">Next episode</span>
            <strong>Full Stack AI Engineering</strong>
            <span className="cert-grade">In production</span>
          </motion.div>
        </Slider>
      </div>
    </section>
  )
}
