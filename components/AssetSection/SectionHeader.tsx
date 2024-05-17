import { FC } from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ subtitle, title }) => (
  <header>
    <h1 className="text-3xl font-semibold">{title}</h1>
    <span className="text-gray-300">{subtitle}</span>
  </header>
);

export default SectionHeader;