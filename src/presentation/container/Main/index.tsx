import { Box, Button, Heading } from "@chakra-ui/core";
import React from "react";

const Index = () => {
  return (
    <Box
      width={400}
      height={400}
      background={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Heading size={"xl"}>
        chrome extension
        <br />
        sample
      </Heading>
      <Button onClick={() => console.log(123)}>console.log(123)</Button>
    </Box>
  );
};

export default Index;
