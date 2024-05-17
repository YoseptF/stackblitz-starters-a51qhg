import { FC } from "react";
import Filter from "./Filter";
import Link from "next/link";
import Navbar from "../Navbar";

const Header: FC = () => (
  <header className="flex flex-col items-center justify-center py-4 gap-9">
    <Link href="/">
      <h1 className="text-4xl font-extrabold">Library</h1>
    </Link>
    <span className="font-medium">Browse for assets to report and present analysis.</span>
    <Filter />
    <Navbar />
  </header>
);

export default Header;