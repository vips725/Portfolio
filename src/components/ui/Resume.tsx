import { SectionHeader } from "./SectionHeader"
import { education, tools } from "@/constants"
import { ExpCard } from "./ExpCard"
import { ToolsCard } from "./ToolsCard"
import { motion } from "framer-motion"

export const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 lg:mt-24 scroll-mt-10"
      id="resume"
    >
      <SectionHeader
        subtitle="Resume"
        title="Education and practical experience"
      />

      <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-3xl mx-auto text-center sm:text-left">
        I am a curious and knowledge-driven individual with strong analytical
        thinking and a passion for continuous learning. My ability to explore
        diverse topics, ask insightful questions, and synthesize information
        demonstrates adaptability and intellectual versatility.
      </p>

      <div className="grid gap-x-10 my-10 sm:my-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Education</h2>
          <div className="space-y-8 border-l border-neutral-700 pl-6">
            {education.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 sm:my-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 capitalize">
          My favourite tools
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 md:grid-cols-5">
          {tools.map((tool, i) => (
            <ToolsCard key={i} tool={tool} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}