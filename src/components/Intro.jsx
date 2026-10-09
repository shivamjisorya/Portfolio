import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data.js'

const ease = [0.22, 1, 0.36, 1]

// Opening titles, in three beats like a streaming original:
// 1. "A JISORYA ORIGINAL"  2. the name + THE SERIES  3. the lead rises in with a PLAY button.
export default function Intro({ onDone }) {
  const [beat, setBeat] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t1 = setTimeout(() => setBeat(1), reduce ? 200 : 1900)
    const t2 = setTimeout(() => setBeat(2), reduce ? 400 : 3700)
    const onKey = (e) => {
      if (e.key === 'Escape') onDone()
      if (e.key === 'Enter' || e.key === ' ') beat === 2 ? onDone() : setBeat(2)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('keydown', onKey)
    }
  }, [onDone, beat])

  return (
    <motion.div className="intro" exit={{ opacity: 0, filter: 'blur(14px)', scale: 1.04 }} transition={{ duration: 0.7, ease }}>
      <div className="intro-bg" aria-hidden />
      <button className="skip-intro" onClick={onDone}>
        Skip Intro
      </button>

      <AnimatePresence>
        {beat === 0 && (
          <motion.p
            key="orig"
            className="intro-original"
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.45em' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease }}
          >
            A {profile.last} ORIGINAL
          </motion.p>
        )}
      </AnimatePresence>

      {beat >= 1 && (
        <motion.div
          className="intro-title-wrap"
          initial={false}
          animate={beat === 2 ? { y: '-26vh', scale: 0.78 } : { y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease }}
        >
          <motion.div
            className="intro-glow"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
            aria-hidden
          />
          <h1 className="intro-name" aria-label={profile.first}>
            {profile.first.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.07, duration: 0.9, ease }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
          <motion.p className="intro-series" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            THE SERIES
          </motion.p>
        </motion.div>
      )}

      <AnimatePresence>
        {beat === 2 && (
          <motion.div className="intro-lead" initial={{ opacity: 0, y: 120 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.15 }}>
            <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} />
            <div className="intro-lead-info">
              <p className="intro-role">SOFTWARE ENGINEER • REACT • NODE.JS • CI/CD</p>
              <motion.button
                className="intro-play"
                onClick={onDone}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                autoFocus
              >
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                  <path d="M6 4l15 8-15 8z" fill="currentColor" />
                </svg>
                PLAY
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
