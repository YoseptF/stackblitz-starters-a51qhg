import {
  getAssetsByType,
  IAsset,
} from "@/utils/mockData";

import AssetSection from "@/components/AssetSection";
import { FC } from "react";

interface AssetsProps { params: { type: Lowercase<IAsset["type"]> } }

const Assets: FC<AssetsProps> = ({ params }) => {
  const { type } = params;
  const { assets, description, title } = getAssetsByType(type);
  return (
    <main className="flex justify-start w-full flex-col gap-8">
      {
        assets.length > 0
        ? (
          <AssetSection
            assets={assets}
            subtitle={description}
            title={title}
          />
        )
        : (
          'Opps! nothing to see here, try searching on the bar above'
        )
      }
    </main>
  );
};

export default Assets;
