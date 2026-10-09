import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { pauseScroll } from '../smooth.js'

export default function Modal({ data, onClose }) {
  const { kind, item } = data

  useEffect(() => {
    pauseScroll(true)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      pauseScroll(false)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        data-lenis-prevent
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {kind === 'about' ? <AboutBody /> : <ProjectBody item={item} />}
      </motion.div>
    </motion.div>
  )
}

function ProjectBody({ item }) {
  return (
    <>
      <div className="modal-art" style={{ '--a': item.grad[0], '--b': item.grad[1] }}>
        <span className="og-top">
          <span className="s-mark">S</span> ORIGINAL
        </span>
        <h3>{item.title}</h3>
      </div>
      <div className="modal-body">
        <div className="modal-main">
          <p className="hero-meta">
            <span className="hero-rating">{item.year}</span>
            <span>{item.studio}</span>
          </p>
          <h4>{item.kicker}</h4>
          <p>{item.desc}</p>
        </div>
        <aside className="modal-side">
          <p>
            <span>Cast:</span> {item.stack.join(', ')}
          </p>
          <p>
            <span>Studio:</span> {item.studio}
          </p>
        </aside>
      </div>
    </>
  )
}

function AboutBody() {
  return (
    <div className="modal-body about-modal">
      <img className="about-modal-photo" src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} />
      <div className="modal-main">
        <h3 className="modal-name">{profile.name}</h3>
        <p className="hero-meta">
          <span className="hero-rating">{profile.role}</span>
          <span>{profile.location}</span>
        </p>
        <p>{profile.summary}</p>
        <div className="hero-cta">
          <a className="btn btn-play" href={`mailto:${profile.email}`}>
            Contact me
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
