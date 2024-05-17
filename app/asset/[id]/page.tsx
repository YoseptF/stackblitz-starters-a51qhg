import AssetModal from "@/components/AssetModal";
import AssetProvider from "@/components/AssetSection/AssetProvider";
import { FC } from "react";
import { getAssetById } from "@/utils/mockData";

interface AssetPageProps {
  params: {
    id: string;
  };
}

const AssetPage: FC<AssetPageProps> = ({ params }) => {
  const asset = getAssetById(params.id);
  return (
    <AssetProvider asset={asset}>
      <AssetModal ignoreModal/>
    </AssetProvider>
  );
};

export default AssetPage;