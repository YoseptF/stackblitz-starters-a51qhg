"use client";

import { FC, useContext } from "react";

import { AssetContext } from "../AssetProvider";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

interface AssetModalProps {
  ignoreModal?: boolean;
}

const AssetModal: FC<AssetModalProps> = ({ ignoreModal }) => {
  const { id } = useContext(AssetContext);
  return (
    <div
      id={id}
      // @ts-ignore
      {...(!ignoreModal && { popover: "" })}
      className="h-[90vh] xl:w-[40vw] sm:w-[90vw] bg-white p-4 rounded-md shadow-lg"
    >
      {!ignoreModal && <ModalHeader id={id} />}
      <ModalBody />
    </div>
  );
};

export default AssetModal;