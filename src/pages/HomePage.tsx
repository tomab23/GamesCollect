import CardGamesDeux from "@/components/tests/CardGamesDeux";
import CardGameUn from "@/components/tests/CardGameUn";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { GamesMockTest } from "@/helpers/GameMockTest";
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
      <br />
      <br />
      <br />
      <br />
      <div>
        <p>Test card - LIMITER LA LONGUEUR DUNE CARTE ET DU TITRE | GRID POUR CARD ??</p> <br />
        <div>
          <p>Test 1</p>
          <div className="flex gap-4 flex-wrap">
            {GamesMockTest.map((game) => (
              <CardGameUn key={game.id} game={game} />
            ))}
          </div>
          <br />
          <br />
          <p>Test 2</p>
          <div className="flex gap-3 flex-wrap">
            {GamesMockTest.map((game) => (
              <CardGamesDeux key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
