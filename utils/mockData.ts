// all this file is stuff that I think should come from the backend
// but for the good of the POC I'm gonna mock it
// all types and values are what I would expect from the backend

// e.g. export const getAssetById = (id: string): IAsset => allAssets.find((asset) => asset.id === id) || mockAsset;
// represents fetch(`/api/assets/${id}`) or something similar

import { ArrayFrom as ArrayFromLength, randomFromArray } from ".";

interface AssetBase {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface KPIAsset extends AssetBase {
  type: "KPI";
  businessQuestions: {
    question: string;
    description: string;
  }[];
  metricIDs: string[];
  calculation: string;
  visuals: string[];
  affiliateApplicability: string;
}

export interface LayoutsAsset extends AssetBase {
  type: "Layouts";
  amountOfPages: number;
  KPIsBeingUsed: string[];
}

export interface StoryboardsAsset extends AssetBase {
  type: "Storyboards";
  coupledKpiOrFilters: string[];
  applicableAffiliates: string[];
}

export type IAsset = KPIAsset | LayoutsAsset | StoryboardsAsset;

const createId = (type: IAsset["type"], index: number): string => `${type}-asset-${index}`.toLowerCase();

const createAssetsWithPreview = (
  length: number,
  type: IAsset["type"],
  ...rest: unknown[]
): IAsset[] => ArrayFromLength(length).map((_, index) => {
  switch (type) {
  case "KPI":
    return {
      id: createId(type, index),
      name: `${type} Item Name ${index}`,
      description: "Short description of the item goes nicely here.",
      //random date to demonstrate search
      // this is giving an error because of the random date
      // and how nextjs handles the date object, will be fixed in the future
      // and is just for show in the POC
      createdAt: new Date(Math.floor(Math.random() * 1000000000000)).toLocaleDateString(),
      type,
      businessQuestions: [
        {
          question: "What is the first question?",
          description: "Short Description of the item goes here"
        },
        {
          question: "What is the first question?",
          description: "Short Description of the item goes here"
        },
        {
          question: "What is the first question?",
          description: "Short Description of the item goes here"
        },
        {
          question: "What is the first question?",
          description: "Short Description of the item goes here"
        },
        {
          question: "What is the first question?",
          description: "Short Description of the item goes here"
        },
        {
          question: "What is the first question?",
          description: "Short Description of the item goes here"
        }
      ],
      metricIDs: ["Metric ID 1", "Metric ID 2"],
      calculation: "Calculation",
      visuals: ["https://via.placeholder.com/800x400/f24"],
      affiliateApplicability: "Affiliate Applicability"
    };
  case "Layouts":
    return {
      id: createId(type, index),
      name: `${type} Item Name ${index}`,
      description: "Short description of the item goes nicely here.",
      createdAt: new Date(Math.floor(Math.random() * 1000000000000)).toLocaleDateString(),
      type,
      amountOfPages: 3,
      KPIsBeingUsed: ["KPI 1", "KPI 2"]
    };
  case "Storyboards":
    return {
      id: createId(type, index),
      name: `${type} Item Name ${index}`,
      description: "Short description of the item goes nicely here.",
      createdAt: new Date(Math.floor(Math.random() * 1000000000000)).toLocaleDateString(),
      type,
      coupledKpiOrFilters: ["KPI 1", "KPI 2"],
      applicableAffiliates: ["Affiliate 1", "Affiliate 2"]
    };

  default:
    throw new Error(`Invalid type${type}`);

  }
});

// KPI Tab
export const KPIAssets = createAssetsWithPreview(10, "KPI");

// Layouts Tab
export const LayoutAssets = createAssetsWithPreview(10, "Layouts");

// Storyboards Tab
export const StoryboardAssets = createAssetsWithPreview(10, "Storyboards");

const allAssets = [...KPIAssets, ...LayoutAssets, ...StoryboardAssets];

interface getAssetsByTypeReturn {
  description: string;
  title: string;
  assets: IAsset[];
}

export const getAssetsByType = (type: Lowercase<IAsset["type"]>): getAssetsByTypeReturn => {
  switch (type) {
  case "kpi":
    return {
      title: "KPI",
      description: "KPI description",
      assets: KPIAssets
    };
  case "layouts":
    return {
      title: "Layouts",
      description: "Layouts description",
      assets: LayoutAssets
    };
  case "storyboards":
    return {
      title: "Storyboards",
      description: "Storyboards description",
      assets: StoryboardAssets
    };
  default:
    throw new Error(`Invalid type ${type}`);
  }
};

//Featured Tab
export const featuredAssetsPreview = randomFromArray(allAssets, 4);
export const popularAssetsPreview = randomFromArray(allAssets, 4);
export const trendingAssetsPreview = randomFromArray(allAssets, 4);

export const searchAssets = (search: string): IAsset[] => allAssets
  .filter(({ name, createdAt, description }) =>
    name.toLowerCase().includes(search.toLowerCase())
    || createdAt.toLowerCase().includes(search.toLowerCase())
    || description.toLowerCase().includes(search.toLowerCase())
  );

export const mockAsset: IAsset = {
  type: "Layouts",
  id: "1",
  amountOfPages: 3,
  createdAt: "01/01/2021",
  description: "Short description of the item goes nicely here.",
  KPIsBeingUsed: ["KPI 1", "KPI 2"],
  name: "Layouts Item Name 1"
};

export const getAssetById = (id: string): IAsset => allAssets.find((asset) => asset.id === id) || mockAsset;

const FAVORITES_LOCAL_KEY = "favorites";

export const checkFavoriteStatus = (id: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_KEY) || "{}") as Record<string, boolean>;
  return !!favorites[id];
};

export const toggleFavorite = (id: string) => {
  const favorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_KEY) || "{}") as Record<string, boolean>;
  favorites[id] = favorites[id] ? false : true;
  localStorage.setItem(FAVORITES_LOCAL_KEY, JSON.stringify(favorites));
};