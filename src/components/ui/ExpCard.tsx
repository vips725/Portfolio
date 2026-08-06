import type { ExperienceType } from "@/types"

export const ExpCard = ({ item }: { item: ExperienceType }) => {
  return (
    <div className="relative group pl-6">
      {/* Timeline dot */}
      <div className="absolute -left-[10px] top-2 size-3 rounded-full bg-neutral-500 group-hover:bg-primary transition-all duration-300" />

      <div>
        <span className="text-sm text-neutral-400">{item.year}</span>

        <h3 className="text-lg font-semibold mt-1 text-white">
          {item.title}
        </h3>

        <p className="text-sm text-neutral-400 mb-1">
          Course by <span className="font-medium text-white">{item.institute}</span>
        </p>

        <p className="text-sm text-neutral-400">{item.desc}</p>
      </div>
    </div>
  )
}
