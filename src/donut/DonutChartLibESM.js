import React, { Component } from 'react';
import { with4Slices } from './data';
import DonutComponent from '../../node_modules/britecharts-react/lib/esm/Donut.js';

// const DonutComponent = require('../../node_modules/britecharts-react/lib/esm/Donut.js');

export default class DonutChartLibESM extends Component {

    render() {
        return (
            <DonutComponent
                data={with4Slices()}
            />
        );
    }
};