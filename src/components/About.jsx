import { motion } from 'framer-motion'
import { profile } from '../data.js'
import SectionHead, { reveal } from './SectionHead.jsx'

const facts = [
  { k: 'Now', v: 'SDE-1, Digital Paani', s: 'Since Oct 2024' },
  { k: 'Studying', v: 'B.Tech, Computer Science', s: 'Maharshi Dayanand University' },
  { k: 'Primary stack', v: 'React · Node.js', s: 'with CI/CD on AWS' },
  { k: 'Based in', v: profile.location, s: 'India' },
]

export default function About() {
  const words = profile.quote.split(' ')
  return (
    <section className="sec" id="about">
      <SectionHead kicker="The Pilot" title="About Me" />
      <div className="about">
        <motion.figure
          className="about-photo"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
        >
          <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} />
          <figcaption>
            <span className="s-mark">S</span> {profile.name.toUpperCase()}
            <em>REV 001</em>
          </figcaption>
        </motion.figure>

        <div className="about-text">
          <blockquote className="quote">
            <span className="quote-mark" aria-hidden>
              “
            </span>
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.12 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
              >
                {w}{' '}
              </motion.span>
            ))}
            <footer>— {profile.name}</footer>
          </blockquote>

          <motion.div className="about-facts" {...reveal(0.2)}>
            {facts.map((f) => (
              <div key={f.k}>
                <span>{f.k}</span>
                <strong>{f.v}</strong>
                <small>{f.s}</small>
              </div>
            ))}
          </motion.div>
          <motion.div className="about-interests" {...reveal(0.3)}>
            <span>Interests</span>
            {['System Design', 'CI/CD', 'Chess', 'Music', 'AI Engineering'].map((t) => (
              <i key={t}>{t}</i>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
