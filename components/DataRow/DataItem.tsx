import { FC } from "react";

export interface DataItemProps {
  value: string | string[] | number;
  title: string;
  id: string;
  hideBorder?: boolean;
}

const DataItem: FC<DataItemProps> = ({ title, value, hideBorder }) => (
  <div className={`px-8 py-2 flex flex-col items-center ${hideBorder ? "" : "border-r"}`}>
    <span className="font-bold">{value}</span>
    <span className="text-xs text-gray-300">{title}</span>
  </div>
);

export default DataItem;