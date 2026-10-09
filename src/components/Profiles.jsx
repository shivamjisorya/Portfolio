import { motion } from 'framer-motion'
import { profile, profiles } from '../data.js'
import ProfileAvatar from './ProfileAvatar.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Profiles({ onPick }) {
  return (
    <motion.section
      className="profiles"
      initial={{ opacity: 0, filter: 'blur(14px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease }}
    >
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7, ease }}>
        Who’s watching?
      </motion.h1>
      <div className="profiles-grid">
        {profiles.map((p, i) => (
          <motion.button
            key={p.id}
            className="profile-tile"
            onClick={() => onPick(p)}
            initial={{ opacity: 0, y: 50, rotateX: 25 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease }}
          >
            <ProfileAvatar p={p} className="profile-card" />
            <span className="profile-name">{p.label}</span>
            <span className="profile-caption">{p.caption}</span>
          </motion.button>
        ))}
      </div>
      <motion.p className="profiles-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        Every profile watches the same true story of {profile.name}. It only changes what plays first.
      </motion.p>
    </motion.section>
  )
}
