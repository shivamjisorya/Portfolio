import { profile } from '../data.js'

// Shows the photo when one is set in data.js; otherwise a stylised monogram poster.
export default function Portrait({ className = '' }) {
  if (profile.photo) {
    return <img className={`portrait ${className}`} src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} />
  }
  return (
    <div className={`portrait portrait-fallback ${className}`} aria-label={profile.name}>
      <svg viewBox="0 0 200 260" aria-hidden>
        <defs>
          <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a0a0e" />
            <stop offset="1" stopColor="#0d0d0d" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="95" r="44" fill="url(#pg)" stroke="#e50914" strokeOpacity=".35" />
        <path d="M20 260c6-62 40-96 80-96s74 34 80 96z" fill="url(#pg)" stroke="#e50914" strokeOpacity=".35" />
      </svg>
      <span className="portrait-mono">SJ</span>
    </div>
  )
}
