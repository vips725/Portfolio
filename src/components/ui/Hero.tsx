import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animation"
import { Button } from "./button"
import { SparkleIcon } from "lucide-react"

export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-16 sm:pt-20 text-white px-4 sm:px-0"
      id="hero"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32 text-white"
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16 text-white"
      >
        I'm <span className="text-white">Vipul Shah</span>{" "}
        <span className="text-white">
          Full Stack Developer and AI/ML Engineer
        </span>
      </motion.h1>

      <motion.div variants={fadeUp} className="mt-5 flex flex-col sm:flex-row gap-2">
        <Button className="bg-white text-black hover:bg-neutral-200" asChild>
          <a href="#projects">My Projects</a>
        </Button>

        <Button
          variant="outline"
          className="bg-black border-white text-white hover:bg-white hover:text-black"
        >
          Download CV
        </Button>
      </motion.div>
    </motion.section>
  )
}
