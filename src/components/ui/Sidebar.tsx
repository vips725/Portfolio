import  { useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { navLinks, socialLinks } from "@/constants"
import { cn } from "@/lib/utils"

export const Sidebar = () => {
  const [active, setActive] = useState("#hero")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="m-4 fixed top-4 right-4 z-50 border border-neutral-700 bg-neutral-800 text-white p-5 rounded-full hover:bg-neutral-700"
        >
          <MenuIcon size={30} className="text-white" />
        </Button>
      </SheetTrigger>
      

      <SheetContent
        side="right"
        className="w-[340px] bg-neutral-900 text-white py-6 pl-10"
      >
        <SheetTitle className="text-lg font-semibold mb-6 text-white">
          Menu
        </SheetTitle>

        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.link}
                onClick={() => setActive(link.link)}
               className={cn(
  "text-neutral-300 flex items-center gap-2 transition-all duration-200 text-base hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]",
  active === link.link && "text-white"
)}

              >
               <Icon className="size-4 text-neutral-400 group-hover:text-white transition-all duration-200" />

                {link.label}
              </a>
            )
          })}
        </nav>
        <div className='mt-30'>
          <p className="pb-2">Socials</p>
          <div className="flex gap-3 text-neutral-500">
            {socialLinks.map((social,i)=>{
                const Icon = social.icon;

                return(
                    <a key={i} 
                    href={social.link}
                    className='hover:text-white border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
                    >
                        <Icon className='size-4'/>
                    </a>
                )
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}