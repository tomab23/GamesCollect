import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const CardStatTest = () => {
  return (
    <Card className="w-60">
      <CardContent className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/15">
          <Star className="text-primary" />
        </div>
        <div>
          <p className="text-xl font-semibold">20</p>
          <p className="text-muted-foreground">Favorites</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardStatTest;
