import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useRef } from 'react';
import {data} from './brokersData.json';
import './brokersStyle.scss';
import etorostatic from '../../assets/imgs/brokers/etorostatic.png';
import eightcap from '../../assets/imgs/brokers/eightcap-review.png';
import tradestation from '../../assets/imgs/brokers/tradestation-review.png';
import Capital from '../../assets/imgs/brokers/Capital.png';
import Swissquote from '../../assets/imgs/brokers/Swissquote.jpg';



const BrokersScreen = () => {

    const brokers = structuredClone(data as BrokerInterface[]) 
    const counter = (rowData:BrokerInterface ) => {
        return <>
        <span>#{rowData.index}</span>
        </>
    };
    const BrokerNameTemplate = (rowData:BrokerInterface) => {
        let imgSrc;
        let link ;
        switch (rowData.index) {
            case 1:
                imgSrc = etorostatic;
                link = 'https://www.etoro.com'
                break;
            case 2:
                imgSrc = eightcap;
                link = 'https://www.tradestation.com/'
                break;
            case 3:
                imgSrc = tradestation;
                link = 'https://www.eightcap.com/en/'
                break;
            case 4:
                imgSrc = Swissquote;
                link = 'https://en.swissquote.com/'
                break;
            case 5:
                imgSrc = Capital;
                link = 'https://capital.com/'
                break;
        
            default:
                break;
        }
        return (
            <>
                <img className='company-icon' src={imgSrc} />
                <a href={link} className="ml-2">{rowData.name}</a>
            </>
        )
    }
    const SetStatusColor = (rowData:BrokerInterface) => {
        return <span className={rowData.freeScore < 4 ? 'bg-danger red' : 'bg-susses green'}>
            {rowData.freeScore}
        </span>
    }

    const TemplateMinimumDeposit = (rowData:BrokerInterface) => {
        return <span>{rowData.minimumDeposit} %</span>
    }

    return (
        <>
        <div className="main-brokers-list">
            <div className="">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <h3>Brokers List</h3>
                            <DataTable value={brokers} responsiveLayout="stack" breakpoint="960px">
                                <Column field="name" header="" body={counter}></Column>
                                <Column field="name" header="Broker" body={BrokerNameTemplate}></Column>
                                <Column field="score" header="Overall score"></Column>
                                <Column field="minimumDeposit" header="Minimum deposit" body={TemplateMinimumDeposit}></Column>
                                <Column field="freeScore" header="Free Score" body={SetStatusColor}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};


export default React.memo(BrokersScreen);

interface BrokerInterface {
    index:number;
	name: string;
	score: number;
	minimumDeposit: number;
	freeScore: number;
}