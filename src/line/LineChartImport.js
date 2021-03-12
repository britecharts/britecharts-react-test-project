import React from "react";
import { withTwoTopics } from "./data";
import { Line, axisTimeCombinations } from "britecharts-react";

const LineChartImport = () => (
  <Line
    data={withTwoTopics()}
    xAxisFormat={axisTimeCombinations.HOUR_DAY}
    margin={{ bottom: 60 }}
  />
);

export default LineChartImport;
