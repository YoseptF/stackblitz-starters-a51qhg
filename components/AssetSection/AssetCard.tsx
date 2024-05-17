"use client";

import { FC, useContext } from "react";

import { AssetContext } from "./AssetProvider";
import AssetModal from "./AssetModal";
import Image from "next/image";

const AssetCard: FC = () => {
  const { id, createdAt, description, name } = useContext(AssetContext);
  return (
    <>
      <button
        className="bg-white border p-3 rounded flex items-center gap-2 w-[calc(50%-0.5rem)]"
        // ts hasn't added the popover attribute to the JSX.IntrinsicElements type yet
        // @ts-ignore
        popovertarget={id}
      >
        <Image src="/assets/placeholder.png" alt="Featured" width={100} height={200} />
        <div className="flex flex-col grow items-start">
          <h1 className="font-bold">{name}</h1>
          <span className="text-left">{description}</span>
          {createdAt && <span className="text-gray-300">{createdAt}</span>}
        </div>
      </button>
      <AssetModal />
    </>
  );
};

export default AssetCard;