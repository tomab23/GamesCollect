import { Card, CardContent } from "@/components/ui/card";
import type GameTest from "@/models/GameTest";
import {
  Check,
  ChevronRight,
  Computer,
  Disc,
  Gamepad2,
  NotebookPen,
} from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  game: GameTest;
};

const CardGameUn = ({ game }: Props) => {
  return (
    <Link to={"/game"} className="block">
      <Card className="cursor-pointer hover:shadow-primary/20  max-md:w-full w-[35rem] hover:outline-1 ">
        <CardContent className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex gap-3 items-center">
              <h1
                className="font-semibold truncate max-w-48"
                title={game.title}
              >
                {game.title}
              </h1>
              {game.pc ? (
                <Computer className="h-4 w-4" />
              ) : (
                <Gamepad2 className="h-4 w-4" />
              )}
            </div>
            <p className="text-muted-foreground">{game.platform}</p>
            {/* ICONS */}
            <div className="flex gap-2 items-center">
              <Check
                className={`${game.isFinish ? "text-primary" : "text-muted"}`}
              />
              <NotebookPen
                size={21}
                className={`${!game.disc && "text-muted"}`}
              />
              <Disc className={`${!game.disc && "text-muted"}`} />
            </div>
          </div>
          <ChevronRight className="justify-self-end" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardGameUn;
