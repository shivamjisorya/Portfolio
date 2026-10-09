import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { journey } from '../data.js'
import { gsap } from '../smooth.js'
import { Section } from './Rows.jsx'

export default function Journey() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journey-line-fill',
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top 70%', end: 'bottom 60%', scrub: true } },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <Section id="journey" title="My Journey" sub="The full story so far">
      <div className="journey" ref={ref}>
        <div className="journey-line">
          <span className="journey-line-fill" />
        </div>
        {journey.map((j, i) => (
          <motion.div
            key={j.title}
            className={`journey-item ${i % 2 ? 'right' : 'left'}`}
            initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="journey-dot" />
            <div className="journey-card">
              <span className="journey-date">
                {j.month} {j.year}
              </span>
              <h3>{j.title}</h3>
              <span className="journey-place">{j.place}</span>
              <p>{j.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
