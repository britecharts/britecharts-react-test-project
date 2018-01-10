import React, { Component } from 'react';
import { with4Slices } from './data';

const Donut = require('../../node_modules/britecharts-react/lib/umd/Donut.js').default;

export default class DonutChartLibUMD extends Component {

    render() {
        return (
            <Donut
                data={with4Slices()}
            />
        );
    }
};