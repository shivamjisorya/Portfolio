import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import FullStory from './FullStory.jsx'
import Moments from './Moments.jsx'
import Skills from './Skills.jsx'
import Originals from './Originals.jsx'
import About from './About.jsx'
import Journey from './Journey.jsx'
import TopPicks from './TopPicks.jsx'
import Contact from './Contact.jsx'
import Modal from './Modal.jsx'
import { sectionOrder } from '../data.js'
import { startSmoothScroll, stopSmoothScroll, ScrollTrigger } from '../smooth.js'

const views = {
  resume: FullStory,
  moments: Moments,
  skills: Skills,
  originals: Originals,
  about: About,
  journey: Journey,
  picks: TopPicks,
}

export default function Browse({ viewer, onSwitch, onReplay }) {
  const [open, setOpen] = useState(null) // { kind, item }
  const [toast, setToast] = useState(true)
  const order = sectionOrder[viewer.id]

  useEffect(() => {
    startSmoothScroll()
    const t = setTimeout(() => ScrollTrigger.refresh(), 500)
    const h = setTimeout(() => setToast(false), 4200)
    return () => {
      clearTimeout(t)
      clearTimeout(h)
      stopSmoothScroll()
    }
  }, [])

  return (
    <div className="browse">
      <Navbar viewer={viewer} order={order} onSwitch={onSwitch} />
      <Hero order={order} onMore={() => setOpen({ kind: 'about' })} />
      <main>
        {order.map((id) => {
          const View = views[id]
          return <View key={id} onOpen={setOpen} />
        })}
      </main>
      <Contact onReplay={onReplay} />
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 30, x: '-50%' }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Now watching as <b>{viewer.label}</b> · {viewer.caption}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>{open && <Modal data={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div>
  )
}
