import { Card, CardContent } from "@/components/ui/card";
import type GameTest from "@/models/GameTest";
import { Check, ChevronRight, Disc } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  game: GameTest;
};

const CardGameUn = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Link to={"/game"} className="block">
      <Card className="cursor-pointer hover:shadow-primary/20  max-md:w-full w-[35rem] hover:outline-1">
        <CardContent className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <h1 className="font-semibold truncate max-w-56" title={game.title}>
              {game.title}
            </h1>
            <p className="text-muted-foreground">{game.platform}</p>
            <Check className="text-primary" />
            <Disc className={`${!game.disc && "text-muted"}`} />
          </div>
          <ChevronRight className="justify-self-end" />
        </CardContent>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </Card>
    </Link>
  );
};

export default CardGameUn;
