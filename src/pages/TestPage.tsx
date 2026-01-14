import CardGamesDeux from "@/components/tests/CardGamesDeux";
import CardGameUn from "@/components/tests/CardGameUn";
import CardStatPlatformTest from "@/components/tests/CardStatPlatformTest";
import CardStatTest from "@/components/tests/CardStatTest";
import { GamesMockTest } from "@/helpers/GameMockTest";
import { Computer, Gamepad, PlusCircle, Star } from "lucide-react";

const TestPage = () => {
  return (
    <div className="contenu">
      <p>CARD STAT TEST</p>
      <div className="flex gap-4">
        <CardStatTest number={12} title={"Favorites"} bgColor={"bg-primary/15"}>
          <Star className="text-primary" />
        </CardStatTest>

        <CardStatTest
          number={4}
          title={"Add this year"}
          bgColor={"bg-cyan-500/15"}
        >
          <PlusCircle className="text-cyan-500" />
        </CardStatTest>
      </div>
      <br />
      <br />
      <p>Card stats platform</p>
      <div className="flex gap-4 items-center">
        {/* TEST 1 */}
        <CardStatPlatformTest number={28} title={"Jeux sur Pc"}>
          <Computer />
        </CardStatPlatformTest>
        <CardStatPlatformTest number={14} title={"Jeux sur Console"}>
          <Gamepad />
        </CardStatPlatformTest>
      </div>

      <br />
      <br />
      <br />
      <div>
        <p>
          Test card - LIMITER LA LONGUEUR DUNE CARTE ET DU TITRE | GRID POUR
          CARD ??
        </p>{" "}
        <br />
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

export default TestPage;
