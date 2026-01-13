import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="contenu">
      <Header
        title={80 + " Jeux"}
        isButton={true}
        page={"/gameForm"}
        nameButton={"Add new game"}
        children={<Plus />}
      />
      {/* <Button className={"p-4 text-md"}>Ajouter un jeu</Button>
      </Header> */}
      <Button variant={"outline"} className={"p-4"}>
        Voir tout mes jeux
      </Button>
      <p>HomePage</p>
      <p>LANGUE : {t("TEST")} </p>

    </div>
  );
};

export default HomePage;
