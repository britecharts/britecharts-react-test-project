import React, { Component } from 'react';
import {with4Slices} from './data';
import {DonutComponent} from 'britecharts-react';

const DonutChart = () => (
    <DonutComponent
        data={with4Slices()}
    />
);

export default DonutChart;