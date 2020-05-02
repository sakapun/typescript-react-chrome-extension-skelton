import { Box, Button } from "@chakra-ui/core";
import React from "react";
import { Provider } from "./application/";
import Index from "./presentation/container/Main";

const DevWrapper = (props: any) => {
  return process.env.NODE_ENV === "development" ? (
    <Box height="100vh" display="flex" justifyContent="flex-end" backgroundColor="blackAlpha.100" paddingRight={8}>
      <Index />
    </Box>
  ) : (
    <Index />
  );
};

const App: React.FC = () => {
  return (
    <Provider>
      <DevWrapper />
    </Provider>
  );
};

export default App;
