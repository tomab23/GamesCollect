import { Gamepad2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Progress, ProgressLabel, ProgressValue } from "../ui/progress";

type Props = {
  finish: boolean;
};

const CardTrophyDeuxTest = ({ finish }: Props) => {
  const games = 157;
  const result = finish ? 100 : (games / 451) * 100;

  return (
    <Card
    title={`${!finish && result.toString()}`}
      className={`w-full  ${
        finish
          ? "outline-2 outline-primary"
          : "hover:outline-1 hover:outline-primary"
      }`}
    >
      <CardContent className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl ${
            finish ? "bg-primary" : "bg-background"
          } `}
        >
          <Gamepad2 size={40} className={`${finish && "text-black"}`} />
          {/* <CheckCircle size={40} className={`${finish && "text-black"}`} /> */}
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="text-xl font-semibold it">Il ne manque pas un zéro ?</p>

          {/* <p className="text-muted-foreground">100 Jeux</p> */}
          <Progress value={games <= 451 ? result : 100} className="w-full">
            <ProgressLabel className={"text-sm"}>451</ProgressLabel>
            <ProgressValue />
          </Progress>
          {/* <p className="text-muted-foreground">33 / 100</p> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTrophyDeuxTest;
