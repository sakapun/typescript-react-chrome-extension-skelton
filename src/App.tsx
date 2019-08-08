import React from "react";
import { Provider } from "./application/";
import { Box, Button } from "@smooth-ui/core-em";

const App: React.FC = () => {
  return (
    <Provider>
      <Box width={200} height={200}>
        <Button onClick={() => console.log(123)}>adfasdf</Button>
      </Box>
    </Provider>
  );
};

export default App;
