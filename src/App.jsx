import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Intro from './components/Intro.jsx'
import Profiles from './components/Profiles.jsx'
import Browse from './components/Browse.jsx'
import { profiles } from './data.js'

export default function App() {
  const [stage, setStage] = useState('intro')
  const [viewer, setViewer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [stage])

  const toProfiles = useCallback(() => setStage('profiles'), [])

  return (
    <>
      <div className="grain" aria-hidden />
      <AnimatePresence mode="wait">
        {stage === 'intro' && <Intro key="intro" onDone={toProfiles} />}
        {stage === 'profiles' && (
          <Profiles
            key="profiles"
            onPick={(p) => {
              setViewer(p)
              setStage('browse')
            }}
          />
        )}
        {stage === 'browse' && (
          <motion.div key="browse" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <Browse viewer={viewer ?? profiles[0]} onSwitch={toProfiles} onReplay={() => setStage('intro')} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
