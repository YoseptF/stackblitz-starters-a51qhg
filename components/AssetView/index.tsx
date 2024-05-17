"use client";

import { FC, useContext } from "react";

import { AssetContext } from "../AssetSection/AssetProvider";
import AssetBody from "./AssetBody";
import ModalHeader from "./ModalHeader";

interface AssetModalProps {
  /**
   * Im not too sure about the naming
   * other options were:
   * 
   * - isModal
   * - modal
   */
  showAsModal?: boolean;
}

/**
 * AssetView started as modal, but after implementing the copy
 * full url of the item it got to me that I could use the same
 * component to populate the /asset/:id route, so I changed the name
 * to AssetView and moved it outside of the AssetSection so that it
 * could be used in the other route without importing form inside another component 
 */
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