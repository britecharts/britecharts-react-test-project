import React from "react";
import { withTwoTopics } from "./data";
import { Line, axisTimeCombinations } from "britecharts-react";

const LineChartImport = () => (
  <Line data={withTwoTopics()} xAxisFormat={axisTimeCombinations.MINUTE_HOUR} />
);

export default LineChartImport;
