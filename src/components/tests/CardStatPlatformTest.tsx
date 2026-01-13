import { Card, CardContent } from "../ui/card"
import type { ReactNode } from "react"

type Props = {
  number: number,
  title: string,
  children: ReactNode
}

const CardStatPlatformTest = ({ number, title, children} : Props) => {
  return (
       <Card className="w-60">
      <CardContent className="flex items-center gap-3">
        <div className={`p-2 rounded-xl`}>
          {children}
        </div>
        <div>
          <p className="text-xl font-semibold">{number}</p>
          <p className="text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardStatPlatformTest