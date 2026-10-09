import { profile } from '../data.js'

// The tile used on "Who's watching?" and in the navbar: the main profile is the
// photo with a MAIN badge, the rest are gradient tiles with a glyph.
export default function ProfileAvatar({ p, className = '' }) {
  if (p.main) {
    return (
      <span className={`avatar avatar-main ${className}`}>
        <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt="" />
        <b className="avatar-badge">MAIN</b>
      </span>
    )
  }
  return (
    <span className={`avatar ${className}`} style={{ '--from': p.from, '--to': p.to }}>
      <span className="avatar-glyph">{p.icon}</span>
    </span>
  )
}
