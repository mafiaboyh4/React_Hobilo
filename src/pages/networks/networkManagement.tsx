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
import FormUpdateNetworkComponent from './FormUpdateNetworkComponent';
import { toast } from 'react-toastify';
import FormSetMainWallet from './FormSetMainWallet';

const NetworkManagementScreen = () => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        list: any[];
        selectedNetwork?: any;
        showDialog: boolean;
        showUpdateDialog: boolean;
        isCreate: boolean;
        setMainNetworkDialog: boolean;
        mainWallet:string;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        list:[],
        selectedNetwork:null,
        showDialog:false,
        showUpdateDialog:false,
        isCreate:false,
        setMainNetworkDialog:false,
        mainWallet:'wdipawjdjawipjdpawjdpjawdawpo'
    }));

    const UpdateNetworkDialog = () => {
        const { showUpdateDialog , isCreate ,selectedNetwork } = useStore()
        // const onUpdate = useStore((state:any) =>  state.onUpdate);

        return <Dialog header={isCreate ? 'Create Network':"Update Network"} visible={showUpdateDialog} style={{ width: '100%' , maxWidth:'992px' }}  onHide={() => useStore.setState({showUpdateDialog:false})}>
                {(!isCreate && selectedNetwork || isCreate) &&
                <>
                 <FormUpdateNetworkComponent network={isCreate ? {}:selectedNetwork} onSubmit={(data:Object)=> {
                    console.log(data);
                    toast.success(isCreate ? 'Created':'Updated');
                    useStore.setState({showUpdateDialog:false})
                    // onUpdate(data);
                 }}/>
                </>
            }
            </Dialog>
    }

    const SetMainNetwork = () => {
        const {mainWallet , setMainNetworkDialog} = useStore();
        return <Dialog header='Update Main Wallet' visible={setMainNetworkDialog} style={{ width: '100%' , maxWidth:'992px' }}  onHide={() => useStore.setState({setMainNetworkDialog:false})}>
        {
        <>
         <FormSetMainWallet mainWallet={mainWallet} onSubmit={(data:Object)=> {
            console.log(data);
            toast.success('Updated');
            useStore.setState({setMainNetworkDialog:false})
            // onUpdate(data);
         }}/>
        </>
    }
    </Dialog>
    }

    const getAllNetwork =  async (page:number) => {
        const list = [
            {
                name:'Erc20',
                id:1,
                RpcLink:'http://koalaexchangeRcpLink.com',
                wsLink:'ws://koalaexchangeRcpLink.com',
                symbol:'ETH',
                status:true
            },
            {
                name:'Bep20',
                id:2,
                RpcLink:'http://koalaexchangeRcpLink.com',
                wsLink:'ws://koalaexchangeRcpLink.com',
                symbol:'BNB',
                status:true
            },
            {
                name:'Trc20',
                id:3,
                RpcLink:'http://koalaexchangeRcpLink.com',
                wsLink:'ws://koalaexchangeRcpLink.com',
                symbol:'TRX',
                status:true
            },
        ];

        useStore.setState({list:list})
    }
   
    const OptionsBodyTemplate = (rowData:any) => {
        const { list } = useStore();
        const status = rowData.status;
        return (
            <>
                <div className="d-flex flex-row">
                <Button onClick={()=> {
                        useStore.setState({selectedNetwork:rowData, isCreate:false ,showUpdateDialog:true})
                    }} tooltip="Change Network"  icon="pi pi-pencil" className='p-button-rounded p-button-warning p-button-text mx-1'  tooltipOptions={{  position: 'bottom' }}  />

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

    const NetworkNameTemplate = (rowData:any) => {

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
        getAllNetwork(event.page)
    }

    useEffect(() => {
        getAllNetwork(1);
    }, [])



    const  DataView = () => {
        const { list,loading  , total , page } = useStore()
        return <DataTable value={list} loading={loading} footer={
            <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
        } emptyMessage={`Network Not Found ...`}  responsiveLayout="scroll">
                <Column field="name" header="name" body={NetworkNameTemplate} ></Column>
                <Column field="RpcLink" header="Rpc link" body={(data)=> checkIsNull(data , 'RpcLink') } ></Column>
                <Column field="wsLink" header="Ws Link" body={(data)=> checkIsNull(data , 'wsLink') } ></Column>
                <Column field="symbol" header="Symbol" body={(data)=> checkIsNull(data , 'wsLink') } ></Column>
                <Column field="permission" header="Options"  body={OptionsBodyTemplate} ></Column>
            </DataTable>
    }

    const DetailsDialog = () => {
        const { showDialog,selectedNetwork } = useStore()
        return <Dialog header="User Info" visible={showDialog} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialog:false})}>
                {selectedNetwork &&
                <div className="show-details-controller">
                  <div className="child">
                      <span>email : {checkIsNull(selectedNetwork,'email')}</span>
                  </div>
                  <div className="child">
                      <span>Username : {checkIsNull(selectedNetwork,'username')}</span>
                  </div>
                </div>
            }
            </Dialog>
    }

    return (
        <>
            <UpdateNetworkDialog/>
            <DetailsDialog />
            <SetMainNetwork />
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>Network List Controller</h2>
                                <div className="d-flex flex-row">
                                    <Button  tooltip="add Network" onClick={()=> {
                                        useStore.setState({isCreate:true, showUpdateDialog:true})
                                    }} icon="pi pi-plus" className='p-button-rounded p-button-help mr-2'  tooltipOptions={{  position: 'top' }}  />
                                    <Button onClick={()=> {
                                        useStore.setState({setMainNetworkDialog:true})
                                    }} tooltip="Set Main Wallet to Network"  icon="pi pi-sliders-v" className='p-button-rounded p-button-info'  tooltipOptions={{  position: 'top' }}  />
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

export default React.memo(NetworkManagementScreen);