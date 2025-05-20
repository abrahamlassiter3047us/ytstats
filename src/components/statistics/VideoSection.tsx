import {
  CircularProgress,
  CircularProgressLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { IoVideocamOutline } from "react-icons/io5";
import calculateCount from "../../utils/calculateCount";
import formatNumber from "../../utils/formatNumber";

interface Props {
  videoCount: string | undefined;
}

const VideoSection = ({ videoCount }: Props) => {
  const [max, setMax] = useState(0);
  const [showFullCount, setShowFullCount] = useState(false);
  const cProgressBreakPoint = useBreakpointValue({ base: 140, lg: 200 });

  useEffect(() => {
    setMax(calculateCount(parseInt(videoCount!)));
  }, [videoCount]);

  return (
    <div className="flex flex-col items-center lg:w-auto">
      <span className="flex items-center gap-2">
        <IoVideocamOutline className="inline-block mb-px text-primary size-4 lg:size-5" />
        <span className="lg:text-lg">
          Number of videos &#40;out of &nbsp;
          <span className="font-bold">{formatNumber(max)}</span>
          &#41;
        </span>
      </span>
      <CircularProgress
        value={parseInt(videoCount!)}
        size={cProgressBreakPoint}
        color="primary.200"
        max={max}
        cursor="pointer"
        onClick={() => setShowFullCount((count) => !count)}
      >
        <CircularProgressLabel
          fontSize={["1.3rem", null, null, "1.5rem", null, null]}
          fontWeight="600"
          cursor="pointer"
        >
          <span
            className={`absolute font-normal text-white rounded-md border border-primary bg-[#161a1d] px-2 -translate-x-1/4 ${
              showFullCount ? " opacity-100 top-10 " : " opacity-0 top-0 "
            } duration-300`}
          >
            {videoCount}
          </span>
          {`${formatNumber(parseInt(videoCount!))} ${
            parseInt(videoCount!) > 1000 ? "+" : ""
          }`}
        </CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default VideoSection;
