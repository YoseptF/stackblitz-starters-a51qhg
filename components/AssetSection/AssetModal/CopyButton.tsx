"use client";

import { FC } from "react";
import { RxLink1 } from "react-icons/rx";

interface CopyButtonProps {
  id: string;
}

const CopyButton: FC<CopyButtonProps> = ({ id }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.origin }/asset/${id}`);
  };

  return (
    <button onClick={handleCopyToClipboard}>
      <RxLink1 size={20} />
    </button>
  );
};

export default CopyButton;