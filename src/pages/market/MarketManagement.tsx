import React , {useEffect} from 'react';
import { Dialog } from 'primereact/dialog';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import create from 'zustand';
import {useNavigate} from "react-router-dom";
import useApi from '../../api/useApi';
import { TradeTypeNameEnum } from '../../enum/allEnums';
import { checkIsNull } from '../../components/global/checkIsNull';
import { Tooltip } from 'primereact/tooltip';
import { toast } from 'react-toastify';
import { Dropdown } from 'primereact/dropdown';
import FormCreateMarket from './FormCreateMarket';

const MarketManagementScreen = () => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        list: any[];
        listFutures: any[];
        selectedMarket?: any;
        showDialog: boolean;
        marketType: number;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        list:[],
        listFutures:[],
        selectedMarket:null,
        showDialog:false,
        marketType:1
    }));



    const getAllMarket =  async (page:number) => {
        const list = [
            {
                name:'BTCUSDT',
                id:1,
                minimum:'0.01578',
                minPrice:'0.15729',
                symbol:'BTC',
                base:'USDT',
                status:true
            },
            {
                name:'BNBUSDT',
                id:2,
                minimum:'0.03578',
                minPrice:'1.2729',
                symbol:'BNB',
                base:'USDT',
                status:true
            },
            {
                name:'ETHUSDT',
                id:3,
                minimum:'1.5',
                minPrice:'0.15729',
                symbol:'ETH',
                base:'USDT',
                status:true
            },
        ];
        
        const listFuture = [
            {
                name:'TRXUSDT',
                id:1,
                minimum:'10',
                minPrice:'0.1',
                symbol:'TRX',
                base:'USDT',
                status:true
            },
            {
                name:'ADAUSDT',
                id:2,
                minimum:'0.03578',
                minPrice:'1.2729',
                symbol:'ADA',
                base:'USDC',
                status:false
            },
            {
                name:'SHIBUSDT',
                id:3,
                minimum:'1.000.000',
                minPrice:'1.000',
                symbol:'SHIB',
                base:'USDT',
                status:true
            },
        ];
        useStore.setState({list:list , listFutures:listFuture})
    }
   
    const OptionsBodyTemplate = (rowData:any) => {
        const { list } = useStore();
        const status = rowData.status;
        return (
            <>
                <div className="d-flex flex-row">
                
                <Button onClick={()=> {
                       const eList = list;
                       const index = eList.findIndex(item => item.id == rowData.id);
                       eList[index].status = !eList[index].status;
                       useStore.setState({list:eList});
                }} tooltip={status ? 'DeActive':'Active'}  icon={`pi ${status ? 'pi-check-square' : 'pi-times-circle'}`} className={`p-button-rounded  p-button-text ${status ? 'green p-button-success':'red p-button-danger'}`}  tooltipOptions={{  position: 'bottom' }}  />
                </div>
            </>
        );
    }

    const MarketNameTemplate = (rowData:any) => {

        return (
            <>
                <div className="d-flex flex-row align-items-center">
                    <img src={`http://185.202.113.250/icons/64x64//${rowData.symbol}.png`} className="mr-2" style={{width:'32px',height:'32px',borderRadius:'50%'}} alt="?" />
                   <span>{rowData.name}</span>
                </div>
            </>
        );
    }
    
    const pageChange = (event:any) => {
        if (event.page == useStore.getState().page) return;
        useStore.setState({page:event.first})
        getAllMarket(event.page)
    }

    useEffect(() => {
        getAllMarket(1);
    }, [])



    const  DataView = () => {
        const { list,loading  , total , page , marketType , listFutures} = useStore()
        return <DataTable value={marketType == 1 ? list : listFutures} loading={loading} footer={
            <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
        } emptyMessage={`Market Not Found ...`}  responsiveLayout="scroll">
                <Column field="name" header="name" body={MarketNameTemplate} ></Column>
                <Column field="symbol" header="Symbol" body={(data)=> checkIsNull(data , 'symbol') } ></Column>
                <Column field="base" header="Base" body={(data)=> checkIsNull(data , 'base') } ></Column>
                <Column field="minimum" header="Min Trade" body={(data)=> checkIsNull(data , 'minimum') } ></Column>
                <Column field="minPrice" header="Min Price" body={(data)=> checkIsNull(data , 'minPrice') } ></Column>
                <Column field="permission" header="Options"  body={OptionsBodyTemplate} ></Column>
            </DataTable>
    }

    const DetailsDialog = () => {
        const { showDialog } = useStore()
        return <Dialog header="Create New Market" visible={showDialog} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialog:false})}>
               <FormCreateMarket  onSubmit={()=> {
                toast.success('Created')
                 useStore.setState({showDialog:false});
               }}/>
        </Dialog>
    }

    const MarketTypes = () => {
        const {marketType} = useStore();
        const MarketTypes = [
            {label:'Spot Market' , key:1},
            {label:'Futures Market' , key:2}
        ]
        return <Dropdown value={marketType} optionLabel="label" optionValue='key'  options={MarketTypes} onChange={(e)=> {
            useStore.setState({marketType:e.value})
        }} />
    }

    return (
        <>
            <DetailsDialog />
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>Market List Controller</h2>
                                <div className="d-flex flex-row">
                                    <MarketTypes />
                                    <div className="mx-2"></div>
                                    <Button style={{minWidth:'35px' , height:'35px'}}  tooltip="add Market" onClick={()=> {
                                        useStore.setState({ showDialog:true})
                                    }} icon="pi pi-plus" className='p-button-rounded p-button-help mr-2'  tooltipOptions={{  position: 'top' }}  />
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

export default React.memo(MarketManagementScreen);