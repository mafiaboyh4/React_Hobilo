import React from 'react';
import {data} from './brokers.json'
import etorostatic from '../../assets/imgs/brokers/etorostatic.png';
import eightcap from '../../assets/imgs/brokers/eightcap-review.png';
import tradestation from '../../assets/imgs/brokers/tradestation-review.png';
import Capital from '../../assets/imgs/brokers/Capital.png';
import Swissquote from '../../assets/imgs/brokers/Swissquote.jpg';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const ProfileBrokersListComponent = () => {

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

    const TemplateTotalDeposit = (rowData:BrokerInterface) => {
        return <span>{rowData.totalDeposit} $</span>
    }
    
    return (
        <>
        <div className="box justify-content-start">
            <h3>Brokers List</h3>
            <DataTable value={brokers} responsiveLayout="stack" breakpoint="960px">
                <Column field="name" header="" body={counter}></Column>
                <Column field="name" header="Broker" body={BrokerNameTemplate}></Column>
                <Column field="point" header="Score received"></Column>
                <Column field="totalDeposit" header="Total deposit" body={TemplateTotalDeposit}></Column>
            </DataTable>
        </div>
        </>
    )
};

export default React.memo(ProfileBrokersListComponent)

interface BrokerInterface {
	index: number;
	name: string;
	point: number;
	totalDeposit: number;
}
