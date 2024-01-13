import React from "react";

import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
import Chart2 from "../data/dummy_chart_interview_2.json";
import { useQuery } from "@tanstack/react-query";
import {
  ComposedChart,
  Bar,
  Cell,
  Label,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaDiamond } from "react-icons/fa6";

const fetchData = async () => {
  return new Promise((resolve) => {
    resolve(Chart2);
  });
};

export function ChartAdmin() {
  const {
    data: dummyData2,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dummy2"],
    queryFn: fetchData,
  });

  const daily = dummyData2?.["Attendance Daily"];
  const shift = dummyData2?.["Attendance Per Shift"];

  if (!daily) return;
  if (!shift) return;

  // daily
  const attend = daily?.["Attend"];
  const nonSched = daily?.["Non Schedule"];
  const unattend = daily?.["Unattend"];
  const accAttend = daily?.["Accumulation Attend"];
  const accUnattend = daily?.["Accumulation Un-attend"];
  const accNonSched = daily?.["Accumulation Non Schedule"];

  // shift
  const shiftAttend = shift?.["Attend"];
  const shiftNonSched = shift?.["Non Schedule"];
  const shiftUnattend = shift?.["Un-attend"];
  const shiftLate = shift?.["Late Check-in"];
  const shiftTotalAttend = shift?.["Total Attend"];
  const shiftTotalUnattend = shift?.["Total Un-attend"];
  const shiftTotalLate = shift?.["Total Late Check-in"];
  const shiftTotalNonSched = shift?.["Total Non Schedule"];

  const totalMaped = Object.keys(attend).map((keys) => {
    const totalDaily = attend?.[keys] + nonSched?.[keys] + unattend?.[keys];
    const attendPercent = isNaN((attend?.[keys] / totalDaily) * 100)
      ? 0
      : (attend?.[keys] / totalDaily) * 100;
    const nonSchedPercent = isNaN((nonSched?.[keys] / totalDaily) * 100)
      ? 0
      : (nonSched?.[keys] / totalDaily) * 100;
    const unattendPercent = isNaN((unattend?.[keys] / totalDaily) * 100)
      ? 0
      : (unattend?.[keys] / totalDaily) * 100;
    const accAttendTotal = accAttend?.[keys];
    const accUnattendTotal = accUnattend?.[keys];
    const accNonSchedTotal = accNonSched?.[keys];

    return {
      name: keys,
      attendPercent,
      nonSchedPercent,
      unattendPercent,
      accAttendTotal,
      accUnattendTotal,
      accNonSchedTotal,
    };
  });

  const totalMapedShift = Object.keys(shiftAttend).map((keys) => {
    const totalDaily =
      shiftAttend?.[keys] + shiftNonSched?.[keys] + shiftUnattend?.[keys];
    const attendPercent = isNaN((shiftAttend?.[keys] / totalDaily) * 100)
      ? 0
      : (shiftAttend?.[keys] / totalDaily) * 100;
    const nonSchedPercent = isNaN((shiftNonSched?.[keys] / totalDaily) * 100)
      ? 0
      : (shiftNonSched?.[keys] / totalDaily) * 100;
    const unattendPercent = isNaN((shiftUnattend?.[keys] / totalDaily) * 100)
      ? 0
      : (shiftUnattend?.[keys] / totalDaily) * 100;
    const latePercent = isNaN((shiftLate?.[keys] / totalDaily) * 100)
      ? 0
      : (shiftLate?.[keys] / totalDaily) * 100;
    const accAttendTotal = shiftTotalAttend?.[keys];
    const accUnattendTotal = shiftTotalUnattend?.[keys];
    const accNonSchedTotal = shiftTotalNonSched?.[keys];
    const accLateTotal = shiftTotalLate?.[keys];

    return {
      name: keys,
      attendPercent,
      nonSchedPercent,
      unattendPercent,
      latePercent,
      accAttendTotal,
      accUnattendTotal,
      accNonSchedTotal,
      accLateTotal,
    };
  });

  console.log(totalMapedShift);
  return (
    <Grid templateColumns="repeat(1, 1fr)" colSpan={4} gap={4}>
      <Text textAlign={"left"} fontWeight={600} fontSize={20} color={"grey"}>
        Attendance - Daily
      </Text>

      <GridItem
        rowSpan={{ base: "12", md: "2" }}
        bg="white"
        boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
        borderRadius={"10px"}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            data={totalMaped}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" domain={[0, 100]}>
              <Label angle={'-90'} value="Percentage" offset={0} position="left" />
            </YAxis>
            <YAxis yAxisId="right" orientation="right" domain={[0, 75]}>
              <Label angle={90} value="Total" offset={0} position="right" />
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar
              dataKey="nonSchedPercent"
              name="Non Schedule"
              stackId="a"
              yAxisId="left"
              fill=" #36454F"
            />

            <Bar
              dataKey="unattendPercent"
              name="Unattend"
              stackId="a"
              yAxisId="left"
              fill="#fdd5bb"
            />
            <Bar
              dataKey="attendPercent"
              name="Attend"
              stackId="a"
              yAxisId="left"
              fill=" #6281c4"
            />
            <Line
              type="monotone"
              dataKey="accAttendTotal"
              name="Accumulated Attend"
              yAxisId="right"
              stroke="#80BCBD"
            />
            <Line
              type="monotone"
              dataKey="accUnattendTotal"
              name="Accumulated Un-attend"
              yAxisId="right"
              stroke="#9DBC98"
            />
            <Line
              type="monotone"
              dataKey="accNonSchedTotal"
              name="Accumulated Non Schedule"
              yAxisId="right"
              stroke="#638889"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </GridItem>
      <Text textAlign={"left"} fontWeight={600} fontSize={20} color={"grey"}>
        Attendance - Per Shift
      </Text>
      <GridItem
        w={"100%"}
        rowSpan={{ base: "12", md: "2" }}
        bg="white"
        boxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.2)"
        borderRadius={"10px"}
      >
        <ResponsiveContainer width="100%" height={"100%"}>
          <ComposedChart
            width={500}
            height={100}
            data={totalMapedShift}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" domain={[0, 100]} >
            <Label angle={'-90'} value="Percentage" offset={0} position="left" />
            </YAxis>
            <YAxis yAxisId="right" orientation="right" domain={[0, 24]} >
            <Label angle={90} value="Total" offset={0} position="right" />
            </YAxis>

            <Tooltip />
            <Legend />
            <Bar
              dataKey="nonSchedPercent"
              name="Non Schedule"
              stackId="a"
              yAxisId="left"
              fill=" #36454F"
            />

            <Bar
              dataKey="unattendPercent"
              name="Unattend"
              stackId="a"
              yAxisId="left"
              fill="#fdd5bb"
            />
            <Bar
              dataKey="attendPercent"
              name="Attend"
              stackId="a"
              yAxisId="left"
              fill=" #6281c4"
            />
            <Bar
              dataKey="latePercent"
              name="Late Check-in"
              stackId="a"
              yAxisId="left"
              fill=" #6281c4"
            />
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="accAttendTotal"
              name="Accumulated Attend"
              stroke="#80BCBD"
            />
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="accUnattendTotal"
              name="Accumulated Un-attend"
              stroke="#9DBC98"
            />
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="accNonSchedTotal"
              name="Accumulated Non Schedule"
              stroke="#638889"
            />
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="accLateTotal"
              name="Accumulated Late Check-In"
              stroke="red"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </GridItem>
    </Grid>
  );
}

export default ChartAdmin;
