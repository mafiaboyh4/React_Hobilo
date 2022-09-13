import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import './toolsStyle.scss'
const TablePoint = () => {

    const list = [
        {label:'Sing Up Exchange Or Broker' , value:1000},
        {label:'First Comment on Broker' , value:200},
        {label:'Daily activity' , value:10},
        {label:'Deposit To Koala' , value:50},
        {label:'Deposit To Any Joined Broker' , value:10},
    ]

    const Currency = (value:number) => {
        return Intl.NumberFormat().format((value));
    }

    const PointTemplate = (data:TableModel) => {
        return <span>{Currency(data.value)} <span className="f-14">Point</span></span>
    }

    return (
        <>
        <div className="container">
            <div className="main-table-points-controller">
              <div className="col-12 mb-5">
                    <div className="head">
                        <h2>Table Points</h2>
                        <span className="subtitle">
                            All about Koala Points 
                        </span>
                    </div>
                    <div className="py-3"></div>
                    <DataTable showGridlines  value={list} responsiveLayout="stack" breakpoint="960px">
                            <Column field="label" header="Description" ></Column>
                            <Column field="value" header="Koala Point" body={PointTemplate} ></Column>
                    </DataTable>
                </div>
            </div>
        </div>
        </>
    )
};

export default React.memo(TablePoint);

interface TableModel {
    label:string;
    value:number;
}