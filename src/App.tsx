import { Box, Button } from "@chakra-ui/core";
import React from "react";
import { Provider } from "./application/";
import Index from "./presentation/container/Main";

const App: React.FC = () => {
  return (
    <Provider>
      <Index />
    </Provider>
  );
};

export default App;
