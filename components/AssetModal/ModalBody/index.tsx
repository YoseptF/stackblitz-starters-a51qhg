import { FC, useContext } from "react";

import { AssetContext } from "../../AssetSection/AssetProvider";
import KpiBody from "./KpiBody";
import LayoutBody from "./LayoutBody";

const ModalBody: FC = () => {
  const props = useContext(AssetContext);
  switch (props.type) {
  case "KPI":
    return (
      <KpiBody {...props}/>
    );
  case "Layouts":
    return <LayoutBody {...props} />;
  case "Storyboards":
    return (
      <section>
        <h1>Storyboards</h1>
        <span>{props.description}</span>
        <span>{props.applicableAffiliates}</span>
        <span>{props.coupledKpiOrFilters}</span>
        <span>{props.description}</span>
        <span>{props.name}</span>
        <span>{props.type}</span>
      </section>
    );

  default:
    throw new Error(`Invalid asset type ${(props as { type: string }).type}`);
  }
};

export default ModalBody;