import BodyWrapper from "./BodyWrapper";
import DataRow from "@/components/DataRow";
import { FC } from "react";
import { LayoutsAsset } from "@/utils/mockData";
import ModalTitle from "./ModalTitle";

const LayoutBody: FC<LayoutsAsset> = ({
  KPIsBeingUsed,
  amountOfPages,
  createdAt,
  description,
  id,
  name,
  type
}) => (
  <BodyWrapper>
    <ModalTitle name={name} type={type} description={description} />
    <DataRow entries={[
      {
        id,
        title: "used",
        value: KPIsBeingUsed.length.toString()
      },
      {
        id,
        title: "Pages No.",
        value: amountOfPages
      },
      {
        id,
        title: "created at",
        value: createdAt
      },
    ]} />
  </BodyWrapper>
);

export default LayoutBody;