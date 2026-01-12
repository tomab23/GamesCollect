import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronRight, Disc } from "lucide-react";

const CardGamesDeux = () => {
  return (
    <Card className="hover:scale-105 cursor-pointer hover:shadow-primary/20">
      <CardContent>
        <h1 className="font-semibold">Robocop : Rogue City</h1>
        <p className="my-1">Steam</p>
        <div className="flex justify-between">
          <div className="flex">
            <Check className="text-primary" />
            <Disc className="text-muted-foreground" />
          </div>
          <ChevronRight className="" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardGamesDeux;
