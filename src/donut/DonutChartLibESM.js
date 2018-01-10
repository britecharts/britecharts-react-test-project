import React, { Component } from 'react';
import { with4Slices } from './data';
import {Donut} from '../../node_modules/britecharts-react/lib/esm/index.js';

export default class DonutChartLibESM extends Component {

    render() {
        return (
            <Donut
                data={with4Slices()}
            />
        );
    }
};