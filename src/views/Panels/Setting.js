import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { TbProgressBolt } from "react-icons/tb";

const Setting = () => {
  return (
    <Flex h={'100vh'} bg={'#EDCEA8'} flexDir={'column'} alignItems={"center"} justifyContent={"center"}>
      <TbProgressBolt style={{fontSize:'10vw', color:'green'}} />
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign={"center"}
      >
        This page is not ready yet, check it out soon!!
      </Heading>
    </Flex>
  );
};

export default Setting;
