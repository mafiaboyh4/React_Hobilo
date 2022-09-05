import React, { Component } from 'react';
import Chart from 'react-apexcharts'

const DoughnutChart = () => {
    const state = {
        options: {
            labels: ['Fee wallet', 'Deposit wallet', 'Withdraw wallet'],
        },
        series: [120, 1000, 26],
        labels: ['Fee wallet', 'Deposit wallet', 'Withdraw wallet']
    }
    return <> <Chart options={state.options} series={state.series} type="donut" width="380" /></>
};


export default React.memo(DoughnutChart)
