import { Box } from "@chakra-ui/core";
import React from "react";
import { Provider } from "./application/";
import Index from "./presentation/container/Main";

function DevWrapper<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return process.env.NODE_ENV === "development" ? (
      <Box height="100vh" display="flex" justifyContent="flex-end" backgroundColor="blackAlpha.100" paddingRight={8}>
        <Component {...props} />
      </Box>
    ) : (
      <Component {...props} />
    );
  };
}
const DisplayComponent = DevWrapper(Index);

const App: React.FC = () => {
  return (
    <Provider>
      <DisplayComponent />
    </Provider>
  );
};

export default App;
