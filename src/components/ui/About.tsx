import { fadeUp, staggerContainer } from '@/lib/animation'
import { motion } from "framer-motion"
import { SectionHeader } from './SectionHeader'
import { Button } from './button'

export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0)}
      className="mt-16 sm:mt-20 lg:mt-30 scroll-mt-10"
      id='abouts'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming complexity into effortless design'
      />
      <motion.p variants={fadeUp} className='mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed'>
        From curiosity to mastery, my technical journey has been a tapestry woven with late-night debugging sessions, breakthrough moments of clarity, and the relentless pursuit of innovation. What began as a fascination with how systems work evolved into a disciplined exploration of programming languages, frameworks, and architectures. Each challenge—whether a stubborn bug or a complex algorithm—became a stepping stone, sharpening my problem-solving skills and deepening my resilience. Over time, I've transformed from a learner tinkering with code into a builder who crafts solutions with purpose, blending creativity with precision. This journey is not just about technology—it's about growth, adaptability, and the thrill of turning ideas into reality.
      </motion.p>
      <motion.div variants={fadeUp} transition={{ delay: 0.2 }} className="flex justify-center sm:justify-start">
        <Button className='mt-5 bg-green-400 text-black hover:bg-green-300 font-semibold'>
          Contact Me
        </Button>
      </motion.div>
    </motion.section>
  )
}