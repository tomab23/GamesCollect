import CardGamesDeux from "@/components/tests/CardGamesDeux"
import CardGameUn from "@/components/tests/CardGameUn"
import CardStatTest from "@/components/tests/CardStatTest"
import { GamesMockTest } from "@/helpers/GameMockTest"

const TestPage = () => {
  return (
    <div className="contenu">
      <p>CARD STAT TEST</p>
      <div>
        <CardStatTest />
      </div>

      <br /><br /><br />
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
  )
}

export default TestPage