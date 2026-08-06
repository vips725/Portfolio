import type { VercelRequest, VercelResponse } from '@vercel/node'
import { buildSystemPrompt } from '../src/lib/chatContext.js'

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
        model: 'openai/gpt-oss-20b', // fast + cheap, plenty for a Q&A portfolio bot. Use 'openai/gpt-oss-120b' for higher quality.
        temperature: 0.2, // low = factual/consistent, not creative
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