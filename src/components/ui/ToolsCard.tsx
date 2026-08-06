
import { fadeUp } from '@/lib/animation'
import type { ToolsType } from '@/types'
import {motion} from  "framer-motion"


export const ToolsCard = ({tool}:{tool:ToolsType}) => {
  return (
    <motion.div
        variants={fadeUp}
        className='border border-neutral-700 rounded-md flex justify-center items-center flex-col
        py-4'
    >
        <img src={tool.imgSrc} alt={tool.label} />
        <p className='font-bold mt-2 text-white'>{tool.label}</p>
    </motion.div>
  )
}
