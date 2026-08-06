import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/animation"
import { projectsData } from "@/constants"
import { SectionHeader } from "./SectionHeader"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-16 sm:mt-20 lg:mt-30 scroll-mt-10"
      id="projects"
    >
      <SectionHeader
        subtitle="projects"
        title="my featured projects"
      />

      <motion.div
        className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.2)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}