import { Gamepad2 } from "lucide-react"
import NavIcons from "../NavIcons"
import { ModeToggle } from "../mode-toggle"

const Navbar = () => {
  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center">
            <Gamepad2 size={30} />
            <h1 className="text-xl font-semibold">GamesCollect</h1>
             <ModeToggle />
          </div>

          {/* Navigation Links */}
          <NavIcons />
        </div>
      </nav>
    </div>
  )
}

export default Navbar