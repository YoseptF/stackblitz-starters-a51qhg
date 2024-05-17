import CopyButton from "./CopyButton";
import { FC } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalHeaderProps {
  id: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ id }) => (
  <header className="flex grow justify-end gap-2">
    {/* based on the icon I'm guessing this is a copy of the current url
      but could also mean to open the modal in a new tab (since currently is opened in a modal)
      */}
    <CopyButton id={id} />
    <button
      // @ts-ignore
      popovertarget={id}
      popovertargetaction="hide"
    >
      <RxCross2 size={20} />
    </button>
  </header>
);

export default ModalHeader;