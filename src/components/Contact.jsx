import { motion } from 'framer-motion'
import { profile } from '../data.js'

const ease = [0.22, 1, 0.36, 1]

export default function Contact({ onReplay }) {
  const words = 'TO BE CONTINUED...'.split(' ')
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" aria-hidden />
      <motion.p className="sec-kicker center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        The Next Episode
      </motion.p>
      <h2 className="contact-title">
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 80, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.9, ease }}
          >
            {w}
          </motion.span>
        ))}
      </h2>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7, ease }}>
        <p className="contact-name">{profile.name.toUpperCase()}</p>
        <p className="contact-role">{profile.role.toUpperCase()}</p>
        <div className="contact-links">
          <a className="btn btn-red" href={`mailto:${profile.email}`}>
            ▶ Let’s Build
          </a>
          <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="pill" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="pill" href={`mailto:${profile.email}`}>
            Email ↗
          </a>
        </div>
        <div className="contact-replay">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↺ Watch again</button>
          <button onClick={onReplay}>▸ Replay opening</button>
        </div>
      </motion.div>
      <footer className="footer">
        <span className="nav-logo">
          <span className="s-mark">S</span>
          <span>SERIES</span>
        </span>
        <span>
          © {new Date().getFullYear()} {profile.name}. A personal, streaming-inspired portfolio, not affiliated with any streaming service.
        </span>
      </footer>
    </section>
  )
}
