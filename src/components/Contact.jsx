import { motion } from 'framer-motion'
import { profile } from '../data.js'

const links = [
  { label: 'Email me', href: `mailto:${profile.email}`, primary: true },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Resume', href: `${import.meta.env.BASE_URL}${profile.resume}` },
]

export default function Contact() {
  const words = 'TO BE CONTINUED...'.split(' ')
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        ))}
      </h2>
      <motion.p
        className="contact-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        The next episode could be at your company. Let’s talk.
      </motion.p>
      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        {links.map((l) => (
          <a key={l.label} className={`btn ${l.primary ? 'btn-red' : 'btn-info'}`} href={l.href} target={l.primary ? undefined : '_blank'} rel="noreferrer">
            {l.label}
          </a>
        ))}
      </motion.div>
      <footer className="footer">
        <span>
          {profile.email} · {profile.location}
        </span>
        <span>© {new Date().getFullYear()} {profile.name}. Not a streaming service, just a portfolio.</span>
      </footer>
    </section>
  )
}
