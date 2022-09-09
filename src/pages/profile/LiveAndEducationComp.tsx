import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import {data} from './education.json';

const LiveAndEducationComp = () => {
    const list = structuredClone(data as historyInterface[]);

    const counter = (rowData:historyInterface ) => {
        return <>
        <span>#{rowData.index}</span>
        </>
    };


    return (
        <>
            <div className="box justify-content-start">
                <h3>Deposit History</h3>
                <DataTable value={list} responsiveLayout="stack" breakpoint="960px">
                    <Column field="symbol" header="" body={counter}></Column>
                    <Column field="event" header="Event Name"></Column>
                    <Column field="date" header="date" ></Column>
                    <Column field="point" header="Score received" ></Column>
                </DataTable>
            </div>
        </>
    )
};

export default React.memo(LiveAndEducationComp);

interface historyInterface {
	index: number;
	event: string;
	date: string;
	point: number;
}