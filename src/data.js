// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Shivam Jisorya',
  first: 'SHIVAM',
  last: 'JISORYA',
  role: 'Software Development Engineer',
  tagline: 'Full-Stack Engineer · React · Node.js · CI/CD',
  location: 'Gurugram, Haryana',
  email: 'jisoryas26@gmail.com',
  phone: '+91 8287719787',
  linkedin: 'https://www.linkedin.com/in/shivam-jisorya-22107a204/',
  github: 'https://github.com/shivamjisorya',
  site: 'https://shivamjisorya.github.io/Portfolio/',
  resume: 'resume.pdf', // public/resume.pdf
  photo: 'photo.png', // public/photo.png
  summary:
    'Software Development Engineer specializing in React.js and Node.js, with a strong track record of delivering scalable and maintainable solutions. I automate and optimize CI/CD pipelines to make deployments more reliable, and I have shipped high-impact projects including Honda Sampark. I do my best work in fast-paced, cross-functional engineering teams.',
  quote:
    'A Software Development Engineer who turns ideas into production-ready software, from React interfaces to the CI/CD pipelines that ship them.',
  heroDesc:
    'A Software Development Engineer building scalable React and Node.js products, a platform-wide trigger engine, and the CI/CD pipelines that ship them.',
  // Meta line under the hero title
  meta: ['2024 – Present', 'B.Sc. IT', '6 Originals', '6 Awards'],
  badges: [
    { k: 'Star Performer', v: 'Digital Paani 2025-26' },
    { k: '2+ Years', v: 'Shipping to production' },
  ],
}

// "Who's watching?" profiles. Each one plays the same story in a different order.
export const profiles = [
  { id: 'main', label: 'Shivam', caption: 'The full series, in order', main: true },
  { id: 'recruiter', label: 'Recruiter', caption: 'Resume, achievements & skills first', icon: 'R', from: '#5fb6d6', to: '#2b6f9e' },
  { id: 'developer', label: 'Developer', caption: 'Projects, stack & GitHub first', icon: '</>', from: '#5ccf7a', to: '#23874a' },
  { id: 'creative', label: 'Creative', caption: 'The story arc & highlights first', icon: '✦', from: '#f5b53d', to: '#d36a14' },
]

// Section ids, used by the navbar, the "Continue Exploring" row and page order.
export const sections = {
  resume: { nav: 'Resume', ep: 'The Full Story', sub: 'Every episode, one page', grad: ['#4b1f8f', '#1c1030'], glyph: 'CV' },
  moments: { nav: 'Moments', ep: 'My Achievements', sub: '6 moments · 2 certifications', grad: ['#c4161c', '#4a0a0d'], glyph: '★' },
  skills: { nav: 'Skills', ep: 'My Skills', sub: '7 genres · 30+ skills', grad: ['#1b6ea8', '#0b2338'], glyph: '{ }' },
  originals: { nav: 'Originals', ep: 'My Projects', sub: '6 originals', grad: ['#b3122e', '#3b0612'], glyph: 'S' },
  about: { nav: 'About', ep: 'About Me', sub: 'The pilot', grad: ['#7a2cc9', '#220c3d'], glyph: 'SJ' },
  journey: { nav: 'Journey', ep: 'My Journey', sub: '5 seasons', grad: ['#c27a12', '#3a2205'], glyph: 'S05' },
  picks: { nav: 'Top Picks', ep: 'Top Picks', sub: 'If you only watch six', grad: ['#1f8a4c', '#082615'], glyph: '#1' },
}

export const sectionOrder = {
  main: ['resume', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  recruiter: ['resume', 'moments', 'skills', 'journey', 'originals', 'about', 'picks'],
  developer: ['originals', 'skills', 'resume', 'journey', 'moments', 'about', 'picks'],
  creative: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'resume'],
}

export const experience = [
  {
    title: 'Software Development Engineer - 1',
    company: 'Digital Paani',
    org: 'Digital EcoInnovission Pvt. Ltd',
    period: 'Oct 2024 – Present',
    place: 'Gurugram, Haryana',
    points: [
      'Built and automated CI/CD pipelines that streamlined deployments and cut release time.',
      'Developed scalable React.js front-end features for production applications.',
      'Designed and implemented a scalable trigger system for tasks, events, insights, and notifications.',
    ],
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'Digital Paani',
    org: 'Digital EcoInnovission Pvt. Ltd',
    period: 'Jun 2024 – Oct 2024',
    place: 'Gurugram, India',
    points: ['Took part in code reviews that kept quality high and improved team coding practices.', 'Found and eliminated over 100 system errors.'],
  },
  {
    title: 'Node.js Developer',
    company: 'Manthan IT Solutions',
    org: 'Manthan IT Solutions Pvt. Ltd',
    period: 'Jan 2024 – Jun 2024',
    place: 'New Delhi, India',
    points: ['Awarded Employee of the Month for outstanding performance and delivery.', 'Delivered the Honda Sampark website and Jubilant HRM Software end to end.'],
  },
]

export const education = [
  { title: 'Bachelor of Science, Information Technology', place: 'Maharshi Dayanand University, Rohtak', period: 'Jul 2024', note: 'Graduated with Distinction' },
  { title: 'Full Stack Development Course', place: 'VSIT Institute', period: 'Jan 2024', note: 'First position in the batch · A+ grade' },
]

export const originals = [
  {
    id: 'trigger',
    title: 'Trigger Engine',
    kicker: 'Backend · Architecture · Scale',
    studio: 'Digital Paani',
    year: '2025',
    art: 'bolt',
    grad: ['#e50914', '#3a0408'],
    desc: 'A scalable trigger system that powers tasks, events, insights, and notifications across the platform. It is event-driven and built to grow with the product.',
    stack: ['Node.js', 'Microservices', 'AWS Lambda'],
  },
  {
    id: 'cicd',
    title: 'Ship It: CI/CD',
    kicker: 'DevOps · Automation',
    studio: 'Digital Paani',
    year: '2024',
    art: 'pipeline',
    grad: ['#2c7be5', '#08213f'],
    desc: 'Automated build, test, and deploy pipelines with GitHub Actions. Releases became more reliable and release time dropped noticeably.',
    stack: ['GitHub Actions', 'AWS EC2', 'GitLab'],
  },
  {
    id: 'honda',
    title: 'Honda Sampark',
    kicker: 'Web · Client · End-to-End',
    studio: 'Manthan IT',
    year: '2024',
    art: 'globe',
    grad: ['#f0a020', '#3d2304'],
    desc: 'The Honda Sampark website, delivered end to end from backend APIs to production rollout.',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'jubilant',
    title: 'Jubilant HRM',
    kicker: 'HR Tech · Full Stack',
    studio: 'Manthan IT',
    year: '2024',
    art: 'people',
    grad: ['#16a37a', '#03261b'],
    desc: 'HRM software for Jubilant, built and delivered end to end. It covers employee workflows, records, and admin tooling.',
    stack: ['Node.js', 'REST APIs', 'SQL'],
  },
  {
    id: 'iicl',
    title: 'IICL Portal',
    kicker: 'EdTech · Auth · Dashboards',
    studio: 'Student & Admin',
    year: '2024',
    art: 'shield',
    grad: ['#8a3ffc', '#1d0a3d'],
    desc: 'A full-featured platform with dedicated Student and Admin dashboards, secure authentication, role-based access, and academic workflows, taken from development all the way to deployment.',
    stack: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 'mivps',
    title: 'MIVPS SMS',
    kicker: 'EdTech · SEO · Responsive',
    studio: '500+ daily students',
    year: '2024',
    art: 'grid',
    grad: ['#e8457c', '#3d0a1d'],
    desc: 'A student management system with Admin and Student panels used by more than 500 students every day. The UI works across devices and browsers, and the site is fast, SEO-friendly, and on-brand.',
    stack: ['React.js', 'Node.js', 'SQL'],
  },
]

// "Top Moments": award-season laurel cards
export const moments = [
  { label: 'Company Award', title: 'Star Performer', sub: 'Of the Year', org: 'Digital Paani · 2025-26', note: 'Recognised as the star performer across the company for the year.' },
  { label: 'Peer Voted', title: 'Most Shoutouts', sub: 'Of the Year', org: 'Digital Paani · 2025', note: 'Most shoutouts from teammates across the year.' },
  { label: 'Monthly Award', title: 'Employee', sub: 'Of the Month', org: 'Manthan IT · Apr 2024', note: 'For outstanding performance and delivery on client projects.' },
  { label: 'Batch Topper', title: 'First Position', sub: 'A+ Grade', org: 'VSIT Full Stack Course', note: 'Finished first in the batch of the full stack course.' },
  { label: 'Special Mention', title: 'Best Product', sub: 'Dev Performer', org: 'VSIT Institute · 2024', note: 'Awarded for end-to-end project delivery.' },
  { label: 'Graduation', title: 'Distinction', sub: 'B.Sc. IT', org: 'Maharshi Dayanand University', note: 'Graduated with distinction in Information Technology.' },
]

export const certifications = [
  { issuer: 'VSIT', title: 'Full Stack Web Development', grade: 'A+' },
  { issuer: 'Boot Camp', title: 'React Free Boot Camp', grade: 'Completed' },
]

// "My Skill Universe": genres on the left, skills on the right
export const skillGenres = [
  { genre: 'Languages', caption: 'JavaScript is the primary language', items: [['JavaScript', 'JS', true], ['TypeScript', 'TS'], ['SQL', 'SQ'], ['HTML5', 'H5'], ['CSS3', 'C3']] },
  { genre: 'Frontend', caption: 'Interfaces & the web platform', items: [['React.js', 'Re', true], ['Responsive UI', 'UI'], ['SEO', 'SE'], ['Dashboards', 'Db']] },
  { genre: 'Backend', caption: 'Server-side logic', items: [['Node.js', 'No', true], ['Express', 'Ex'], ['REST APIs', 'AP'], ['Trigger Systems', 'Tr']] },
  { genre: 'DevOps & Cloud', caption: 'Shipping & infrastructure', items: [['CI/CD', 'CI', true], ['GitHub Actions', 'GA'], ['AWS EC2', 'E2'], ['AWS Lambda', 'λ']] },
  { genre: 'Databases', caption: 'Storage & querying', items: [['PostgreSQL', 'Pg'], ['MongoDB', 'Mg'], ['SQL', 'SQ']] },
  { genre: 'Tools', caption: 'How the team works', items: [['GitHub', 'Gh'], ['GitLab', 'Gl'], ['Code Review', 'CR']] },
  { genre: 'Interests', caption: 'Coming soon to the series', items: [['Chess', '♟'], ['Music', '♫'], ['AI Engineering', 'AI']] },
]

// "5 Seasons": the journey
export const seasons = [
  {
    n: '01',
    name: 'The Beginning',
    years: '2021 – 2024',
    blurb: 'A B.Sc. in Information Technology at MDU, where backend work with Node.js, REST APIs and databases first clicked.',
    episodes: [{ title: 'The Student', when: 'MDU, Rohtak', note: 'B.Sc. Information Technology. Graduated with distinction in Jul 2024.', tags: ['Node.js', 'REST', 'SQL'] }],
  },
  {
    n: '02',
    name: 'Learning to Build',
    years: 'Jan 2024',
    blurb: 'A full stack course at VSIT that turned theory into shipped products, and a first place finish.',
    episodes: [
      { title: 'The Topper', when: 'VSIT Institute', note: 'First position in the batch with an A+ grade.', tags: ['Full Stack', 'A+'] },
      { title: 'The Builder', when: 'VSIT Institute', note: 'Best Product Development Performer for end-to-end delivery.', tags: ['Product', 'Delivery'] },
    ],
  },
  {
    n: '03',
    name: 'The Pilot',
    years: 'Jan – Jun 2024',
    blurb: 'The first professional role, as a Node.js Developer at Manthan IT Solutions, shipping for real clients.',
    episodes: [
      { title: 'Honda Sampark', when: 'Manthan IT', note: 'Delivered the Honda Sampark website end to end.', tags: ['Node.js', 'Express'] },
      { title: 'Jubilant HRM', when: 'Manthan IT', note: 'Built and delivered HRM software for Jubilant.', tags: ['HR Tech', 'SQL'] },
      { title: 'Employee of the Month', when: 'Apr 2024', note: 'Recognised for outstanding performance and delivery.', tags: ['Award'] },
    ],
  },
  {
    n: '04',
    name: 'Building Real Products',
    years: 'Jun 2024 – Now',
    blurb: 'Intern to SDE-1 at Digital Paani: a trigger engine, CI/CD pipelines, React features in production, and two company awards.',
    episodes: [
      { title: 'The Debugger', when: 'Intern · 2024', note: 'Found and eliminated over 100 system errors and joined the code review loop.', tags: ['Code Review', 'Quality'] },
      { title: 'The Architect', when: 'SDE-1 · 2025', note: 'Designed the trigger system behind tasks, events, insights and notifications.', tags: ['Node.js', 'AWS Lambda'] },
      { title: 'The Star Performer', when: '2025-26', note: 'Star Performer of the Year and Most Shoutouts of the Year.', tags: ['Award', 'CI/CD'] },
    ],
  },
  {
    n: '05',
    name: "What's Next",
    years: 'Now',
    blurb: 'A B.Tech in Computer Science at MDU, with the next arc pointed at full stack AI engineering.',
    episodes: [{ title: 'Full Stack AI', when: 'In production', note: 'Continuing studies toward Full Stack AI Engineering, alongside the day job.', tags: ['B.Tech CSE', 'AI'] }],
  },
]

// "Shivam's Top Picks": big outlined numbers
export const topPicks = [
  { label: 'Primary Stack', title: 'React.js', note: 'Production front-ends at Digital Paani', grad: ['#2c7be5', '#08213f'] },
  { label: 'The Flagship', title: 'Trigger Engine', note: 'Tasks, events, insights & notifications', grad: ['#e50914', '#3a0408'] },
  { label: 'Biggest Win', title: 'Star Performer', note: 'Digital Paani, 2025-26', grad: ['#d4a017', '#3a2a04'] },
  { label: 'Client Hit', title: 'Honda Sampark', note: 'Delivered end to end', grad: ['#f0a020', '#3d2304'] },
  { label: 'Most Users', title: 'MIVPS SMS', note: '500+ students every day', grad: ['#8a3ffc', '#1d0a3d'] },
  { label: 'Off-Screen', title: 'Chess & Music', note: 'Every move planned', grad: ['#16a37a', '#03261b'] },
]

export const stats = [
  { v: '2+', k: 'Years' },
  { v: '6', k: 'Originals' },
  { v: '6', k: 'Awards' },
]
