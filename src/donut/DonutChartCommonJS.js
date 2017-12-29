import React, { Component } from 'react';
import { with4Slices } from './data';

const Britecharts = require('britecharts-react');
const { DonutComponent } = Britecharts;

const DonutChartCommonJS = () => (
    <DonutComponent
        data={with4Slices()}
    />
);

export default DonutChartCommonJS;