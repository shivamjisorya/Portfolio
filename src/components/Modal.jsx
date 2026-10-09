import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile, certifications } from '../data.js'
import { pauseScroll } from '../smooth.js'
import Portrait from './Portrait.jsx'

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
        {kind === 'about' ? <AboutBody /> : <ItemBody kind={kind} item={item} />}
      </motion.div>
    </motion.div>
  )
}

function ItemBody({ kind, item }) {
  const isProject = kind === 'project'
  return (
    <>
      <motion.div className="modal-art" layoutId={`art-${item.id}`} style={{ '--h': item.hue }}>
        <span className="s-mark small">S</span>
        <h3>{isProject ? item.title : item.company}</h3>
        <div className="modal-art-fade" />
      </motion.div>
      <div className="modal-body">
        <div className="modal-main">
          <p className="hero-meta">
            <span className="match">{isProject ? item.match : 100}% Match</span>
            <span>{isProject ? item.year : item.period}</span>
            <span className="hd">HD</span>
          </p>
          <h4>{isProject ? item.kicker : item.title}</h4>
          {isProject ? (
            <p>{item.desc}</p>
          ) : (
            <ol className="episodes">
              {item.points.map((p, i) => (
                <li key={i}>
                  <span className="ep-n">{i + 1}</span>
                  <p>{p}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
        <aside className="modal-side">
          <p>
            <span>Cast:</span> {item.stack.join(', ')}
          </p>
          <p>
            <span>{isProject ? 'Genres:' : 'Location:'}</span> {isProject ? item.genre.join(', ') : item.place}
          </p>
          {!isProject && (
            <p>
              <span>Studio:</span> {item.org}
            </p>
          )}
        </aside>
      </div>
    </>
  )
}

function AboutBody() {
  return (
    <div className="modal-body about-modal">
      <Portrait className="about-modal-photo" />
      <div className="modal-main">
        <h3 className="modal-name">{profile.name}</h3>
        <p className="hero-meta">
          <span className="match">{profile.role}</span>
          <span>{profile.location}</span>
        </p>
        <p>{profile.summary}</p>
        <p className="modal-side">
          <span>Certifications:</span> {certifications.join(' · ')}
        </p>
        <div className="hero-cta">
          <a className="btn btn-play" href={`mailto:${profile.email}`}>
            Contact me
          </a>
          <a className="btn btn-info" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
