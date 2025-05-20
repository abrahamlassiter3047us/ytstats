import { useEffect, useState } from "react";
import { useYoutubeContext } from "../context/YoutubeContext";

interface Props {
  currentTab: (value: string) => void;
  isDisabled: (value: boolean) => void;
}

const CustomTab = ({ currentTab, isDisabled }: Props) => {
  const [selectedTab, setSeletectedTab] = useState("Overview");
  const [disable, setDisable] = useState(false);
  const { data } = useYoutubeContext();

  const handleSelectTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSeletectedTab(String(event.currentTarget.textContent));
    currentTab(String(event.currentTarget.textContent));
  };

  useEffect(() => {
    if (!data) {
      setDisable(true);
      isDisabled(true);
    } else {
      setDisable(false);
      isDisabled(false);
    }
  }, [data]);

  return (
    <div className="flex justify-between w-full border-b border-primary lg:justify-normal divide-x divide-[#e5383b] mt-10">
      <button
        disabled={disable}
        className={`${
          selectedTab === "Overview"
            ? " text-primary bg-[#e5383b16] "
            : " bg-transparent  "
        } duration-300 disabled:opacity-75 rounded-tl-lg w-full hover:bg-[#e5383b0d] lg:w-auto py-2 px-4 font-medium lg:px-20`}
        onClick={handleSelectTab}
      >
        Overview
      </button>
      <button
        disabled={disable}
        className={`${
          selectedTab === "Statistics"
            ? " text-primary bg-[#e5383b16] "
            : " bg-transparent  "
        } duration-300 disabled:opacity-75 rounded-tr-lg w-full hover:bg-[#e5383b0d] lg:w-auto py-2 px-4 font-medium lg:px-20`}
        onClick={handleSelectTab}
      >
        Statistics
      </button>
    </div>
  );
};

export default CustomTab;
