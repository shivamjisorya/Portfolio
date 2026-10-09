import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { profile, greetings } from '../data.js'
import { gsap } from '../smooth.js'
import Portrait from './Portrait.jsx'

const ease = [0.22, 1, 0.36, 1]
const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.8, ease } })

export default function Hero({ viewer, onMore }) {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.hero-content', { yPercent: -35, opacity: 0, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-art', { scale: 1.15, yPercent: 12, ease: 'none', scrollTrigger: st })
    }, root)
    return () => ctx.revert()
  }, [])

  const [first, ...rest] = profile.name.toUpperCase().split(' ')

  return (
    <section className="hero" id="home" ref={root}>
      <div className="hero-art">
        <div className="hero-glow" />
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: 80, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
        >
          <Portrait />
        </motion.div>
      </div>
      <div className="hero-fade" />

      <div className="hero-content">
        <motion.div className="hero-series" {...up(0.4)}>
          <span className="s-mark">S</span> P O R T F O L I O
        </motion.div>
        <h1 className="hero-title">
          {[first, rest.join(' ')].map((w, wi) => (
            <span className="hero-line" key={wi}>
              {w.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + wi * 0.25 + i * 0.04, duration: 0.8, ease }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.div className="hero-top10" {...up(1.1)}>
          <span className="top10-badge">
            TOP
            <b>10</b>
          </span>
          <span>#1 at Digital Paani · Star Performer of the Year 2025-26</span>
        </motion.div>
        <motion.p className="hero-meta" {...up(1.2)}>
          <span className="match">99% Match</span>
          <span>2024 – Now</span>
          <span className="hd">HD</span>
          <span>{profile.tagline}</span>
        </motion.p>
        <motion.p className="hero-desc" {...up(1.3)}>
          {greetings[viewer.id]} I build scalable React and Node.js products, automate CI/CD pipelines, and ship
          production features that teams can rely on.
        </motion.p>
        <motion.div className="hero-cta" {...up(1.45)}>
          <a className="btn btn-play" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
              <path d="M6 4l15 8-15 8z" fill="currentColor" />
            </svg>
            Resume
          </a>
          <button className="btn btn-info" onClick={onMore}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 11v6M12 7.5v.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
            More Info
          </button>
        </motion.div>
      </div>
      <motion.div className="hero-rating" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}>
        U/A 2+ YRS EXP
      </motion.div>
      <div className="scroll-cue" aria-hidden>
        <span />
      </div>
    </section>
  )
}
