import CardGamesDeux from "@/components/cards/CardGamesDeux";
import CardGameUn from "@/components/cards/CardGameUn";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const HomePage = () => {
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
      <Button className={"p-4"}>Voir tout mes jeux</Button>
      <p>HomePage</p>
      <br />
      <br />
      <br />
      <br />
      <div>
        <p>Test card</p> <br />

        <div>
          <p>Test 1</p>
          <div>
            <CardGameUn />
            <CardGameUn />
            <CardGameUn />
          </div>
          <br /><br />
          <p>Test 2</p>
          <div>
            <CardGamesDeux />
            <CardGamesDeux />
            <CardGamesDeux />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
