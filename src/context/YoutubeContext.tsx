import { createContext, ReactNode, useContext, useState } from "react";
import { YoutubeData } from "../components/types";

interface YoutubeContextType {
  data: YoutubeData | undefined;
  setData: React.Dispatch<React.SetStateAction<YoutubeData | undefined>>;
}

const YoutubeContext = createContext<YoutubeContextType | undefined>(undefined);

export function YoutubeProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<YoutubeData | undefined>(undefined);

  return (
    <YoutubeContext.Provider value={{ data, setData }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export const useYoutubeContext = () => {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error("useYoutubeContext must be used within an YoutubeProvider");
  }

  return context;
};
