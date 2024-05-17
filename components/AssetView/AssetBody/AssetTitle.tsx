import { FC } from "react";

interface AssetTitleProps {
  name: string;
  type: string;
  description: string;
}

const AssetTitle: FC<AssetTitleProps> = ({
  name,
  type,
  description
}) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-14 w-14 bg-gray-100 rounded" />
    <div className="flex items-center gap-2">
      <h1 className="text-4xl font-bold">{name}</h1>
      <span className="bg-gray-100 p-1 rounded text-xs text-gray-400">{type}</span>
    </div>
    <span className="text-gray-300">{description}</span>
  </div>
);

export default AssetTitle;