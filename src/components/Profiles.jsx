import { motion } from 'framer-motion'
import { profiles } from '../data.js'

export default function Profiles({ onPick }) {
  return (
    <motion.section
      className="profiles"
      initial={{ opacity: 0, scale: 1.15 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1>Who’s watching?</h1>
      <div className="profiles-grid">
        {profiles.map((p, i) => (
          <motion.button
            key={p.id}
            className="profile-tile"
            onClick={() => onPick(p)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="profile-avatar" style={{ '--c': p.color }}>
              <span className="profile-emoji">{p.emoji}</span>
            </span>
            <span className="profile-name">{p.label}</span>
          </motion.button>
        ))}
      </div>
      <motion.p className="profiles-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        Each profile opens the same portfolio in a different order.
      </motion.p>
    </motion.section>
  )
}
