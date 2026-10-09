// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Shivam Jisorya',
  first: 'SHIVAM',
  role: 'Software Development Engineer',
  tagline: 'Full Stack Engineer · React.js · Node.js · CI/CD',
  location: 'Gurugram, Haryana',
  email: 'jisoryas26@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shivam-jisorya-22107a204/',
  github: 'https://github.com/shivamjisorya',
  resume: 'resume.pdf', // put your PDF at public/resume.pdf
  photo: null, // put a photo in public/ and set e.g. 'photo.jpg'
  summary:
    'Software Development Engineer specializing in React.js and Node.js, with a strong track record of delivering scalable and maintainable solutions. I automate and optimize CI/CD pipelines to make deployments more reliable, and I have shipped high-impact projects including Honda Sampark. I do my best work in fast-paced, cross-functional engineering teams.',
  facts: [
    { k: 'Experience', v: '2+ years' },
    { k: 'Based in', v: 'Gurugram' },
    { k: 'Off-screen', v: 'Chess ♟ · Music 🎧' },
    { k: 'Languages', v: 'English (C1) · Hindi' },
  ],
}

export const profiles = [
  { id: 'recruiter', label: 'Recruiter', emoji: '🧑‍💼', color: '#e50914' },
  { id: 'developer', label: 'Developer', emoji: '👨‍💻', color: '#2f80ed' },
  { id: 'chess', label: 'Chess Player', emoji: '♟️', color: '#27ae60' },
  { id: 'explorer', label: 'Explorer', emoji: '🎧', color: '#f2a516' },
]

// Section order per profile
export const sectionOrder = {
  recruiter: ['experience', 'awards', 'originals', 'skills', 'journey', 'about'],
  developer: ['originals', 'skills', 'experience', 'journey', 'awards', 'about'],
  chess: ['awards', 'journey', 'originals', 'experience', 'skills', 'about'],
  explorer: ['about', 'originals', 'journey', 'skills', 'experience', 'awards'],
}

export const greetings = {
  recruiter: 'Looking for someone who ships? Start with the experience.',
  developer: 'Straight to the code. Here’s what I’ve built.',
  chess: 'Every move planned. Here are the wins.',
  explorer: 'Grab some popcorn. Here’s the whole story.',
}

export const experience = [
  {
    id: 'dp-sde1',
    title: 'Software Development Engineer - 1',
    company: 'Digital Paani',
    org: 'Digital EcoInnovission Pvt. Ltd',
    period: 'Oct 2024 – Present',
    place: 'Gurugram, Haryana',
    progress: 100,
    tag: 'NOW PLAYING',
    hue: 352,
    points: [
      'Built and automated CI/CD pipelines that streamlined deployments and cut release time.',
      'Developed scalable React.js front-end features for production applications.',
      'Designed and implemented a scalable trigger system for tasks, events, insights, and notifications.',
    ],
    stack: ['React.js', 'Node.js', 'GitHub Actions', 'AWS'],
  },
  {
    id: 'dp-intern',
    title: 'Software Development Engineer Intern',
    company: 'Digital Paani',
    org: 'Digital EcoInnovission Pvt. Ltd',
    period: 'Jun 2024 – Oct 2024',
    place: 'Gurugram, India',
    progress: 100,
    tag: 'S1 · COMPLETED',
    hue: 200,
    points: [
      'Took part in code reviews that kept quality high and improved team coding practices.',
      'Found and eliminated over 100 system errors.',
    ],
    stack: ['React.js', 'Node.js', 'Code Review'],
  },
  {
    id: 'manthan',
    title: 'Node.js Developer',
    company: 'Manthan IT Solutions',
    org: 'Manthan IT Solutions Pvt. Ltd',
    period: 'Jan 2024 – Jun 2024',
    place: 'New Delhi, India',
    progress: 100,
    tag: 'PILOT EPISODE',
    hue: 28,
    points: [
      'Awarded Employee of the Month for outstanding performance and delivery.',
      'Delivered the Honda Sampark website and Jubilant HRM Software end to end.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
]

export const originals = [
  {
    id: 'trigger',
    title: 'Trigger Engine',
    kicker: 'Digital Paani',
    genre: ['Backend', 'Architecture', 'Scale'],
    match: 99,
    year: '2025',
    hue: 352,
    desc: 'A scalable trigger system that powers tasks, events, insights, and notifications across the platform. It is event-driven and built to grow with the product.',
    stack: ['Node.js', 'Microservices', 'AWS Lambda'],
  },
  {
    id: 'cicd',
    title: 'Ship It: CI/CD',
    kicker: 'Digital Paani',
    genre: ['DevOps', 'Automation'],
    match: 98,
    year: '2024',
    hue: 210,
    desc: 'Automated build, test, and deploy pipelines with GitHub Actions. Releases became more reliable and release time dropped noticeably.',
    stack: ['GitHub Actions', 'EC2', 'GitLab'],
  },
  {
    id: 'honda',
    title: 'Honda Sampark',
    kicker: 'Manthan IT',
    genre: ['Web', 'Client', 'End-to-End'],
    match: 97,
    year: '2024',
    hue: 0,
    desc: 'The Honda Sampark website, delivered end to end from backend APIs to production rollout.',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'jubilant',
    title: 'Jubilant HRM',
    kicker: 'Manthan IT',
    genre: ['HR Tech', 'Full Stack'],
    match: 95,
    year: '2024',
    hue: 160,
    desc: 'HRM software for Jubilant, built and delivered end to end. It covers employee workflows, records, and admin tooling.',
    stack: ['Node.js', 'REST APIs', 'SQL'],
  },
  {
    id: 'iicl',
    title: 'IICL Portal',
    kicker: 'Student & Admin',
    genre: ['EdTech', 'Auth', 'Dashboards'],
    match: 96,
    year: '2024',
    hue: 265,
    desc: 'A full-featured platform with dedicated Student and Admin dashboards, secure authentication, role-based access, and academic workflows, taken from development all the way to deployment.',
    stack: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 'mivps',
    title: 'MIVPS SMS',
    kicker: '500+ daily students',
    genre: ['EdTech', 'SEO', 'Responsive'],
    match: 94,
    year: '2024',
    hue: 45,
    desc: 'A student management system with Admin and Student panels used by more than 500 students every day. The UI works across devices and browsers, and the site is fast, SEO-friendly, and on-brand.',
    stack: ['React.js', 'Node.js', 'SQL'],
  },
]

export const awards = [
  { rank: 1, title: 'Star Performer of the Year', org: 'Digital Paani', year: '2025-26' },
  { rank: 2, title: 'Most Shoutouts of the Year', org: 'Digital Paani', year: '2025' },
  { rank: 3, title: 'Employee of the Month', org: 'Manthan IT Solutions', year: 'Apr 2024' },
  { rank: 4, title: 'First Position · A+ Grade', org: 'VSIT Full Stack Course', year: '2024' },
  { rank: 5, title: 'Best Product Development Performer', org: 'VSIT Institute', year: '2024' },
  { rank: 6, title: 'Graduated with Distinction', org: 'B.Sc. IT · MDU', year: '2024' },
]

export const skills = [
  { group: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Trigger Systems'] },
  { group: 'Databases', items: ['PostgreSQL', 'SQL', 'MongoDB'] },
  { group: 'DevOps & Cloud', items: ['CI/CD', 'GitHub Actions', 'AWS EC2', 'AWS Lambda'] },
  { group: 'Tools', items: ['GitHub', 'GitLab', 'Code Review'] },
]

export const journey = [
  { year: '2024', month: 'Jan', title: 'Full Stack Development Course', place: 'VSIT Institute', note: 'Finished first in the batch with an A+ grade and won Best Product Development Performer.' },
  { year: '2024', month: 'Jan', title: 'Node.js Developer', place: 'Manthan IT Solutions', note: 'Shipped Honda Sampark and Jubilant HRM end to end and won Employee of the Month.' },
  { year: '2024', month: 'Jun', title: 'SDE Intern', place: 'Digital Paani', note: 'Fixed over 100 system errors and joined the code review loop.' },
  { year: '2024', month: 'Jul', title: 'B.Sc. Information Technology', place: 'Maharshi Dayanand University', note: 'Graduated with Distinction.' },
  { year: '2024', month: 'Oct', title: 'Software Development Engineer - 1', place: 'Digital Paani', note: 'Building CI/CD pipelines, the trigger engine, and React features in production.' },
  { year: 'Now', month: '', title: 'B.Tech Computer Science', place: 'Maharshi Dayanand University', note: 'In the university mentorship program and continuing my studies toward Full Stack AI Engineering.' },
]

export const certifications = ['Full Stack Web Development · A+', 'React Free Boot Camp']
