import { useEffect, useState } from "react";
import ChannelDetails from "./ChannelDetails";
import ChannelProfile from "./ChannelProfile";
import { Snippet } from "../types";
import { useYoutubeContext } from "../../context/YoutubeContext";

const Overview = () => {
  const [overViewData, setOverViewData] = useState<Snippet>();
  const { data } = useYoutubeContext();

  useEffect(() => {
    if (!data) return;
    setOverViewData(data.snippet);
  }, [data]);
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <ChannelProfile
          url={overViewData?.thumbnails.medium.url}
          title={overViewData?.title}
        />
        <ChannelDetails
          country={overViewData?.country}
          customUrl={overViewData?.customUrl}
          description={overViewData?.description}
        />
      </div>
    </>
  );
};

export default Overview;
