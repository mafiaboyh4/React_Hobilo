import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import {data} from './deposts.json';

export const DepositHistoryComp = () => {
    const list = structuredClone(data as DepositHistoryInterface[]);

    const counter = (rowData:DepositHistoryInterface ) => {
        return <>
        <span>#{rowData.index}</span>
        </>
    };

    const SymbolTemplate = (rowData:DepositHistoryInterface) => {
        return (
            <>
                <img className='company-icon' src={`https://alinance.com/statics/${rowData.symbol}.svg`}  alt="?" />
                <span className='ml-2'>{rowData.symbol}</span>
            </>
        )
    }


    return (
        <>
            <div className="box justify-content-start">
                <h3>Deposit History</h3>
                <DataTable value={list} responsiveLayout="stack" breakpoint="960px">
                    <Column field="symbol" header="" body={counter}></Column>
                    <Column field="symbol" header="symbol" body={SymbolTemplate}></Column>
                    <Column field="amount" header="Amount" ></Column>
                    <Column field="txId" header="txId"></Column>
                    <Column field="point" header="Score received" ></Column>
                </DataTable>
            </div>
        </>
    )
};

export default React.memo(DepositHistoryComp);


export interface DepositHistoryInterface {
	index: number;
	amount: number;
	symbol: string;
	txId: string;
	point: number;
}