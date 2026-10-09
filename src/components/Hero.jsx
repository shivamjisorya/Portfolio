import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { profile, sections } from '../data.js'
import { gsap, scrollToId } from '../smooth.js'
import Slider from './Slider.jsx'

const ease = [0.22, 1, 0.36, 1]
const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.8, ease } })

export default function Hero({ order, onMore }) {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.hero-content', { yPercent: -25, opacity: 0.2, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-portrait', { yPercent: 10, scale: 1.06, ease: 'none', scrollTrigger: st })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={root}>
      <div className="hero-art" aria-hidden>
        <div className="hero-glow" />
        <motion.img
          className="hero-portrait"
          src={`${import.meta.env.BASE_URL}${profile.photo}`}
          alt=""
          initial={{ opacity: 0, x: 60, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.3, ease, delay: 0.2 }}
        />
        {profile.badges.map((b, i) => (
          <motion.div key={b.k} className={`hero-badge hero-badge-${i}`} {...up(1.2 + i * 0.15)}>
            <strong>{b.k}</strong>
            <span>{b.v}</span>
          </motion.div>
        ))}
      </div>
      <div className="hero-fade" />

      <div className="hero-content">
        <motion.div className="hero-series" {...up(0.3)}>
          <span className="s-mark">S</span> SERIES
        </motion.div>
        <h1 className="hero-title">
          {profile.first.split('').map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.9, ease }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>
        <motion.p className="hero-the-series" {...up(0.8)}>
          THE SERIES
        </motion.p>
        <motion.p className="hero-meta" {...up(0.95)}>
          <span className="hero-rating">FULL-STACK</span>
          {profile.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </motion.p>
        <motion.p className="hero-genres" {...up(1.05)}>
          SOFTWARE ENGINEER • REACT • NODE.JS • CI/CD
        </motion.p>
        <motion.p className="hero-desc" {...up(1.15)}>
          {profile.heroDesc}
        </motion.p>
        <motion.div className="hero-cta" {...up(1.3)}>
          <button className="btn btn-play" onClick={() => scrollToId(order[0])}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path d="M6 4l15 8-15 8z" fill="currentColor" />
            </svg>
            Play Intro
          </button>
          <a className="btn btn-ghost" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            View Resume
          </a>
          <button className="btn-round" onClick={onMore} aria-label="More info">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path d="M12 11v6M12 7.5v.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </button>
        </motion.div>
      </div>

      <motion.div className="continue" {...up(1.5)}>
        <div className="continue-head">
          <h2>Continue Exploring</h2>
          <span>Pick an episode, or just keep scrolling</span>
        </div>
        <Slider>
          {order.map((id, i) => {
            const s = sections[id]
            return (
              <button
                key={id}
                className="ep-card"
                style={{ '--a': s.grad[0], '--b': s.grad[1] }}
                onClick={() => scrollToId(id)}
              >
                <span className="ep-glyph" aria-hidden>
                  {s.glyph}
                </span>
                <span className="ep-play" aria-hidden>
                  <svg viewBox="0 0 24 24" width="12" height="12">
                    <path d="M7 5l12 7-12 7z" fill="currentColor" />
                  </svg>
                </span>
                <span className="ep-num">EPISODE {String(i + 1).padStart(2, '0')}</span>
                <strong className="ep-title">{s.ep}</strong>
                <span className="ep-sub">{s.sub}</span>
                <span className="ep-bar">
                  <i style={{ width: `${30 + ((i * 37) % 60)}%` }} />
                </span>
              </button>
            )
          })}
        </Slider>
      </motion.div>
    </section>
  )
}
