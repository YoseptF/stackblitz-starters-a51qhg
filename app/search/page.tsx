"use client";

import AssetSection from "@/components/AssetSection";
import { FC } from "react";
import { searchAssets } from "@/utils/mockData";
import { useSearchParams } from "next/navigation";

const Search: FC = () => {
  const search = useSearchParams();
  const filter = search.get("filter");

  if(!filter) return null;

  const assets = searchAssets(filter);

  return (
    <main>
      <AssetSection
        assets={assets}
        subtitle="Search results for your query."
        title={`Results for "${filter}"`}
      />
    </main>
  );
};

export default Search;