import { Card, CardContent, CardTitle } from "../ui/card";
import type { ReactNode } from "react";

type Props = {
  number: number;
  title: string;
  children: ReactNode;
};

const CardPlatformDeux = ({ number, title, children }: Props) => {
  return (
    <Card className="w-36">
      <CardTitle className="flex items-center h-5">
        <div className={`p-2`}>{children}</div>
        <p className="text-muted-foreground text-xs">{title}</p>
      </CardTitle>
      <CardContent className="text-center">
          <p className="text-xl font-semibold">{number}</p>
      </CardContent>
    </Card>
  );
};

export default CardPlatformDeux;
