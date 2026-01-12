import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {

  const navigate = useNavigate();

  return (
    <div>AuthPage
      <Button onClick={() => navigate("/home")}>HOME</Button>
    </div>
  )
}

export default AuthPage