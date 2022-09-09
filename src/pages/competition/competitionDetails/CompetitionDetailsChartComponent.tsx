import { ApexOptions } from 'apexcharts';
import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Store } from './../../../store/index';
import {dataSeries} from './dataSeries.json';

const CompetitionDetailsChartComponent = () => {
  const {isDark} = Store()
    const [state, setState] = useState<any>();

    useEffect(() => {
      var ts2 = 1484418600000;
      var dates = [];
      var spikes = [5, -5, 3, -3, 8, -8]
      for (var i = 0; i < 120; i++) {
        ts2 = ts2 + 86400000;
        var innerArr = [ts2, dataSeries[1][i].value];
        dates.push(innerArr)
      }

      setState({
        series: [{
            name: 'XYZ MOTORS',
            data: dates
          }],
          options: {
            theme: {
              mode: isDark ? 'dark': 'light', 
              palette: 'palette1', 
              monochrome: {
                  enabled: false,
                  color: isDark ? '#FFFFFF':'#212121',
                  shadeIntensity: 0.65,
                  shadeTo: isDark ? 'dark': 'light'
              },
          },
            chart: {
              type: 'area',
              stacked: false,
              height: 350,
              zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
              },
              toolbar: {
                autoSelected: 'zoom'
              }
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
            },
            title: {
              text: 'Analyze Chart',
              align: 'left'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
              },
            },
            yaxis: {
              labels: {
                formatter: function (val:any) {
                  return (val / 1000000).toFixed(0);
                },
              },
              title: {
                text: 'Price'
              },
            },
            xaxis: {
              type: 'datetime',
            },
            tooltip: {
              shared: false,
              y: {
                formatter: function (val:any) {
                  return (val / 1000000).toFixed(0)
                }
              }
            }
          } as ApexOptions,
        
    })
    }, [])
    
    
    return (
        <>
          <div className="container mt-4">
          {state && <ReactApexChart options={state.options} series={state.series} type="area" height={350} />}
          </div>
        </>
    )
};

export default React.memo(CompetitionDetailsChartComponent)