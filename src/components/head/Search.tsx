import { IoSearchOutline } from "react-icons/io5";
import { ColorModeType, YoutubeData } from "../types";
import Instruction from "./Instruction";
import { FormEvent, useState } from "react";
import { useYoutubeContext } from "../../context/YoutubeContext";
import { VscLoading } from "react-icons/vsc";

const Search = ({ colorMode }: ColorModeType) => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchBy, setSearchBy] = useState<"channelId" | "userName">(
    "channelId"
  );

  const { setData } = useYoutubeContext();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&${
        searchBy === "channelId" ? "id" : "forHandle"
      }=${inputValue.replace(/\s+/g, "")}&key=${
        import.meta.env.VITE_YOUTUBE_APIKEY
      }`
    ).finally(() => setLoading(false));

    const data = await response.json();
    const result: YoutubeData = data.items[0];
    setData(result);
  };
  return (
    <section>
      <div className="mx-left max-w-xl min-w-24">
        <div className="flex justify-between mb-2 gap-2">
          <button
            className={`w-full border py-2 rounded-lg ${
              searchBy === "channelId" ? " border-primary" : " border "
            } duration-300`}
            onClick={() => setSearchBy("channelId")}
          >
            Tìm theo channel ID
          </button>
          <button
            className={`w-full border py-2 rounded-lg ${
              searchBy === "userName" ? " border-primary " : " border "
            } duration-300`}
            onClick={() => setSearchBy("userName")}
          >
            {" "}
            Tìm theo username
          </button>
        </div>
      </div>

      <form
        className={`max-w-xl min-w-24 ${
          colorMode === "light"
            ? " bg-[#EFEFEF] text-black "
            : " bg-black text-white "
        }  border-b-2 border-primary flex  items-center px-4 py-3 rounded-tl-lg rounded-tr-lg mx-left`}
        onSubmit={handleSubmit}
      >
        <input
          name="search"
          required
          minLength={searchBy === "channelId" ? 24 : 0}
          maxLength={searchBy === "channelId" ? 24 : 100}
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          placeholder={
            searchBy === "channelId"
              ? "Nhập vào channel ID"
              : "Nhập vào username"
          }
          className="bg-transparent placeholder-[#786868] w-full placeholder:text-sm outline-none"
          type="text"
        />
        <button type="submit">
          {loading ? (
            <VscLoading className="text-primary animate-spin size-6" />
          ) : (
            <IoSearchOutline className="text-primary size-6" />
          )}
        </button>
      </form>
      <Instruction />
    </section>
  );
};

export default Search;
