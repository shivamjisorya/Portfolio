import { motion } from 'framer-motion'
import { profile, certifications } from '../data.js'
import { Section } from './Rows.jsx'
import Portrait from './Portrait.jsx'

export default function About() {
  return (
    <Section id="about" title="About Me" sub="Behind the scenes">
      <div className="about">
        <motion.div
          className="about-photo"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
        >
          <Portrait />
        </motion.div>
        <div className="about-text">
          <p className="about-lead">
            I turn ideas into <em>production-ready</em> software, from React interfaces to the pipelines that ship them.
          </p>
          <p>{profile.summary}</p>
          <div className="about-facts">
            {profile.facts.map((f) => (
              <div key={f.k}>
                <span>{f.k}</span>
                <strong>{f.v}</strong>
              </div>
            ))}
          </div>
          <p className="about-certs">
            <span>Certifications</span> {certifications.join(' · ')}
          </p>
        </div>
      </div>
    </Section>
  )
}
