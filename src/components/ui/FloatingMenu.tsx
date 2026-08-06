import { useState } from "react"
import { navLinks } from "@/constants"
import { cn } from "@/lib/utils"

export const FloatingMenu = () => {
  const [active, setActive] = useState("#hero")

  return (
    <div
      className="
        hidden lg:flex fixed z-40
        top-1/2 right-6 xl:right-8
        -translate-y-1/2 translate-x-0
        flex-col gap-4
      "
    >
      
      {navLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              "p-3 rounded-full bg-neutral-800 text-neutral-400 hover:text-green-400 hover:scale-110 transition-all duration-200",
              active === link.link && "text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
            )}
          >
            <Icon className="size-5" />
          </a>
        )
      })}
    </div>
  )
}