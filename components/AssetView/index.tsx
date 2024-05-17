"use client";

import { FC, useContext } from "react";

import { AssetContext } from "../AssetSection/AssetProvider";
import AssetBody from "./AssetBody";
import ModalHeader from "./ModalHeader";

interface AssetModalProps {
  showAsModal?: boolean;
}

const AssetView: FC<AssetModalProps> = ({ showAsModal }) => {
  const { id } = useContext(AssetContext);
  return (
    <div
      id={id}
      // @ts-ignore
      {...(showAsModal && { popover: "" })}
      className="h-[90vh] xl:w-[40vw] sm:w-[90vw] bg-white p-4 rounded-md shadow-lg"
    >
      {showAsModal && <ModalHeader id={id} />}
      <AssetBody />
    </div>
  );
};

export default AssetView;