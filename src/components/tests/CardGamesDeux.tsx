import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type GameTest from "@/models/GameTest";
import { Check, ChevronRight, Computer, Disc, Gamepad2, NotebookPen } from "lucide-react";

type Props = {
  game: GameTest
}

const CardGamesDeux = ({ game } : Props) => {
  return (
    <Card className="hover:outline-1 cursor-pointer hover:shadow-primary/20 max-md:w-40 w-48">
      <CardContent>
        <h1 className="font-semibold truncate max-w-min" title={game.title}>{game.title}</h1>
        <div className="flex gap-2 items-center">
          {game.pc ? <Computer className="h-4 w-4 text-muted-foreground"  /> : <Gamepad2 className="h-4 w-4 text-muted-foreground" />}
          <p className="text-muted-foreground">{game.platform}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex gap-2 items-center">
            <Check size={22} className="text-primary" />
            <NotebookPen size={22} className={`${!game.disc && "text-muted"}`} />
            <Disc size={22} className={`${!game.disc && "text-muted"}`} />
          </div>
          <ChevronRight className="" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardGamesDeux;
