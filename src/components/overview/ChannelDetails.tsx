import { BiLinkExternal } from "react-icons/bi";
import DetailSection from "./DetailSection";

interface Props {
  country: string | undefined;
  description: string | undefined;
  customUrl: string | undefined;
}

const ChannelDetails = ({ country, customUrl, description }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:w-full lg:mt-20 duration-300">
      <DetailSection heading="Country : ">{country}</DetailSection>
      <DetailSection
        customClass=" text-primary flex-col gap-1 sm:flex-row"
        heading="Channel URL : "
      >
        <a href={`https://www.youtube.com/${customUrl}`} target="_blank">
          {`https://www.youtube.com/${customUrl}`}{" "}
          <BiLinkExternal className="size-4 inline-block" />
        </a>
      </DetailSection>

      <DetailSection customClass=" flex-col mb-5 " heading="Description : ">
        {description}
      </DetailSection>
    </div>
  );
};

export default ChannelDetails;
