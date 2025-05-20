import { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";

interface Props {
  logo: string;
  alt: string;
  channelId: string;
}

const SuggestionLayout = ({ logo, alt, channelId }: Props) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) return;

    const handleTimeout = () => {
      setClicked(false);
    };

    const timerId = setTimeout(handleTimeout, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [clicked]);

  return (
    <div className="border border-primary py-1 px-2 rounded-md flex gap-3 max-[395px]:flex-col">
      <img className="size-20 rounded-full" src={logo} alt={alt} />
      <div className=" flex flex-col gap-2 mt-2">
        <span className="text-lg">{alt}</span>

        <button
          className="text-xs duration-300 flex items-center gap-2 relative"
          onClick={() => {
            navigator.clipboard
              .writeText(channelId)
              .then(() => setClicked(true));
          }}
        >
          <span className="text-base text-wrap">{channelId}</span>
          <GoCopy className="size-5" />
          <span
            className={`absolute -right-1 ${
              clicked ? " -top-4 opacity-100 " : " top-0 opacity-0 "
            } duration-300`}
          >
            copied
          </span>
        </button>
      </div>
    </div>
  );
};

export default SuggestionLayout;
