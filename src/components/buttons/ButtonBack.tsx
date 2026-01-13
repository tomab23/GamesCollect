import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const ButtonBack = () => {
const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} className={"w-14"}><ArrowLeft /></Button>
  )
}

export default ButtonBack