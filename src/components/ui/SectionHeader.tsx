import { fadeUp } from "@/lib/animation"
import { SparkleIcon } from "lucide-react"
import { motion } from "framer-motion"

type Props = {
  title: string
  subtitle: string
}

export const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center text-center px-2">
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-700 rounded-full px-4 w-fit text-neutral-300 text-sm'
      >
        <SparkleIcon size={14} className="text-green-400" />
        {subtitle}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className='text-2xl sm:text-3xl md:text-4xl font-bold capitalize mt-3 max-w-xs sm:max-w-lg md:max-w-3xl text-white leading-tight'
      >
        {title}
      </motion.h2>
    </div>
  )
}