import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App"
import { Sidebar } from "./components/ui/Sidebar"
import  {FloatingMenu} from "./components/ui/FloatingMenu"
import { Profile } from "./components/ui/Profile"
import { ChatBot } from "./components/ui/ChatBot"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-neutral-950 flex flex-col lg:flex-row lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
      <ChatBot />
    </div>
  </StrictMode>
)