import Header from "@/components/layout/Header";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="contenu">
      <Header
        isButton={true}
        page={"/settings"}
        nameButton={"Settings"}
        title={"My Profile"}
        icon={<Settings />}
      />

      <Button variant={"destructive"} className={"text-xl p-4 font-semibold"} onClick={() => navigate("/")}>
        Logout
      </Button>
      <p>ProfilePage</p>
      <ModeToggle />
      <br /><br /><br />
      <p>Info user</p><br /><br />
      <p>Stats ?</p><br /><br /><br />
      <p>LOGOUT ?</p>
    </div>
  );
};

export default ProfilePage;
