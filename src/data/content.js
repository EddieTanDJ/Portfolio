/**
 * @typedef {{ label: string, href: string }} NavItem
 * @typedef {{ label: string, href: string, icon: string }} SocialLink
 * @typedef {{ name: string }} SkillItem
 * @typedef {{ role: string, company: string, period: string, highlights: string[] }} ExperienceItem
 * @typedef {{ title: string, description: string, image: string, tags: string[], links?: { label: string, href: string }[] }} ProjectItem
 */

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificate' },
  { label: 'Contact', href: '#contact' },
]

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eddie-tan-dejun',
    icon: assetPath('assets/png/linkedin-ico.png'),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/EddieTanDJ',
    icon: assetPath('assets/png/github-ico.png'),
  },
  {
    label: 'Email',
    href: 'mailto:taneddie1998@gmail.com',
    icon: assetPath('assets/png/email.png'),
  },
]

export const hero = {
  title: 'Eddie Tan',
  intro: 'Software engineer shaping practical systems that stay maintainable as teams and products grow.',
  roles: ['Developer', 'Problem Solver', 'Software Engineer'],
  ctaHref: '#experience',
  ctaLabel: 'View Experience',
  resumeUrl: 'https://drive.google.com/file/d/1Lgi8ChIBODG97UMWaWmRGeI2TP4h-6xY/view?usp=sharing',
  profileImage: assetPath('assets/png/Eddie.jpg'),
}

export const aboutParagraphs = [
  'Hey, I am Eddie Tan, a software engineer with three years of professional experience specializing in Java, Spring Boot, and OutSystems. I enjoy building efficient systems, solving difficult product problems, and collaborating closely with cross-functional teams.',
  'A collaborative team player with a solid grasp of software development methodologies and a commitment to continuous learning.',
  'I am open to opportunities where I can contribute, keep learning, and grow with a thoughtful engineering team. If that sounds like your environment, feel free to reach out.',
]

export const skills = [
  'Software Development Life Cycle (SDLC)',
  'OutSystems',
  'COBOL',
  'Java',
  'Spring Boot',
  'Android Development',
  'Business Analysis',
  'Full-Stack Development',
  'Data Analysis',
  'Data Visualization',
  'AWS',
  'Agile Methodologies',
].map((name) => ({ name }))

export const experiences = [
  {
    role: 'System Analyst',
    company: 'Mount Alvernia Hospital',
    period: 'Feb 2024 - Present',
    highlights: [
      'Implemented REST API interfaces using Spring Boot and MyBatis in Java to modernize a patient management system while converting legacy Oracle SQL to SQL Server queries.',
      'Developed a dynamic web-based registration form in OutSystems, removing dependence on license renewals from the previous platform.',
      'Created a doctor accreditation renewal tracking system that improved process efficiency by 40% for medical affairs.',
    ],
  },
  {
    role: 'Technology Functional Analyst',
    company: 'Accenture Pte Ltd',
    period: 'Jan 2023 - Dec 2023',
    highlights: [
      'Translated complex COBOL business logic into detailed software requirements to support modernization initiatives.',
      'Produced Java-like pseudo-code and design specifications that helped accelerate implementation handoff.',
      'Developed and executed test cases for updated Java programs, diagnosing failures and improving delivery quality.',
      'Built a Job Control Language file generator using Angular and Spring Boot that reduced manual work by 25 hours per month.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'ST Microelectronics Pte Ltd',
    period: 'Jul 2017 - Jan 2018',
    highlights: [
      'Developed a Big Data ecosystem with Hortonworks Data Platform to improve data exploration, scripting, and analysis workflows.',
      'Applied Python machine learning tools to clean and analyze manufacturing data, improving yield performance.',
      'Used Talend to improve data loading and processing efficiency in QlikView, increasing productivity by 50%.',
    ],
  },
]

export const projects = [
  {
    title: 'EZHR',
    description:
      'A mobile HR platform that streamlined attendance, leave, and claims workflows into one experience, reducing admin overhead for teams.',
    image: assetPath('assets/jpeg/EZHR.png'),
    tags: ['Kotlin', 'Android', 'Firebase', 'Firestore', 'Machine Learning', 'Biometric'],
    links: [
      { label: 'Download APK', href: assetPath('assets/apk/EZHR.apk') },
      { label: 'View Code', href: 'https://github.com/EddieTanDJ/EZHR' },
    ],
  },
  {
    title: 'EzRecipe',
    description:
      'A recipe search experience that helps users turn leftover ingredients into meals, with the goal of reducing food wastage in Singapore.',
    image: assetPath('assets/jpeg/EzRecipe.jpg'),
    tags: ['Node.js', 'Express', 'EJS', 'MongoDB', 'MySQL'],
    links: [{ label: 'View Code', href: 'https://github.com/EddieTanDJ/2103' }],
  },
  {
    title: 'Robo Car',
    description:
      'A maze-based robotic learning platform for children aged 10 to 13 that introduces computational thinking through playful remote control challenges.',
    image: assetPath('assets/jpeg/RoboCar.jpg'),
    tags: ['MSP432', 'C', 'Flask'],
    links: [{ label: 'View Code', href: 'https://github.com/EddieTanDJ/ICT2101-RoboticCarWebPortal' }],
  },
  {
    title: 'ReactJS Hangman Game',
    description:
      'A Hangman game built to deepen my React fundamentals while delivering a playful word-guessing experience for a youth camp project.',
    image: assetPath('assets/jpeg/Hangman.jpg'),
    tags: ['React', 'Express'],
    links: [{ label: 'View Code', href: 'https://github.com/EddieTanDJ/TikTokYCProject' }],
  },
  {
    title: 'HX-Bank',
    description:
      'A fictional banking product focused on transfers, balances, and transaction history while exploring secure development and CI/CD with Jenkins.',
    image: assetPath('assets/jpeg/hxbank.jpg'),
    tags: ['Flask', 'MySQL', 'Docker', 'Jenkins', 'React'],
  },
  {
    title: 'HOI Hub',
    description:
      'An interactive notebook for AI-based activity recognition using established research repositories and deep learning workflows for video analysis.',
    image: assetPath('assets/jpeg/Hoi.jpg'),
    tags: ['Jupyter Notebook', 'Python', 'PyTorch', 'I3D Feature Extraction', 'TSU Evaluation', 'Nvidia STEP'],
    links: [{ label: 'View Code', href: 'https://github.com/EddieTanDJ/ict3104-team05-2022' }],
  },
]

export const contactForm = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: 'ab6bb530-0c92-4759-ae15-a4c83146458f',
  subject: 'Portfolio Contact Form',
  redirect: 'https://eddietandj.github.io/Portfolio/',
  fromName: 'Eddie Portfolio',
}

export const certifications = [
  {
  title: 'AWS Certified Cloud Practitioner',
  issuer: 'Amazon Web Services',
  issueDate: '21 June 2024',
  expiryDate: '21 June 2027',
  description: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge.',
  credentialUrl: 'https://www.credly.com/badges/8918e5f0-88f6-4939-9142-12972f02e06c',
},
{
  title: 'Professional Scrum Master™ I (PSM I)',
  issuer: 'Scrum.org',
  issueDate: '01 Sep 2021',
  expiryDate: '',
  description: 'Those who earn the globally recognized Professional Scrum Master I (PSM I) certification have demonstrated a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum as described in the Scrum Guide. This individual has also demonstrated a consistent use of terminology and approach to Scrum.',
  credentialUrl: 'https://www.credly.com/badges/fffb1d2c-f2aa-4de5-bec7-74ace458ac60',
},
]

export const educations = [
  {
    institution: 'Singapore Institute of Technology',  
    degree: 'Bachelor of Engineering in Information & Communications Technology Majoring in Software Engineering Honours with Merit',
    period: 'Sep 2020 - Jan 2024',
    highlights: [
      'Graduated with Honours with merit and A- for my capstone project',
      'Finalist for the CODE Hackathon 2023, where I designed and implemented an application prototype for managing module assessments using OutSystems.',
    ],
  },
  {
    institution: 'Temasek Polytechnic',  
    degree: 'Diploma in Big Data Management and Governance',
    period: 'Jul 2017 - Apr 2020',
    highlights: [
      'A in major project',
    ],
  }
]
