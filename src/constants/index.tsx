/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
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
  { label: 'Projects', link: '#projects', icon: Briefcase },
  { label: 'About', link: '#about', icon: User },
  { label: 'Services', link: '#services', icon: Settings },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Reviews', link: '#testimonials', icon: MessageCircle },
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
    link: 'https://github.com/vips725',
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
    title: 'Full Stack SaaS AI App',
    tags: ['SAAS', 'AI'],
    projectLink: 'http://ai-saas-app-eta-amber.vercel.app/',
    githubLink: 'https://github.com/vips725',
    desc: 'An AI-powered SaaS application built with the MERN stack.',
  },
  {
    imgSrc: '/project-ph-2.jpeg',
    title: 'LMS Application',
    tags: ['LMS', 'Website'],
    projectLink: 'https://skylent.lovable.app/',
    githubLink: 'https://github.com/vips725',
    desc: 'A learning management system for courses and student tracking.',
  },
  {
    imgSrc: '/project-ph-3.jpeg',
    title: 'Full Stack Music App',
    tags: ['MERN', 'Music'],
    projectLink: 'https://musify-5al0.onrender.com/',
    githubLink: 'https://github.com/vips725',
    desc: 'Spotify-style music streaming application.',
  },
  {
    imgSrc: '/project-ph-4.jpeg',
    title: 'Portfolio Website',
    tags: ['React', 'Portfolio'],
    projectLink: '#',
    githubLink: 'https://github.com/vips725',
    desc: 'Personal portfolio showcasing projects and experience.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2026 – Present',
    title: 'Full Stack Developer Intern',
    institute: 'Skylent Global',
    desc: 'Working on full stack applications, LMS platform, React frontend and backend APIs.',
  },
  {
    year: 'Present',
    title: 'Freelance Developer',
    institute: 'Remote',
    desc: 'Developing modern full stack applications using MERN and Next.js.',
  },
];

const education: ExperienceType[] = [
  {
    year: '2022 – 2024',
    title: 'Higher Secondary',
    institute: 'Christ University',
    desc: 'Completed higher secondary education.',
  },
  {
    year: '2025',
    title: 'Full Stack Development',
    institute: 'Online',
    desc: 'Completed Full Stack Web Development.',
  },
  {
    year: '2025 – 2029',
    title: 'Advanced UI/UX Design & AI/ML',
    institute: 'Chennai Institute of Technology',
    desc: 'Currently pursuing Engineering.',
  },
];

const tools: ToolsType[] = [
  { label: 'Figma', imgSrc: '/tools/figma.svg' },
  { label: 'CSS', imgSrc: '/tools/css3.svg' },
  { label: 'Tailwind CSS', imgSrc: '/tools/tailwindcss.svg' },
  { label: 'React', imgSrc: '/tools/react.svg' },
  { label: 'JavaScript', imgSrc: '/tools/javascript.svg' },
  { label: 'Node.js', imgSrc: '/tools/nodejs.svg' },
  { label: 'Express.js', imgSrc: '/tools/expressjs.svg' },
  { label: 'MongoDB', imgSrc: '/tools/mongodb.svg' },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'Modern branding and visual identity.',
    projects: '32 Projects',
    icon: <Palette className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Clean and intuitive user interfaces.',
    projects: '47 Projects',
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Web Development',
    desc: 'Modern full stack web applications.',
    projects: '58 Projects',
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Responsive mobile applications.',
    projects: '21 Projects',
    icon: <Smartphone className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups launch products.',
    projects: '15 Projects',
    icon: <Rocket className="h-6 w-6 text-green-400" />,
  },
];

const statsData: StatsType[] = [
  {
    number: '2025-2029',
    label: 'CIT',
  },
  {
    number: '01+',
    label: 'Years Experience',
  },
  {
    number: '05+',
    label: 'Projects',
  },
];

/* ===========================
   CHATBOT KNOWLEDGE
=========================== */

const aboutMe = {
  name: "Vipul",

  role: "Full Stack Developer",

  location: "Chennai, India",

  email: "vipul@example.com",

  resumeUrl: "/resume.pdf",

  githubProfile: "https://github.com/vips725",

  linkedin: "",

  availability: "Open to internships, freelance and full-time opportunities.",

  bio: `
Hi, I'm Vipul.

I am a Full Stack Developer currently studying at Chennai Institute of Technology.

I specialize in:

• React
• Next.js
• Node.js
• Express.js
• MongoDB
• Java
• Spring Boot
• Tailwind CSS
• TypeScript
• JavaScript

I also work with AI technologies including:

• LangChain
• LangGraph
• RAG
• LLM Applications

Projects I have built include:

• AI SaaS Application
• LMS Application
• Music Streaming Application
• Portfolio Website
• Gym Mobile App
• Chat Applications
• AI Projects

I am currently working as a Full Stack Developer Intern at Skylent Global.

If someone asks about my projects, skills, education, experience, resume or contact information, answer using this information.
`,
};

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Amazing experience.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Highly recommended.',
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