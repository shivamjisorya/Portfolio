import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, sections } from '../data.js'
import { scrollToId } from '../smooth.js'
import ProfileAvatar from './ProfileAvatar.jsx'

export default function Navbar({ viewer, order, onSwitch }) {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40)
      let cur = 'home'
      for (const id of order) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [order])

  const go = (id) => {
    setMenu(false)
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
    else scrollToId(id)
  }

  const links = [['home', 'Home'], ...order.map((id) => [id, sections[id].nav])]

  return (
    <motion.header
      className={`nav ${solid ? 'nav-solid' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <button className="nav-logo" onClick={() => go('home')} aria-label="Home">
        <span className="s-mark">S</span>
        <span>SERIES</span>
      </button>
      <nav className={`nav-links ${menu ? 'open' : ''}`}>
        {links.map(([id, label]) => (
          <button key={id} className={active === id ? 'on' : ''} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </nav>
      <div className="nav-right">
        <a className="nav-build" href={`mailto:${profile.email}`}>
          Let’s Build
        </a>
        <button className="nav-avatar" onClick={onSwitch} title="Switch profile">
          <ProfileAvatar p={viewer} />
        </button>
        <button className="nav-burger" onClick={() => setMenu((m) => !m)} aria-label="Menu">
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}
