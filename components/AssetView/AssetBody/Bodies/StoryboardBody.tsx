import { FC } from "react";
import { StoryboardsAsset as StoryboardBodyProps } from "@/utils/mockData";

/**
 * this is not yet implemented because of time constrains
 */
const StoryboardBody: FC<StoryboardBodyProps> = (props) => {
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
    )
}

export default StoryboardBody;