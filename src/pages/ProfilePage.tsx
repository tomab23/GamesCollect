import Header from "@/components/layout/Header"
import { Settings } from "lucide-react"

const ProfilePage = () => {
  return (
    <div className="contenu">
      <Header isButton={true} page={"/settings"} nameButton={"Settings"} title={"My Profile"} children={<Settings />} />
      <p>ProfilePage</p>
    </div>
  )
}

export default ProfilePage