import { motion } from 'framer-motion'
import { profile, experience, education, originals, skillGenres, moments, certifications, stats } from '../data.js'
import SectionHead, { reveal } from './SectionHead.jsx'

// "The Screenplay": the resume itself, rendered as a page of the series.
export default function FullStory() {
  const pdf = `${import.meta.env.BASE_URL}${profile.resume}`
  return (
    <section className="sec" id="resume">
      <SectionHead kicker="The Screenplay" title="The Full Story" />
      <div className="story">
        <motion.article className="script" {...reveal()}>
          <header className="script-head">
            <div>
              <p className="script-starring">Starring</p>
              <h3>{profile.name}</h3>
              <p className="script-role">{profile.role}</p>
            </div>
            <div className="script-contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.phone}</span>
              <span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>{' '}
                ·{' '}
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            </div>
          </header>

          <div className="script-cols">
            <div>
              <h4>Work Experience</h4>
              {experience.map((e) => (
                <div className="script-item" key={e.title + e.period}>
                  <div className="script-row">
                    <strong>
                      {e.company} · {e.title}
                    </strong>
                    <span>{e.period}</span>
                  </div>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h4>Projects</h4>
              {originals.map((p) => (
                <div className="script-item" key={p.id}>
                  <div className="script-row">
                    <strong>{p.title}</strong>
                    <span>{p.year}</span>
                  </div>
                  <p className="script-stack">{p.stack.join(', ')}</p>
                </div>
              ))}

              <h4>Education</h4>
              {education.map((e) => (
                <div className="script-item" key={e.title}>
                  <div className="script-row">
                    <strong>{e.place}</strong>
                    <span>{e.period}</span>
                  </div>
                  <p className="script-stack">
                    {e.title} · {e.note}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h4>Skills</h4>
              {skillGenres.slice(0, 6).map((g) => (
                <p className="script-skill" key={g.genre}>
                  <b>{g.genre}:</b> {g.items.map((s) => s[0]).join(', ')}
                </p>
              ))}

              <h4>Achievements</h4>
              <ul>
                {moments.map((m) => (
                  <li key={m.title}>
                    <b>
                      {m.title} {m.sub}
                    </b>{' '}
                    · {m.org}
                  </li>
                ))}
              </ul>

              <h4>Certifications</h4>
              <ul>
                {certifications.map((c) => (
                  <li key={c.title}>
                    {c.title} · {c.grade}
                  </li>
                ))}
              </ul>

              <h4>Languages</h4>
              <p className="script-skill">English (C1) · Hindi (Native)</p>
            </div>
          </div>
        </motion.article>

        <motion.aside className="story-side" {...reveal(0.15)}>
          <p className="story-side-title">Every episode, on one page.</p>
          <p className="story-side-text">Experience, projects, skills, awards and certifications. Read it here or take a copy with you.</p>
          <a className="btn btn-play" href={pdf} target="_blank" rel="noreferrer">
            ▶ View Resume
          </a>
          <a className="btn btn-ghost" href={pdf} download="Shivam-Jisorya-Resume.pdf">
            ↓ Download Resume
          </a>
          <div className="story-stats">
            {stats.map((s) => (
              <div key={s.k}>
                <strong>{s.v}</strong>
                <span>{s.k}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
