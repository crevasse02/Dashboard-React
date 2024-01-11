import {
  Box,
  Center,
  IconButton,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex
      bg="white"
      p={4}
      boxShadow="xl"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      {showSidebarButton && (
        <Box flex="1">
          <IconButton
            icon={<FaChevronRight w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
            mb={{ base: 2, md: 0 }}
          />
        </Box>
      )}

      <Box
        flex="2"
        px={4}
        py={2}
        borderBottom={{ base: "1px", md: "none" }}
        borderColor="gray.200"
      >
        <Text
        textAlign={'left'}
          fontSize={{ base: "xl", md: "2xl" }}
          color="#5A5A5A"
          fontWeight="700"
        >
          Dashboard Attendance
        </Text>
      </Box>

      <Flex
        flex="1"
        alignItems="center"
        justifyContent={{ base: "space-between", md: "flex-end" }}
      >
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            --All Organization--
          </MenuButton>
          <MenuList>
            <MenuItem>Branch A</MenuItem>
            <MenuItem>Branch B</MenuItem>
            <MenuItem>Branch C</MenuItem>
            <MenuItem>Branch D</MenuItem>
            <MenuItem>Branch E</MenuItem>
          </MenuList>
        </Menu>
        <IconButton
          ml={{ base: 0, md: 5 }}
          icon={<FiLogOut w={6} h={6} />}
          bgColor="transparent"
          _hover="transparent"
          onClick={onShowSidebar}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
