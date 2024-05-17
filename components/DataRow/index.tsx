import DataItem, { DataItemProps } from "./DataItem";

import { FC } from "react";

interface DataRowProps {
  entries: DataItemProps[];
}

const DataRow: FC<DataRowProps> = ({ entries }) => (
  <div className="flex ">
    {
      entries.map((entry, i) => (
        <DataItem
          key={`${entry.id}-item-${entry.title}`}
          {...entry}
          hideBorder={i === entries.length - 1}
        />
      ))
    }
  </div>
);

export default DataRow;