import { Gamepad2, Home, Search, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavIcons = () => {

  return (
    <div className="flex items-center gap-2 max-sm:gap-1">
      {/* HOME */}
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-semibold flex items-center gap-2 max-sm:gap-1 px-3 py-2 rounded-md transition-colors ${
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "hover:bg-accent"
          }`
        }
      >
        <Home size={20} />
        <p className="max-md:hidden">Home</p>
      </NavLink>
      {/* GAMES */}
      <NavLink
        to="/games"
        className={({ isActive }) =>
          `font-semibold flex items-center gap-2 max-sm:gap-1 px-3 py-2 rounded-md transition-colors ${
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "hover:bg-accent"
          }`
        }
      >
        <Gamepad2 size={20} />
        <p className="max-md:hidden">Games</p>
      </NavLink>
      {/* SEARCH */}
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `font-semibold flex items-center gap-2 max-sm:gap-1 px-3 py-2 rounded-md transition-colors ${
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "hover:bg-accent"
          }`
        }
      >
        <Search size={20} />
        <p className="max-md:hidden">Search</p>
      </NavLink>
      {/* PROFILE */}
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `font-semibold flex items-center gap-2 max-sm:gap-1 px-3 py-2 rounded-md transition-colors ${
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "hover:bg-accent"
          }`
        }
      >
        <User2 size={20} />
        <p className="max-md:hidden">Profile</p>
      </NavLink>
    </div>
  );
};

export default NavIcons;
