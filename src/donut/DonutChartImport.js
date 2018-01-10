import React from 'react';
import {with4Slices} from './data';
import {Donut} from 'britecharts-react';

const DonutChartImport = () => (
    <Donut
        data={with4Slices()}
    />
);

export default DonutChartImport;