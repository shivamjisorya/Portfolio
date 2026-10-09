import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { scrollToId } from '../smooth.js'

const links = [
  ['home', 'Home'],
  ['experience', 'Experience'],
  ['originals', 'Projects'],
  ['skills', 'Skills'],
  ['journey', 'Journey'],
  ['contact', 'Contact'],
]

export default function Navbar({ viewer, onSwitch }) {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setMenu(false)
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
    else scrollToId(id)
  }

  return (
    <motion.header
      className={`nav ${solid ? 'nav-solid' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <button className="nav-logo" onClick={() => go('home')}>
        {profile.first}
      </button>
      <nav className={`nav-links ${menu ? 'open' : ''}`}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </nav>
      <div className="nav-right">
        <a className="nav-hire" href={`mailto:${profile.email}`}>
          Hire me
        </a>
        <button className="nav-avatar" style={{ '--c': viewer.color }} onClick={onSwitch} title="Switch profile">
          {viewer.emoji}
        </button>
        <button className="nav-burger" onClick={() => setMenu((m) => !m)} aria-label="Menu">
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}
