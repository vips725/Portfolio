
import { Stats } from "./components/ui/Stats";
import { Hero } from "./components/ui/Hero";
import { Projects } from "./components/ui/Projects";
import { About } from "./components/ui/About";
import { Resume } from "./components/ui/Resume";



export const App = ()=>{
  return (
    <main className='flex flex-col container mx-auto 
    p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero/>
      <Stats/>
      <Projects/>
      <About/>
      <Resume/>
    </main>
  );
}