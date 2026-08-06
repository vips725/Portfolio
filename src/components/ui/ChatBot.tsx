import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Loader2, FileText, Github, ExternalLink } from "lucide-react"
import { projectsData, aboutMe } from "@/constants"

type Message = { role: "user" | "assistant"; content: string }

const SUGGESTIONS = [
  "What's your tech stack?",
  "Show me your GitHub",
  "Can I see your resume?",
]

const KNOWN_LINKS = new Set<string>([
  aboutMe.resumeUrl,
  aboutMe.githubProfile,
  aboutMe.linkedin,
  ...projectsData.flatMap((p) => [p.projectLink, p.githubLink].filter(Boolean) as string[]),
])

function extractLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s)]+|\/[a-zA-Z0-9_-]+\.pdf)/g
  const found = Array.from(new Set(text.match(urlRegex) || []))

  const verified = found.filter((url) => KNOWN_LINKS.has(url))
  const unverified = found.filter((url) => !KNOWN_LINKS.has(url))

  let cleanText = text
  verified.forEach((url) => {
    cleanText = cleanText.replace(url, "")
  })
  cleanText = cleanText.replace(/\s{2,}/g, " ").trim()

  return { cleanText, verified, unverified }
}

function LinkCard({ url }: { url: string }) {
  const isPdf = url.toLowerCase().endsWith(".pdf")
  const isGithub = url.includes("github.com")

  const Icon = isPdf ? FileText : isGithub ? Github : ExternalLink
  const label = isPdf ? "Download Resume" : isGithub ? "View on GitHub" : "Open Link"

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 hover:border-green-400 hover:text-green-400 transition-colors text-neutral-200 w-fit"
    >
      <Icon size={14} />
      {label}
    </a>
  )
}

export const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    const content = text.trim()
    if (!content || loading) return

    const nextMessages: Message[] = [...messages, { role: "user", content }]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "Something went wrong")

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't reach the server. Try again in a moment." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-green-400 text-black shadow-[0_0_20px_rgba(74,222,128,0.4)] flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[90vw] max-w-[380px] h-[70vh] max-h-[520px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />
              <p className="text-sm font-semibold text-white">Ask about Vipul</p>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 && (
                <div className="text-neutral-400 text-sm space-y-3">
                  <p>Hey! I can tell you about Vipul's projects, skills, resume, and experience — or just chat. Try one of these:</p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-left text-sm border border-neutral-700 rounded-lg px-3 py-2 hover:border-green-400 hover:text-white transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => {
                if (m.role === "user") {
                  return (
                    <div
                      key={i}
                      className="max-w-[85%] ml-auto bg-green-400 text-black text-sm rounded-xl px-3 py-2 leading-relaxed"
                    >
                      {m.content}
                    </div>
                  )
                }

                const { cleanText, verified, unverified } = extractLinks(m.content)
                return (
                  <div key={i} className="max-w-[85%] mr-auto space-y-2">
                    {cleanText && (
                      <div className="bg-neutral-800 text-neutral-100 text-sm rounded-xl px-3 py-2 leading-relaxed">
                        {cleanText}
                        {unverified.length > 0 && (
                          <p className="text-neutral-500 text-xs mt-1 italic">
                            (link unverified — please confirm directly)
                          </p>
                        )}
                      </div>
                    )}
                    {verified.length > 0 && (
                      <div className="flex flex-col gap-1.5">
                        {verified.map((url) => (
                          <LinkCard key={url} url={url} />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}

              {loading && (
                <div className="mr-auto bg-neutral-800 text-neutral-400 rounded-xl px-3 py-2 flex items-center gap-2 text-sm">
                  <Loader2 size={14} className="animate-spin" />
                  Thinking...
                </div>
              )}
            </div>

            <div className="border-t border-neutral-800 p-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask something..."
                className="flex-1 bg-neutral-800 text-white text-sm rounded-full px-4 py-2 outline-none focus:ring-1 focus:ring-green-400 placeholder:text-neutral-500"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="size-9 rounded-full bg-green-400 text-black flex items-center justify-center disabled:opacity-40 hover:bg-green-300 transition-colors shrink-0"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
