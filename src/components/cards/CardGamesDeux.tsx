import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type GameTest from "@/models/GameTest";
import { Check, ChevronRight, Disc } from "lucide-react";

type Props = {
  game: GameTest
}

const CardGamesDeux = ({ game } : Props) => {
  return (
    <Card className="hover:scale-105 cursor-pointer hover:shadow-primary/20">
      <CardContent>
        <h1 className="font-semibold">{game.title}</h1>
        <p className="text-muted-foreground">{game.platform}</p>
        <div className="flex justify-between">
          <div className="flex">
            <Check className="text-primary" />
            <Disc className={`${!game.disc && "text-muted"}`} />
          </div>
          <ChevronRight className="" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardGamesDeux;
