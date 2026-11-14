# Vipul Shah — Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS — featuring an AI chatbot that can answer questions about my projects, skills, and experience, powered by Groq.

🔗 **Live site:** REPLACE_WITH_YOUR_DEPLOYED_URL

---

## ✨ Features

- **Responsive design** — fully mobile, tablet, and desktop optimized
- **Animated sections** — smooth scroll-triggered animations via Framer Motion
- **Project showcase** — live demo links + GitHub repo links for each project
- **AI Chatbot widget** — an embedded assistant (bottom-right corner) that can answer recruiter/HR questions like:
  - "What's your tech stack?"
  - "Can I see your resume?"
  - "Show me your GitHub"
  - "Where do you live / what's your experience?"

  It's grounded strictly in real data from `src/constants/index.tsx` — no hallucinated facts or links.
- **Resume & GitHub quick-access** — clickable cards rendered directly in chat replies

---

## 🛠️ Tech Stacks

**Frontend**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Radix UI / shadcn-style components
- Lucide React (icons)

**Chatbot backend**
- Vercel Serverless Functions (`/api`)
- [Groq API](https://console.groq.com) (`openai/gpt-oss-20b`) for fast, low-cost LLM inference

**Deployment**
- Vercel

---

## 📁 Project Structure

```
Portfolio/
├── api/
│   └── chat.ts              # Serverless function — calls Groq API
├── public/
│   ├── tools/                # Tech stack logos
│   ├── project-ph-*.jpeg     # Project screenshots
│   ├── me.png                 # Profile photo
│   └── resume.pdf             # Resume (downloadable via chatbot)
├── src/
│   ├── components/ui/         # All UI components (Hero, Projects, Resume, ChatBot, etc.)
│   ├── constants/index.tsx    # Single source of truth — projects, skills, bio, aboutMe
│   ├── lib/
│   │   ├── animation.ts       # Framer Motion variants
│   │   ├── chatContext.ts     # Builds the chatbot's system prompt from constants
│   │   └── utils.ts
│   ├── types/index.ts         # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── .env.local                 # GROQ_API_KEY (never committed)
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/vips725/Portfolio.git
cd Portfolio
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```
GROQ_API_KEY=gsk_your-key-here
```

Get a free key at [console.groq.com/keys](https://console.groq.com/keys).

### 3. Run locally

The chatbot relies on a Vercel serverless function (`/api/chat.ts`), so plain `npm run dev` **won't** run it. Use the Vercel CLI instead:

```bash
npm install -g vercel
vercel dev
```

### 4. Build for production

```bash
npm run build
```

---

## ☁️ Deployment (Vercel)

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add the environment variable `GROQ_API_KEY` under **Project Settings → Environment Variables**
4. Deploy — Vercel automatically detects `/api/chat.ts` as a serverless function

---

## 🤖 How the Chatbot Works

The chatbot doesn't use RAG or fine-tuning — it's a simple, effective pattern for a small, well-defined knowledge base:

1. All personal data (bio, projects, skills, education, experience) lives in `src/constants/index.tsx`
2. `src/lib/chatContext.ts` formats that data into a strict "closed-book" system prompt
3. Every chat message sent from `ChatBot.tsx` hits `/api/chat.ts`, which forwards the conversation + system prompt to Groq
4. The frontend only renders a link as a clickable button if it matches a real, known URL from `constants.tsx` — preventing hallucinated links from looking legitimate

To update what the bot knows, just edit `src/constants/index.tsx` — no retraining needed.

---

## 📬 Contact

- **Email:** REPLACE_WITH_YOUR_EMAIL
- **GitHub:** [github.com/vips725](https://github.com/vips725)
- **LinkedIn:** REPLACE_WITH_YOUR_LINKEDIN_URL

---

## 📄 License

This project is for personal portfolio use. Feel free to reference the structure, but please don't republish the content as your own.
