import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animation"
import type { ProjectType } from "@/types"

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
}: ProjectType) => {
  return (
    <motion.div variants={fadeUp} className="relative group rounded-lg overflow-hidden border border-neutral-800">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <figure className="overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full aspect-video object-cover transition duration-500 group-hover:scale-105"
          />
        </figure>
      </a>

      <div className="absolute bottom-0 p-2 sm:p-3 flex gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-black/70 backdrop-blur-sm text-white py-1 px-2 rounded-sm text-xs sm:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}