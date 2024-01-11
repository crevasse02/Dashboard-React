import React from "react";
import { useState } from "react";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 100}>
        <Navbar
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>
    </>
  );
};

export default Dashboard;
