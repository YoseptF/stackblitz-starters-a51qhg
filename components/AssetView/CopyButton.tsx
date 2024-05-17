"use client";

import { FC } from "react";
import { RxLink1 } from "react-icons/rx";

interface CopyButtonProps {
  id: string;
}

/**
 * here I'm assuming based on the icon I see on the design doc
 * that this either saves the url from the asset or opens the asset in a new
 * tab (since when this appears it is in modal mode)
 * I went with the copy of the full url that let you share the asset
 */
const CopyButton: FC<CopyButtonProps> = ({ id }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin }/asset/${id}`);
  };

  return (
    <button className="focus:bg-gray-300 p-1 rounded" onClick={handleCopyToClipboard}>
      <RxLink1 size={20} />
    </button>
  );
};

export default CopyButton;