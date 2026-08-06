import { socialLinks } from "@/constants"
import { Button } from "./button";


export const Profile = () => {
  return <aside className="
  border m-4 sm:m-6
  border-neutral-600 bg-neutral-900 text-white p-5 sm:p-6
  rounded-lg w-full max-w-md mx-auto
  lg:sticky lg:top-6 lg:w-96
">

    <div className='flex flex-col gap-4'>
        <div className='flex items-center
         justify-between gap-x-10'>
            <h1 className='text-3xl font-bold'>
                Vipul 
            </h1>
            <p className='text-sm'>
                Full Stack developer
            </p>
        </div>
        <img src="/me.png" 
        alt="" 
        className='lg:w-96 rounded-2xl object-cover'
        />
        <div className='mt-6'>
            <p className='text-sm
            text-neutral-300'>Specialization:</p>

            <p className='text-lg capitalzie'>Frontend developer and UI/UX</p>
        </div>
            <div >
            <p className='text-sm
            text-neutral-300'>Based in:</p>

            <p className='text-lg capitalzie'>Chennai , India </p>
        </div>
        <div className='flex gap-3 pt-2
        text-neutral-500'>
            {socialLinks.map((social,i)=>{
                const Icon = social.icon;
                return(
                    <a key={i} 
                    href={social.link}
                    className='hover:text-white'>
                        <Icon className='size-6'/>
                    </a>
                )
            })}
        </div>
        <Button className='mt-2 bg-white text-black hover:bg-neutral-200'
        size='lg'>
            Let's Work
        </Button>
    </div>
  </aside>
    
  
}
