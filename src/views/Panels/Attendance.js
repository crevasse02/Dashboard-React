import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Chart1 from "../../data/dummy_chart_interview_1.json";
import ChartAdmin from "../../components/ChartAdmin";

const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Chart1);
    }, 1000);
  });
};

const Attendance = () => {
  const {
    data: dummyData1,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dummy1"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return (
      <Flex h={"50vh"} alignItems={"center"} justifyContent={"center"}>
        <CircularProgress
          trackColor="transparent"
          size={"10vw"}
          isIndeterminate
          capIsRound
          color="#800000"
        />
      </Flex>
    );
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  // onDuty
  const totalValue = dummyData1["Card On Duty"]?.Total;
  const onDutyValue = dummyData1["Card On Duty"]?.["On Duty"];

  // attend
  const totalAttendValue = dummyData1["Card Attendance"]?.Total;
  const attendValue = dummyData1["Card Attendance"]?.Attend;
  const percentageAttend = ((attendValue / totalAttendValue) * 100).toFixed(2);

  //activity
  const totalFeed = dummyData1["Card Feed Activity"]?.["Total feed"];
  const totalPerson = dummyData1["Card Feed Activity"]?.["Total person"];

  //patrol
  const totalPatrol = dummyData1["Card Patrol"]?.["Total Patrol"];

  //non schedule
  const totalPersonNS = dummyData1["Card Non Schedule"]?.["Total person"];

  // non geofence
  const totalPersonNG = dummyData1["Card Non Geofence"]?.["Total person"];

  return (
    <Box p={10} pl={{ base: "10", md: "120" }}>
      <Grid
        h="200px"
        templateRows="repeat(1, 1fr)"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <Grid w={"100%"} templateColumns="repeat(4, 2fr)" gap={4}>
          {/* on duty  */}
          <GridItem
            p={5}
            colSpan={{ base: "12", md: "2" }}
            bg="white"
            boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
            borderRadius={"10px"}
          >
            <Text
              textAlign={"left"}
              fontWeight={600}
              fontSize={20}
              color={"grey"}
            >
              <span style={{ color: "red" }}>Today</span> On Duty
            </Text>
            <CircularProgress
              value={onDutyValue}
              p={5}
              size="100%"
              color="#6281c4"
              trackColor="#fdd5bb"
              thickness={"12px"}
              max={totalValue}
            >
              <CircularProgressLabel color={"#36454f"}>
                <Text
                  fontWeight={700}
                  color={"#36454f"}
                  fontSize={{ base: "8vw", md: "2vw" }}
                >
                  {onDutyValue}/{totalValue}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
          </GridItem>

          {/* attendance  */}
          <GridItem
            p={5}
            colSpan={{ base: "12", md: "2" }}
            bg="white"
            boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
            borderRadius={"10px"}
          >
            <Text
              textAlign={"left"}
              fontWeight={600}
              fontSize={20}
              color={"grey"}
            >
              <span style={{ color: "red" }}>Today</span> Attendance
            </Text>
            <CircularProgress
              p={5}
              value={attendValue}
              size="100%"
              color="#6281c4"
              trackColor="#fdd5bb"
              thickness={"12px"}
              max={totalAttendValue}
            >
              <CircularProgressLabel>
                <Text
                  fontWeight={700}
                  color={"#36454f"}
                  fontSize={{ base: "8vw", md: "2vw" }}
                >
                  {percentageAttend}%
                </Text>
                <Text
                  fontWeight={700}
                  color={"#36454f"}
                  fontSize={{ base: "3vw", md: "1vw" }}
                >
                  {attendValue}/{totalAttendValue} Person
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
          </GridItem>

          {/* feed/activ  */}
          <GridItem
            p={5}
            colSpan={{ base: "12", md: "2" }}
            bg="white"
            boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
            borderRadius={"10px"}
          >
            <Text
              textAlign={"left"}
              fontWeight={600}
              fontSize={20}
              color={"grey"}
            >
              <span style={{ color: "red" }}>Today</span> Feed / Activity
            </Text>
            <Box p={5}>
              <Text
                fontWeight={700}
                fontSize={{ base: "20vw", md: "6vw" }}
                color={"#36454f"}
              >
                {totalFeed}
              </Text>
              <Text
                color={"#36454f"}
                fontWeight={700}
                fontSize={{ base: "4vw", md: "1.2vw" }}
              >
                OF <span style={{ color: "lightgreen" }}>{totalPerson}</span>{" "}
                PERSON
              </Text>
            </Box>
          </GridItem>

          {/* patroli  */}
          <GridItem
            p={5}
            colSpan={{ base: "12", md: "2" }}
            bg="white"
            boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
            borderRadius={"10px"}
          >
            <Text
              textAlign={"left"}
              fontWeight={600}
              fontSize={20}
              color={"grey"}
            >
              <span style={{ color: "red" }}>Today</span> Patroli
            </Text>
            <Box p={5}>
              <Text
                textAlign={"left"}
                fontWeight={600}
                fontSize={20}
                color={"grey"}
              ></Text>
              <Text
                fontWeight={700}
                fontSize={{ base: "20vw", md: "6vw" }}
                color={"#36454f"}
              >
                {totalPatrol}
              </Text>
              <Text
                color={"#36454f"}
                fontWeight={700}
                fontSize={{ base: "4vw", md: "1.2vw" }}
              >
                PERSON
              </Text>
            </Box>
          </GridItem>

          {/* Non schedule */}
          <GridItem
            p={5}
            colSpan={{ base: "12", md: "2" }}
            bg="white"
            boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
            borderRadius={"10px"}
          >
            <Text
              textAlign={"left"}
              fontWeight={600}
              fontSize={20}
              color={"grey"}
            >
              <span style={{ color: "red" }}>Today</span> Non Schedule
            </Text>
            <Box p={5}>
              <Text
                fontWeight={700}
                fontSize={{ base: "20vw", md: "6vw" }}
                color={"#36454f"}
              >
                {totalPersonNS}
              </Text>
              <Text
                color={"#36454f"}
                fontWeight={700}
                fontSize={{ base: "4vw", md: "1.2vw" }}
              >
                PERSON
              </Text>
            </Box>
          </GridItem>

          {/* Non Geofence  */}
          <GridItem
            p={5}
            colSpan={{ base: "12", md: "2" }}
            bg="white"
            boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
            borderRadius={"10px"}
          >
            <Text
              textAlign={"left"}
              fontWeight={600}
              fontSize={20}
              color={"grey"}
            >
              <span style={{ color: "red" }}>Today</span> Non Geofence
            </Text>
            <Box p={5}>
              <Text
                fontWeight={700}
                fontSize={{ base: "20vw", md: "6vw" }}
                color={"#36454f"}
              >
                {totalPersonNG}
              </Text>
              <Text
                color={"#36454f"}
                fontWeight={700}
                fontSize={{ base: "4vw", md: "1.2vw" }}
              >
                PERSON
              </Text>
            </Box>
          </GridItem>
        </Grid>

        <ChartAdmin />
      </Grid>
    </Box>
  );
};

export default Attendance;
