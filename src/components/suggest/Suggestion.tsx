import SuggesionLayout from "./SuggestionLayout";
import logo from "../../assets/images/ur-cristiano.jpg";

const Suggestion = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <SuggesionLayout
        logo={logo}
        alt="UR · Cristiano"
        channelId="UCtxD0x6AuNNqdXO9Wp5GHew"
      />
    </div>
  );
};

export default Suggestion;
