"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarOptionProps {
  name: string;
  path: string;
}

const NavbarOption: FC<NavbarOptionProps> = ({ name, path }) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  const activeClassNames = "!text-black font-semibold bg-white rounded-md";
  const className = `text-sm text-gray-300 font-medium py-1.5 px-10 ${isActive ? activeClassNames : ""}`;

  return (
    <Link
      className={className}
      href={path}
    >
      {name}
    </Link>
  );
};

export default NavbarOption;