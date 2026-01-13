import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type Props = {
  icon: ReactNode;
  isButton: boolean,
  page: string,
  nameButton: string,
  title: string;
};
const Header = ({ isButton, title, nameButton, page, icon }: Props) => {
    const navigate = useNavigate();
  return (
    <div className="p-4 flex justify-between items-center">
      <p className="text-4xl font-semibold">{title}</p>
      {isButton && <Button className={"p-4 text-md"} onClick={() => navigate(page)}>{icon} {nameButton}</Button>}
    </div>
  );
};

export default Header;
