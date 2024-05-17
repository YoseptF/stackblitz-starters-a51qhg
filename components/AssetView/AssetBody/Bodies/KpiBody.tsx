import BodyWrapper from "./BodyWrapper";
import DataRow from "@/components/DataRow";
import Favorite from "../Favorite";
import { FC } from "react";
import Image from "next/image";
import { KPIAsset } from "@/utils/mockData";
import AssetTitle from "../AssetTitle";

const KpiBody: FC<KPIAsset> = ({
  affiliateApplicability,
  businessQuestions,
  calculation,
  metricIDs,
  visuals,
  createdAt,
  description,
  id,
  name,
  type
}) => (
  <BodyWrapper>
    <AssetTitle name={name} type={type} description={description} />
    <DataRow entries={[
      {
        id,
        title: "used",
        value: affiliateApplicability
      },
      {
        id,
        title: "Pages No.",
        value: metricIDs
      },
      {
        id,
        title: "created at",
        value: createdAt
      },
    ]} />
    {
      visuals.map((visual, i) => (
        <Image
          key={`${id}-visual-${i}`}
          src={visual}
          alt="Visual"
          width={800}
          height={400}
        />
      ))
    }
    <div className="flex justify-start-start w-11/12 gap-2 flex-wrap">
      <h1 className="text-lg font-bold w-full">Business Questions</h1>
      {
        businessQuestions.map(({ description, question }, i) => (
          <button className="flex flex-col p-2 focus:bg-gray-100 rounded gap-2 w-[calc(50%-0.5rem)]" key={`${description }-${i}`}>
            <h2 className="font-semibold">{question}</h2>
            <span className="text-gray-400">{description}</span>
          </button>
        ))
      }
    </div>
    <Favorite id={id}/>
  </BodyWrapper>
);

export default KpiBody;