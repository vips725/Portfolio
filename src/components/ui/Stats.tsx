import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animation"
import { statsData } from "@/constants"

export const Stats = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.3)}
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mt-10 sm:mt-14 text-white"
    >
      {statsData.map((stats, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="border border-neutral-800 bg-neutral-900/50 rounded-xl flex flex-col items-center py-4 px-3 w-full hover:border-green-400/40 transition-colors duration-300"
        >
          <p className="text-xl sm:text-2xl font-bold tabular-nums text-green-400">
            {stats.number}
          </p>
          <p className="text-neutral-400 text-xs mt-1 text-center">
            {stats.label}
          </p>
        </motion.div>
      ))}
    </motion.section>
  )
}