import {
  featuredAssetsPreview,
  popularAssetsPreview,
  trendingAssetsPreview,
} from "@/utils/mockData";

import AssetSection from "@/components/AssetSection";

export default function Home() {
  return (
    <main className="flex justify-start w-full flex-col gap-8">
      {/* Here I'm assuming the Featured tab is a collection of different assets
        that are picked based on some criteria (popular, most liked, etc)
        and not by a type of asset (like kpi, layout, etc)
      */}
      <AssetSection
        assets={featuredAssetsPreview}
        subtitle="Curated top picks from this week."
        title="Featured"
      />
      <AssetSection
        assets={trendingAssetsPreview}
        subtitle="Most popular by community"
        title="Trending"
      />
      <AssetSection
        assets={popularAssetsPreview}
        subtitle="Most popular picks from this month"
        title="Popular"
      />
    </main>
  );
}
