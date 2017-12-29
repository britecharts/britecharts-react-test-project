import React, { Component } from 'react';
import {with4Slices} from './data';
import {DonutComponent} from 'britecharts-react';

const DonutChartImport = () => (
    <DonutComponent
        data={with4Slices()}
    />
);

export default DonutChartImport;