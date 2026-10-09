import { useRef } from 'react'

export default function Slider({ children, className = '' }) {
  const ref = useRef(null)
  const by = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <div className="slider">
      <button className="slider-arrow left" onClick={() => by(-1)} aria-label="Scroll left">
        ‹
      </button>
      <div className={`slider-track ${className}`} ref={ref} data-lenis-prevent-wheel>
        {children}
      </div>
      <button className="slider-arrow right" onClick={() => by(1)} aria-label="Scroll right">
        ›
      </button>
    </div>
  )
}
