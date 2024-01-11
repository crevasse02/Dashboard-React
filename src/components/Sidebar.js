import {
  Box,
  Button,
  IconButton,
  Drawer,
  Heading,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Text,
  DrawerBody,
  DrawerContent,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaStore,
  FaBook,
  FaBuilding,
  FaRegCreditCard,
  FaTools,
  FaUserClock,
  FaRocket,
  FaMoneyBillWave,
  FaRegEdit,
  FaBattleNet,
  FaBiohazard,
  FaBalanceScaleRight,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const CustomNavLink = ({ onClick, to, icon, label }) => {
  const location = useLocation();

  return (
    <ChakraLink as={NavLink} to={to}>
      <IconButton
        onClick={onClick}
        bgColor={location.pathname === to ? "#D2042D" : "white"}
        aria-label={label}
        icon={icon}
      />
    </ChakraLink>
  );
};
const SidebarContent = ({ onClick }) => (
  <VStack
    className="custom-scrollbar"
    maxH={"800px"}
    overflowY={"scroll"}
    gap={5}
  >
    <CustomNavLink
      onClick={onClick}
      to="/home"
      icon={<FaStore />}
      label="Home"
    />
    <CustomNavLink
      onClick={onClick}
      to="/setting"
      icon={<FaBook />}
      label="Setting"
    />
    <CustomNavLink
      onClick={onClick}
      to="/help"
      icon={<FaBuilding />}
      label="Help"
    />
    <CustomNavLink onClick={onClick} icon={<FaRegCreditCard />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaTools />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaUserClock />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaRocket />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaMoneyBillWave />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaRegEdit />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaBattleNet />} label="Help" />
    <CustomNavLink onClick={onClick} icon={<FaBiohazard />} label="Help" />
    <CustomNavLink
      onClick={onClick}
      icon={<FaBalanceScaleRight />}
      label="Help"
    />
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="100px"
      top={0}
      h="100%"
      bg="#800000"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      pt={20}
    >
      <SidebarContent onClick={onClose} />
      <Box bgColor={"#800000"} h={"50px"} pt={5}>
        <Text color={"white"} fontSize={"8px"}>
          @ 2023 Cudo <br /> Communication
        </Text>
      </Box>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent pt={12} maxW={"100px"}>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
