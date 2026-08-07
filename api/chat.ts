import type { VercelRequest, VercelResponse } from '@vercel/node'

// ============================================================
// ALL DATA INLINED BELOW — edit these values directly.
// This file has ZERO imports from anywhere else in the project.
// ============================================================

const aboutMe = {
  name: 'Vipul',
  role: 'Full Stack Developer',
  location: 'Chennai, India',
  email: 'REPLACE_WITH_YOUR_EMAIL',
  resumeUrl: '/resume.pdf',
  githubProfile: 'https://github.com/vips725/',
  linkedin: 'REPLACE_WITH_LINKEDIN_URL',
  availability: 'Open to full-time roles and freelance projects',
  bio: "I'm a full stack developer and UI/UX enthusiast based in Chennai, India, currently pursuing Advanced UI/UX Design and AI/ML at Chennai Institute of Technology, and working as a Full Stack Developer Intern at Skylent Global. I build web apps end-to-end — React/Next.js on the frontend, Node/Express/Spring Boot on the backend — and I'm exploring LLM tooling with LangChain and LangGraph.",
}

const projectsData = [
  {
    title: 'Full stack SAAS app',
    tags: ['SAAS', 'AI APP'],
    projectLink: 'http://ai-saas-app-eta-amber.vercel.app/',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'An AI-powered SaaS application built with the MERN stack.',
  },
  {
    title: 'LMS Application',
    tags: ['LMS', 'Website'],
    projectLink: 'https://skylent.lovable.app/',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'A learning management system for courses and student tracking.',
  },
  {
    title: 'Full stack music app',
    tags: ['Spotify', 'Mern Stack'],
    projectLink: 'https://musify-5al0.onrender.com/',
    githubLink: 'https://github.com/vips725/REPLACE_WITH_REAL_REPO_NAME',
    desc: 'A Spotify-style music streaming app built with the MERN stack.',
  },
]

const education = [
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
    institute: 'Chennai Institute of Technology',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
]

const experience = [
  {
    year: 'REPLACE_WITH_START_MONTH_YEAR – Present',
    title: 'Full Stack Developer Intern',
    institute: 'Skylent Global',
    desc: 'Currently working as a Full Stack Developer Intern, building and shipping full stack features across the frontend and backend — including contributing to the LMS application.',
  },
]

const tools = [
  'Figma', 'CSS', 'Tailwind CSS', 'React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB',
  'Solidity', 'LangChain', 'LangGraph', 'C++', 'Next.js', 'Python', 'Rust', 'Java', 'Spring Boot', 'Redis', 'Kafka',
]

const services = [
  { title: 'Brand Identity', desc: 'Modern visual identities with strong typography, colors, and minimal design.' },
  { title: 'UI/UX Design', desc: 'Clean, intuitive, user-friendly interfaces.' },
  { title: 'Web Development', desc: 'High-performance, SEO-friendly websites using Next.js, Tailwind, and modern web tech.' },
  { title: 'Mobile App Design', desc: 'Pixel-perfect app interfaces for iOS and Android.' },
  { title: 'Product Launch Strategy', desc: 'Helping startups prepare digital products for launch.' },
]

// ============================================================
// SYSTEM PROMPT — built inline, same file, no separate import
// ============================================================

function buildSystemPrompt(): string {
  const projectsText = projectsData
    .map(
      (p, i) =>
        `${i + 1}. ${p.title} (${p.tags.join(', ')})${p.desc ? ' — ' + p.desc : ''}\n   Live: ${p.projectLink}${p.githubLink ? '\n   Code: ' + p.githubLink : ''}`
    )
    .join('\n')

  const toolsText = tools.join(', ')

  const educationText = education
    .map((e) => `- ${e.title} at ${e.institute} (${e.year}): ${e.desc}`)
    .join('\n')

  const experienceText = experience
    .map((e) => `- ${e.title} at ${e.institute} (${e.year}): ${e.desc}`)
    .join('\n')

  const servicesText = services.map((s) => `- ${s.title}: ${s.desc}`).join('\n')

  return `You are the portfolio assistant for ${aboutMe.name}, a ${aboutMe.role} based in ${aboutMe.location}.
You're embedded in ${aboutMe.name}'s personal portfolio website. Visitors — often recruiters or hiring managers — will ask about them.

=== CLOSED-BOOK RULE ===
Everything you may say about ${aboutMe.name} is contained ONLY in the sections below.
- If a fact isn't explicitly written here, you do not know it. Do not guess, infer, or invent details — not dates, not company names, not links.
- NEVER output a URL that doesn't appear character-for-character below. If unsure, say so and point to ${aboutMe.email}.
- If asked something not covered here, say you don't have that information and suggest emailing ${aboutMe.email}.
- It's fine, and preferred, to say "I don't have that information" rather than guess.

ABOUT ${aboutMe.name.toUpperCase()}:
${aboutMe.bio}

Availability: ${aboutMe.availability}
Contact email: ${aboutMe.email}
GitHub profile: ${aboutMe.githubProfile}
LinkedIn: ${aboutMe.linkedin}
Resume: ${aboutMe.resumeUrl}

SKILLS / TOOLS:
${toolsText}

PROJECTS:
${projectsText}

EDUCATION:
${educationText}

EXPERIENCE:
${experienceText}

SERVICES OFFERED:
${servicesText}

STYLE:
- Keep answers concise (2-4 sentences) unless asked for detail.
- Refer to ${aboutMe.name} in third person, as their assistant — not as ${aboutMe.name} themself.
- General chat unrelated to ${aboutMe.name} can be answered normally, no need to apply the closed-book rule there.`
}

// ============================================================
// HANDLER
// ============================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body as {
    messages: { role: 'user' | 'assistant'; content: string }[]
  }

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' })
  }

  const trimmed = messages.slice(-12).map((m) => ({
    role: m.role,
    content: String(m.content).slice(0, 2000),
  }))

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        temperature: 0.2,
        max_completion_tokens: 400,
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...trimmed,
        ],
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Groq API error:', errText)
      return res.status(502).json({ error: 'Failed to get a response from the assistant' })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content ?? ''

    return res.status(200).json({ reply })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}