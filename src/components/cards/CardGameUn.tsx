import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Check, ChevronRight, Disc } from "lucide-react";

const CardGameUn = () => {
  return (
    <Card className="hover:scale-105 cursor-pointer hover:shadow-primary/20">
      <CardContent className="flex gap-4">
        <h1 className="font-semibold">Robocop : Rogue City</h1>
        <p>Steam</p>
        <Check className="text-primary" />
        <Disc className="text-muted-foreground" />
        <ChevronRight />
      </CardContent>
    </Card>
  );
};

export default CardGameUn;
