import React , {useEffect, useState , Component} from 'react';
import create from 'zustand';
import useApi from '../../api/useApi';
import { Tooltip } from 'primereact/tooltip';
import { toast } from 'react-toastify';
import { Chart } from 'primereact/chart';
import DoughnutChart from './DoughnutChart';

const AnalyzeExchangeScreen = () => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        showDialog: boolean;
        options:any;
        series:any;
        lineOptions:any;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        options:null,
        series:null,
        showDialog:false,
        lineOptions:null
    }));

    const lineDataProfit = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Profits',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: '#eb4d5c',
                borderColor: '#eb4d5c',
                tension: .4
            },
            {
                label: 'Lost',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: '#0CB059',
                borderColor: '#0CB059',
                tension: .4
            },
        ]
    };

    const lineDataWithdrawDeposit = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Deposit',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: '#2f4860',
                borderColor: '#2f4860',
                tension: .4
            },
            {
                label: 'Withdraw',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: '#00bb7e',
                borderColor: '#00bb7e',
                tension: .4
            },
        ]
    };

    const doughnutData = {
        labels: ['Fee wallet', 'Deposit wallet', 'Withdraw wallet'],
        datasets: [
            {
                data: [120, 1000, 26],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    }


    useEffect(() => {
    }, [])



    const  DataView = ({ type }: { type:any }) => {
        const { lineOptions}  = useStore();
       return (
        <>
            {type == 0 &&<Chart type="line" data={lineDataProfit} options={lineOptions} /> }
            {type == 1 &&<Chart type="line" data={lineDataWithdrawDeposit} options={lineOptions} /> }
            {type == 2 &&<DoughnutChart /> }
        </>
       )

    }

    
    return (
        <>
            
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-12">
                        <div className="p-3 my-4">
                            <div className="d-flex flex-column align-items-center ">
                                <h3 className='text-center pr-5'>Wallet analyze</h3>
                                <div className="pl-5">

                                    <DataView type={2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-3">
                        <div className="d-flex flex-row justify-content-between">
                                <h3>Profit And Lost</h3>
                            </div>
                            <DataView type={0} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-3">
                        <div className="d-flex flex-row justify-content-between ">
                                <h3>Withdraw and Deposit</h3>
                            </div>
                            <DataView type={1} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
   
};

export default React.memo(AnalyzeExchangeScreen);