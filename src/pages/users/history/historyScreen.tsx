import React , {useEffect} from 'react';
import { Dialog } from 'primereact/dialog';
import { checkIsNull } from '../../../components/global/checkIsNull';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import useApi from '../../../api/useApi';
import { PendingSpotModel } from '../../../models/trade.model';
import create from 'zustand';
import { DateBody } from '../../../components/global/DateBody';
import { TradeTypeAppUrlEnum, TradeTypeNameEnum, TradeTypeUrlEnum } from '../../../enum/allEnums';
import {useNavigate, useParams} from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';


const SpotHistoryScreen = ({ historyType }: { historyType: number }) => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        list: PendingSpotModel[];
        selectedHistory?: any;
        showDialog: boolean;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        list:[],
        selectedHistory:null,
        showDialog:false,
    }));

    const { id } = useParams();

    const getAllHistory =  async (page:number) => {

        useStore.setState({loading:true})
        const resultPromise = getRequest(`${TradeTypeUrlEnum[historyType]}${id}?page=${page}&limit=10`);
    
        resultPromise.then((data:any) => {
            useStore.setState({loading:false, list:data.list , total:data.total});
          }).finally(() => {
            useStore.setState({loading:false})
          });
    }
   
    const OptionsBodyTemplate = (rowData:any) => {

        return (
            <>
                <div className="d-flex flex-row">
                    <Button icon="pi pi-eye" onClick={() => {
                        useStore.setState({selectedHistory:rowData , showDialog : true})
                    }} className="p-button-rounded  mx-2 p-button-text" aria-label="Notification" />
                </div>
            </>
        );
    }
    
    const pageChange = (event:any) => {
        if (event.page == useStore.getState().page) return;
        useStore.setState({page:event.first})
        getAllHistory(event.page)
    }

    useEffect(() => {
        getAllHistory(1);
    }, [historyType])

    const  DataView = () => {
        const { list,loading  , total , page } = useStore()
        return <DataTable value={list} loading={loading} footer={
            <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
        } emptyMessage={`${TradeTypeNameEnum[historyType]} Not Found ...`}  responsiveLayout="scroll">
                <Column field="username" header="username" body={(data)=> checkIsNull(data , 'username') } ></Column>
                <Column field="phone" header="phone" body={(data)=> checkIsNull(data , 'phone') } ></Column>
                <Column field="email" header="email" body={(data)=> checkIsNull(data , 'email') } ></Column>
                <Column field="mailconfirm" header="mail confirm" body={(data)=> data.mailconfirm ? 'true':'false' } ></Column>
                <Column field="date" header="Date" body={DateBody}  ></Column>
                <Column field="permission" header="Options"  body={OptionsBodyTemplate} ></Column>
            </DataTable>
    }

    const DetailsDialog = () => {
        const { showDialog,selectedHistory } = useStore()
        return <Dialog header="User Info" visible={showDialog} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialog:false})}>
                {selectedHistory &&
                <div className="show-details-controller">
                  <div className="child">
                      <span>email : {checkIsNull(selectedHistory,'email')}</span>
                  </div>
                  <div className="child">
                      <span>Username : {checkIsNull(selectedHistory,'username')}</span>
                  </div>
                </div>
            }
            </Dialog>
    }
    const tradeTypeMenu = Object.keys(TradeTypeNameEnum).splice(0,5).map((key) => ({ value:Number(key) , label: TradeTypeNameEnum[Number(key)] }));
    const nav = useNavigate();
    return (
        <>
            <DetailsDialog />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>{TradeTypeNameEnum[historyType]} List Controller</h2>

                                <div className="col-6 col-md-4 col-lg-2">
                                    <Dropdown value={historyType} optionLabel="label" optionValue='value'  options={tradeTypeMenu} onChange={(e)=> {
                                        console.log('push', `${TradeTypeUrlEnum[e.value]}${id}`);
                                        nav(`${TradeTypeAppUrlEnum[e.value]}`.replace(':id', String(id)) , {replace:true})
                                    }} />
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

export default React.memo(SpotHistoryScreen);