import Header from "@/components/layout/Header";
import { Plus } from "lucide-react";

const GamesListPage = () => {
  return (
    <div className="contenu">
      <Header
        isButton={true}
        page={"/game-form"}
        nameButton={"Add new game"}
        icon={<Plus />}
        title={"My Games"}
      />
      <p>FILTER</p><br /><br />
      
      <p>Nombre de resultat</p>
      <p>RESULTAT</p>
    </div>
  );
};

export default GamesListPage;
