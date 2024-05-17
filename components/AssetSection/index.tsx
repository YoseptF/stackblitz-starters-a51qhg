import SectionHeader, { SectionHeaderProps } from "./SectionHeader";

import { IAsset as Asset } from "@/utils/mockData";
import AssetCard from "./AssetCard";
import AssetProvider from "./AssetProvider";
import { FC } from "react";

interface AssetSectionProps extends SectionHeaderProps {
  assets: Asset[],
}

const AssetSection: FC<AssetSectionProps> = ({
  assets,
  subtitle,
  title
}) => (
  <section className="flex flex-col gap-7 min-w-full">
    <SectionHeader title={title} subtitle={subtitle} />
    <div className="flex flex-wrap gap-2">
      {
        assets.map((asset) => (
          <AssetProvider key={asset.id} asset={asset}>
            <AssetCard />
          </AssetProvider>
        ))
      }
    </div>
  </section>
);

export default AssetSection;