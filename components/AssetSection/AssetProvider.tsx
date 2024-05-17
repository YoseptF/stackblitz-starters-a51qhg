"use client";

import { IAsset as Asset, mockAsset } from "@/utils/mockData";
import { createContext, FC, ReactNode } from "react";

export const AssetContext = createContext(mockAsset);

interface AssetProviderProps {
  children: ReactNode;
  asset: Asset;
}



const AssetProvider: FC<AssetProviderProps> = ({ children, asset }) => (
  <AssetContext.Provider value={asset}>
    {children}
  </AssetContext.Provider>
);

export default AssetProvider;