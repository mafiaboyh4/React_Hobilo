import { ApexOptions } from 'apexcharts';
import React from 'react';
import  ReactApexChart from 'react-apexcharts';
import { Store } from './../../store/index';

const CompetitionChartComponent = () => {
    const {isDark} = Store()
    const state = {
        series: [{
            name: 'Competition 1',
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: 'Competition 2',
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'Competition 3',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
          },
          title: {
            text: 'Competitions Analyze',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val:any, opts:any) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 2
            }
          },
          xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
              '10 Jan', '11 Jan', '12 Jan'
            ],
          },
          tooltip: {
            style: {
                fontSize: '1rem',
            },
            y: [
                
              {
                title: {
                  formatter: function (val:any) {
                    return val 
                  }
                }
              },
              {
                title: {
                  formatter: function (val:any) {
                    return val
                  }
                }
              },
              {
                title: {
                  formatter: function (val:any) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          },
          theme: {
            mode: isDark ? 'dark': 'light', 
            palette: 'palette1', 
            monochrome: {
                enabled: false,
                color: isDark ? '#FFFFFF':'#212121',
                shadeIntensity: 0.65
            },
        },
        } as ApexOptions,
    }
    
    return (
        <>
        <div className="mt-3 box">
            <div className="chart-controller w-100">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            </div>
        </div>
        </>
    ) 
};


export default React.memo(CompetitionChartComponent)