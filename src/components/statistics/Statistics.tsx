import { useYoutubeContext } from "../../context/YoutubeContext";
import { useEffect, useState } from "react";
import { Statistics as StatisticsType } from "../types";
import VideoSection from "./VideoSection";
import ViewSection from "./ViewSection";
import SubsSection from "./SubsSection";

const Statistics = () => {
  const [stats, setStats] = useState<StatisticsType>();
  const { data } = useYoutubeContext();

  useEffect(() => {
    if (!data) return;
    setStats(data.statistics);
  }, [data]);

  return (
    <div className="grid grid-cols-1 gap-y-10 lg:gap-y-48 lg:grid-cols-2 mt-3 lg:mt-5 mb-20">
      <VideoSection videoCount={stats?.videoCount} />
      <ViewSection viewCount={stats?.viewCount} />
      <SubsSection subscribersCount={stats?.subscriberCount} />
    </div>
  );
};

export default Statistics;
