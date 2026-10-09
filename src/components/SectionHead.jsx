import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Red kicker + big condensed title, e.g. "— THE SCREENPLAY / THE FULL STORY".
export default function SectionHead({ kicker, title, aside }) {
  return (
    <div className="sec-head">
      <div>
        <motion.p
          className="sec-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          {kicker}
        </motion.p>
        <h2 className="sec-title">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            {title}
          </motion.span>
        </h2>
      </div>
      {aside && <p className="sec-aside">{aside}</p>}
    </div>
  )
}

export const reveal = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-10% 0px' },
  transition: { duration: 0.8, ease, delay: d },
})
