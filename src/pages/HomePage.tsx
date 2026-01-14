import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="contenu">
      <Header
        title={80 + " Jeux"}
        isButton={true}
        page={"/game-form"}
        nameButton={"Add new game"}
        icon={<Plus />}
      />
      <Button variant={"outline"} className={"p-4"} onClick={() => navigate("/games")}>Voir tout mes jeux</Button>
 <br /><br />
      <p>HomePage</p>
      <p>LANGUE : {t("TEST")} </p><br /><br /><br /><br />

      <p>STATS GLOBALE</p><br /><br />
      <p>STATS PLATFORM / PC - CONSOLE </p><br /><br />
      <p>VOIR PLUS ? page stats avec graph ?</p><br /><br /><br /><br />

      <p>LES DERNIERS JEUX AJOUTER</p>

    </div>
  );
};

export default HomePage;
