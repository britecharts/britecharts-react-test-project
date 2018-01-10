import React from 'react';
import { with4Slices } from './data';

const Britecharts = require('britecharts-react');
const { Donut } = Britecharts;

const DonutChartCommonJS = () => (
    <Donut
        data={with4Slices()}
    />
);

export default DonutChartCommonJS;