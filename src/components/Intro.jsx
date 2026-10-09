import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data.js'

// Cinematic name reveal: letters drop in, glow, then the whole word zooms into the screen.
export default function Intro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3600)
    const skip = (e) => {
      if (e.type === 'keydown' && !['Enter', ' ', 'Escape'].includes(e.key)) return
      onDone()
    }
    window.addEventListener('keydown', skip)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', skip)
    }
  }, [onDone])

  const letters = profile.first.split('')

  return (
    <motion.div className="intro" onClick={onDone} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="intro-word"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.08, 1.08, 26], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3.4, times: [0, 0.55, 0.75, 1], ease: [0.7, 0, 0.84, 0] }}
      >
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: -120, opacity: 0, rotateX: 90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.15 + i * 0.09, type: 'spring', stiffness: 220, damping: 18 }}
          >
            {l}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className="intro-beam"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ delay: 0.9, duration: 1.6 }}
      />
      <motion.p className="intro-skip" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1 }}>
        click to skip
      </motion.p>
    </motion.div>
  )
}
