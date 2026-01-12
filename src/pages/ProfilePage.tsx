import Header from "@/components/layout/Header"
import { ModeToggle } from "@/components/mode-toggle"
import { Settings } from "lucide-react"

const ProfilePage = () => {
  return (
    <div className="contenu">
      <Header isButton={true} page={"/settings"} nameButton={"Settings"} title={"My Profile"} children={<Settings />} />
      <p>ProfilePage</p>
                   <ModeToggle />
    </div>
  )
}

export default ProfilePage