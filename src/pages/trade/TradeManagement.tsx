import React , {useEffect} from 'react';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import create from 'zustand';
import useApi from '../../api/useApi';
import { checkIsNull } from '../../components/global/checkIsNull';
import { Tooltip } from 'primereact/tooltip';
import { Dropdown } from 'primereact/dropdown';

const TradeManagementScreen = ({  type }: {  type:number }) => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        list: any[];
        listFutures: any[];
        selectedTrade?: any;
        showDialog: boolean;
        TradeType: number;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        list:[],
        listFutures:[],
        selectedTrade:null,
        showDialog:false,
        TradeType:type
    }));

    const getAllTrade =  async (page:number) => {
        const list = [
            {
                Market : 'SHIBUSDT',
                User_id: 1,
                Price:'0.0000042123',
                isBuy:true,
                Status:'pending'
            },
            {
                Market : 'TRXUSDT',
                User_id: 2,
                Price:'0.0521123',
                isBuy:false,
                Status:'finished'
            },
            {
                Market : 'ETHUSDT',
                User_id: 1,
                Price:'321.2',
                isBuy:true,
                Status:'pending'
            },
        ];
        
        const listFuture = [
            {
                Market : 'ADAUSDT',
                User_id: 1,
                Price:'0.4000323',
                isBuy:true,
                Status:'pending'
            },
            {
                Market : 'SOLUSDT',
                User_id: 21,
                Price:'30',
                isBuy:false,
                Status:'finished'
            },
            {
                Market : 'ETHUSDT',
                User_id: 1,
                Price:'321.2',
                isBuy:true,
                Status:'pending'
            },
        ];
        
        useStore.setState({list:list , listFutures:listFuture})
    }

    const TradeNameTemplate = (rowData:any) => {

        return (
            <>
                <div className="d-flex flex-row align-items-center">
                    <img src={`http://185.202.113.250/icons/64x64//${rowData.Market.replace('USDT' , '')}.png`} className="mr-2" style={{width:'32px',height:'32px',borderRadius:'50%'}} alt="?" />
                   <span>{rowData.Market}</span>
                </div>
            </>
        );
    }
    
    const pageChange = (event:any) => {
        if (event.page == useStore.getState().page) return;
        useStore.setState({page:event.first})
        getAllTrade(event.page)
    }

    useEffect(() => {
        getAllTrade(1);
    }, [type])

    const tradeTypeTemplate = (rowData:any) => {
        const isBuy = rowData.isBuy
        return (
            <>
                <span className={isBuy ? 'green' : 'red'}>{isBuy ? 'Buy' : 'Sell'}</span>
            </>
        )
    }

    const StatusCheckerTemplate =  (rowData:any) => {

        const color = rowData.Status == 'pending' ? 'yellow' : 'green'
        return (
            <>
            <span className={color}>{rowData.Status}</span>
            </>
        )
    }

    const  DataView = () => {
        const { list,loading  , total , page , TradeType , listFutures} = useStore()
        return <DataTable value={TradeType == 1 ? list : listFutures} loading={loading} footer={
            <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
        } emptyMessage={`Trade Not Found ...`}  responsiveLayout="scroll">
                <Column field="Market" header="Market" body={TradeNameTemplate} ></Column>
                <Column field="User_id" header="User id" body={(data)=> checkIsNull(data , 'User_id') } ></Column>
                <Column field="Price" header="Price" body={(data)=> checkIsNull(data , 'Price') } ></Column>
                <Column field="isBuy" header="Type" body={tradeTypeTemplate } ></Column>
                <Column field="Status" header="Status" body={StatusCheckerTemplate} ></Column>
            </DataTable>
    }

    const TradeTypes = () => {
        const {TradeType} = useStore();
        const TradeTypes = [
            {label:'Spot Trade' , key:1},
            {label:'Futures Trade' , key:2}
        ]
        return <Dropdown value={TradeType} optionLabel="label" optionValue='key'  options={TradeTypes} onChange={(e)=> {
            useStore.setState({TradeType:e.value})
        }} />
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>Trade List Controller</h2>
                                <div className="d-flex flex-row">
                                    <TradeTypes />
                                    <div className="mx-2"></div>
                                   
                                </div>
                            </div>
                            <DataView />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
   
};

export default React.memo(TradeManagementScreen);