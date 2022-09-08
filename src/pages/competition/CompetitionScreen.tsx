import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import CompetitionChartComponent from './CompetitionChartComponent';
import './CompetitionStyle.scss'
import { Store } from './../../store/index';
import ListCompetitionsComponent from './ListCompetitionsComponent';

const CompetitionScreen = () => {
    const {isDark} = Store()

    const state = {
        series: [44, 55, 41],
        options: {
            tooltip: {
                style: {
                    fontSize: '1rem',
                },
            },
          chart: {
            type: 'donut',
          },
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
          labels:['Points' , 'Deposits' , 'Winner Points'],
          responsive: [{
            breakpoint: 992,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        } as ApexOptions,
    }
    return (
        <>
            <div className="main-competition-controller">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="box dark ">
                            <span className='title'>231</span>
                            <p>Members Joined</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="box light ">
                            <span className='title'>143k</span>
                            <p>Deposits</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="box light ">
                            <span className='title'>521</span>
                            <p>Winner Points</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className='box align-items-start'>
                            <div className="w-75">
                                <ReactApexChart options={state.options} series={state.series} type="donut" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="box dark ">
                            <span className='title'>4</span>
                            <p>Competitions</p>
                        </div>
                    </div>
                   
                    <div className="col-lg-6">
                        <CompetitionChartComponent />
                    </div>
                    <div className="col-lg-6">
                        <ListCompetitionsComponent />
                    </div>
                </div>
            </div>
        </>
    )
    
};


export default React.memo(CompetitionScreen);