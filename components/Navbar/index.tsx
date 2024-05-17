import { FC } from "react";
import { NAVBAR_OPTIONS } from "./config";
import NavbarOption from "./NavbarOption";

const Navbar: FC = () => (
  <nav className="flex items-center justify-between py-2 px-6 gap-4 bg-gray-100 rounded min-w-full">
    {
      NAVBAR_OPTIONS.map(({ name, path }) => (
        <NavbarOption
          // key can be name plus path since you would't have two options with the same name and path
          // so it's unique
          key={`${name}-${path}`}
          // I could spread the object but I prefer to be explicit
          // it also raises a warning if we update the props later
          name={name}
          path={path}
        />
      ))
    }
  </nav>
);

export default Navbar;