import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type GameTest from "@/models/GameTest";
import { Check, ChevronRight, Disc } from "lucide-react";

type Props = {
 game: GameTest
}

const CardGameUn = ({ game } : Props) => {
  return (
    <Card className="hover:scale-105 cursor-pointer hover:shadow-primary/20">
      <CardContent className="flex gap-4">
        <h1 className="font-semibold">{game.title}</h1>
        <p className="text-muted-foreground">{game.platform}</p>
        <Check className="text-primary" />
        <Disc className={`${!game.disc && "text-muted"}`} />
        <ChevronRight />
      </CardContent>
    </Card>
  );
};

export default CardGameUn;
