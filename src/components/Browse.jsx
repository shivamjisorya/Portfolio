import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import { ExperienceRow, OriginalsRow, AwardsRow } from './Rows.jsx'
import Skills from './Skills.jsx'
import Journey from './Journey.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Modal from './Modal.jsx'
import { sectionOrder } from '../data.js'
import { startSmoothScroll, stopSmoothScroll, ScrollTrigger } from '../smooth.js'

export default function Browse({ viewer, onSwitch }) {
  const [open, setOpen] = useState(null) // { kind, item }

  useEffect(() => {
    startSmoothScroll()
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => {
      clearTimeout(t)
      stopSmoothScroll()
    }
  }, [])

  const sections = {
    experience: <ExperienceRow key="experience" viewer={viewer} onOpen={setOpen} />,
    originals: <OriginalsRow key="originals" onOpen={setOpen} />,
    awards: <AwardsRow key="awards" />,
    skills: <Skills key="skills" />,
    journey: <Journey key="journey" />,
    about: <About key="about" />,
  }

  return (
    <div className="browse">
      <Navbar viewer={viewer} onSwitch={onSwitch} />
      <Hero viewer={viewer} onMore={() => setOpen({ kind: 'about' })} />
      <main className="sections">{sectionOrder[viewer.id].map((id) => sections[id])}</main>
      <Contact />
      <AnimatePresence>{open && <Modal data={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div>
  )
}
