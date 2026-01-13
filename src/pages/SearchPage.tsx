import Header from "@/components/layout/Header";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

const SearchPage = () => {
  return (
    <div className="contenu">
      <Header
        children={undefined}
        isButton={false}
        page={""}
        nameButton={""}
        title={"Search"}
      />

      <div className="flex justify-center">
        <InputGroup className="w-[70%]">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchPage;
