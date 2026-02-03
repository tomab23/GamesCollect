import { Gamepad2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Progress, ProgressLabel, ProgressValue } from "../ui/progress";

type Props = {
  finish: boolean;
};
const CardTrophyTest = ({ finish }: Props) => {
  const result = finish ? 100 : (157 / 451) * 100;

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
        <div className={`p-2 rounded-xl bg-background `}>
          <Gamepad2 size={40} className={`${finish && "text-primary"}`} />
          {/* <CheckCircle size={40} className={`${finish && "text-primary"}`} /> */}
        </div>


          <Progress value={result} className="w-full ">
            <ProgressLabel className={"text-lg font-semibold"}>
              451 - <i>Il ne manque pas un zéro ?</i>
            </ProgressLabel>
            <ProgressValue />
          </Progress>

      </CardContent>
    </Card>
  );
};

export default CardTrophyTest;
