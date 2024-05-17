import { FC, useContext } from "react";

import { AssetContext } from "../../AssetSection/AssetProvider";
import KpiBody from "./Bodies/KpiBody";
import LayoutBody from "./Bodies/LayoutBody";
import StoryboardBody from "./Bodies/StoryboardBody";

const AssetBody: FC = () => {
  const props = useContext(AssetContext);
  switch (props.type) {
  case "KPI":
    return (
      <KpiBody {...props}/>
    );
  case "Layouts":
    return <LayoutBody {...props} />;
  case "Storyboards":
    return <StoryboardBody {...props} />

  default:
    throw new Error(`Invalid asset type ${(props as { type: string }).type}`);
  }
};

export default AssetBody;