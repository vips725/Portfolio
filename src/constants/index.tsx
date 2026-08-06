/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Github,
  User,
  Linkedin,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: Github,
    label: 'Github',
    link: '/https://github.com/vips725/',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: '/',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/project-ph-1.jpeg',
    title: 'Full stack SAAS app',
    tags: ['SAAS', 'AI APP'],
    projectLink: 'http://ai-saas-app-eta-amber.vercel.app/',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'An AI-powered SaaS application built with the MERN stack.',
  },
  {
    imgSrc: 'project-ph-2.jpeg',
    title: 'LMS Application',
    tags: ['LMS', 'Website'],
    projectLink: 'https://skylent.lovable.app//',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'A learning management system for courses and student tracking.',
  },
  {
    imgSrc: 'project-ph-3.jpeg',
    title: 'Full stack music app',
    tags: ['CHAT APP', 'Mern Stack'],
    projectLink: 'https://musify-5al0.onrender.com/',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'A Spotify-style music streaming app built with the MERN stack.',
  },
  {
    imgSrc: 'project-ph-4.jpeg',
    title: 'Full stack music app',
    tags: ['Spotify', 'music'],
    projectLink: 'https://musify-5al0.onrender.com/',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'A Spotify-style music streaming app built with the MERN stack.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2026 – 2027',
    title: 'Full Stack Developer Intern',
    institute: 'Skelent Global',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
  {
    year: ' Present',
    title: 'Engineer',
    institute: 'Freelance / Remote Work',
    desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
  },
  {
    year: 'REPLACE_WITH_START_MONTH_YEAR – Present',
    title: 'Full Stack Developer Intern',
    institute: 'Skylent Global',
    desc: 'Currently working as a Full Stack Developer Intern, building and shipping full stack features across the frontend and backend — including contributing to the LMS application.',
  },
];

// The chatbot's entire knowledge of you comes from this object — fill in every field.
 const aboutMe = {
  name: 'Vipul',
  role: 'Full Stack Developer',
  location: 'Chennai, India',
  email: 'REPLACE_WITH_YOUR_EMAIL',
  resumeUrl: '/resume.pdf',
  githubProfile: 'https://github.com/vips725/',
  linkedin: 'REPLACE_WITH_LINKEDIN_URL',
  availability: 'Open to full-time roles and freelance projects',
  bio: `I'm a full stack developer and UI/UX enthusiast based in Chennai, India, currently pursuing Advanced UI/UX Design and AI/ML at Chennai Institute of Technology, and working as a Full Stack Developer Intern at Skylent Global. I build web apps end-to-end — React/Next.js on the frontend, Node/Express/Spring Boot on the backend — and I'm exploring LLM tooling with LangChain and LangGraph.`,
};

const education: ExperienceType[] = [
  {
    year: '2022 – 2024',
    title: 'HIGH SCHOOL',
    institute: 'Christ University',
    desc: 'Focused on academics',
  },
  {
    year: '2025',
    title: 'Full Stack Development',
    institute: 'Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2025-2026',
    title: 'Advanced UI/UX Design Course and AI/ML',
    institute: 'Chennai institute of technology',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
];


const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: 'tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: 'tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/tools/react.svg',
  },
  
  {
    label: 'JavaScript',
    imgSrc: '/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/tools/mongodb.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '2025-2029',
    label: 'CIT',
  },
  {
    number: '01+',
    label: 'Years Of Experience',
  },
  {
    number: '05+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
  aboutMe,
};