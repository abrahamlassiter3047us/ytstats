import { Container } from "@chakra-ui/react";
import "./App.css";
import {
  Head,
  CustomTab,
  Overview,
  Statistics,
  Suggestion,
} from "./components";
import { useState } from "react";
import { YoutubeProvider } from "./context/YoutubeContext";

function App() {
  const [currentTab, setCurrentTab] = useState("Overview");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="w-screen">
      <Container mx="auto" maxW="1280px">
        <YoutubeProvider>
          <header>
            <Head />
          </header>
          <CustomTab
            isDisabled={(bool) => setIsDisabled(bool)}
            currentTab={(value) => setCurrentTab(value)}
          />
          {isDisabled ? (
            <Suggestion />
          ) : currentTab === "Overview" ? (
            <Overview />
          ) : (
            <Statistics />
          )}
        </YoutubeProvider>
      </Container>
    </div>
  );
}

export default App;
