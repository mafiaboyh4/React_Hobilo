import React , {useEffect, useState} from 'react';
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
import FormInsertMainWallet from './FormInsertMainWallet';

const WalletManagementScreen = () => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        list: any[];
        listAdmins: any[];
        selectedMarket?: any;
        showDialog: boolean;
        filterType:number;
        marketType: number;
        filterNetwork: string|null;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        list:[],
        listAdmins:[],
        selectedMarket:null,
        showDialog:false,
        marketType:1,
        filterType:1,
        filterNetwork:null
    }));


    const getAllWallets =  async (page:number) => {
        const list = [
            {
                username:'Username 1',
                id:1,
                walletAddress:'dawhgtjyscewwrw34rfrgb',
                network:'TRC20',
            },
            {
                username:'Username 2',
                id:2,
                walletAddress:'igriojsoifdoiehsohdose',
                network:'BEP20',
            },
            {
                username:'Username 3',
                id:3,
                walletAddress:'uysheofispoaehdfoahe9w894',
                network:'TRC20',
            },
        ];
        
        const listAdmin = [
            {
                id:1,
                walletAddress:'uysheofispoaehdfoahe9w894',
                createdBy:'admin 1',
                date:'2022/4/12',
                status:true
            },
            {
                id:2,
                walletAddress:'fawfawf32bxvesadaw',
                createdBy:'admin 2',
                date:'2022/1/13',
                status:true
            },
            {
                id:3,
                walletAddress:'fefaedf6aw15d1wa6tfr654e1',
                createdBy:'admin 3',
                date:'2022/7/25',
                status:true
            },
          
        ];
        useStore.setState({list:list , listAdmins:listAdmin})
    }
   
    const OptionsBodyTemplate = (rowData:any) => {
        const { listAdmins } = useStore();
        const status = rowData.status;
        return (
            <>
                <div className="d-flex flex-row">
                
                <Button onClick={()=> {
                       const eList = listAdmins;
                       const index = eList.findIndex(item => item.id == rowData.id);
                       eList[index].status = !eList[index].status;
                       useStore.setState({listAdmins:eList});
                }} tooltip={status ? 'DeActive':'Active'}  icon={`pi ${status ? 'pi-check-square' : 'pi-times-circle'}`} className={`p-button-rounded  p-button-text ${status ? 'green p-button-success':'red p-button-danger'}`}  tooltipOptions={{  position: 'bottom' }}  />
                </div>
            </>
        );
    }

    const pageChange = (event:any) => {
        if (event.page == useStore.getState().page) return;
        useStore.setState({page:event.first})
        getAllWallets(event.page)
    }

    useEffect(() => {
        getAllWallets(1);
    }, [])



    const  DataView = () => {
        const { list,loading  , total , page , marketType , filterNetwork , listAdmins} = useStore();
        

        const filterList = () => {
            return list.filter(item => item.network == filterNetwork)
        }
        

        return (
            <>
            { marketType == 1 ? <>
                <DataTable value={!filterNetwork ? list : filterList()} loading={loading} footer={
                        <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
                    } emptyMessage={`Market Not Found ...`}  responsiveLayout="scroll">
                        <Column field="id" header="id" body={(data)=> checkIsNull(data , 'id') } ></Column>
                        <Column field="username" header="username" body={(data)=> checkIsNull(data , 'username') } ></Column>
                        <Column field="walletAddress" header="walletAddress" body={(data)=> checkIsNull(data , 'walletAddress') } ></Column>
                        <Column field="network" header="network" body={(data)=> checkIsNull(data , 'network') } ></Column>
                    </DataTable>
                </>:<>
                    <DataTable value={listAdmins} loading={loading} footer={
                        <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
                    } emptyMessage={`Market Not Found ...`}  responsiveLayout="scroll">
                        <Column field="walletAddress" header="walletAddress" body={(data)=> checkIsNull(data , 'walletAddress') } ></Column>
                        <Column field="createdBy" header="createdBy" body={(data)=> checkIsNull(data , 'createdBy') } ></Column>
                        <Column field="date" header="date" body={(data)=> checkIsNull(data , 'date') } ></Column>
                        <Column field="status" header="status" body={OptionsBodyTemplate} ></Column>
                    </DataTable>
                </>
            }
            </>
        )

    }

    const DetailsDialog = () => {
        const { showDialog } = useStore()
        return <Dialog header="Create New Market" visible={showDialog} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialog:false})}>
               <FormInsertMainWallet  onSubmit={()=> {
                toast.success('Created')
                 useStore.setState({showDialog:false});
               }}/>
        </Dialog>
    }

    const MarketTypes = () => {
        const {marketType , filterNetwork} = useStore();
        const MarketTypes = [
            {label:'Users Wallet' , key:1},
            {label:'Admins Wallet' , key:2}
        ];

        const networks = [
            {label:'All' , key:null},
            {label:'ERC20' , key:'ERC20'},
            {label:'TRC20' , key:'TRC20'},
            {label:'BEP20' , key:'BEP20'}
        ];

        return (
            <>
            <Dropdown value={marketType} optionLabel="label" optionValue='key' options={MarketTypes} onChange={(e)=> {
                useStore.setState({marketType:e.value})
            }} />   

            {marketType == 2 ? <>
                <div className="mx-2"></div>
                <Button style={{minWidth:'35px' , height:'35px'}} tooltip="add Market" onClick={()=> {
                        useStore.setState({ showDialog:true})
                }} icon="pi pi-plus" className='p-button-rounded p-button-help mr-2' tooltipOptions={{  position: 'top' }} />
            
                </> : <> 
                    <div className="mx-2"></div>
                    <Dropdown value={filterNetwork} optionLabel="label" optionValue='key' options={networks} placeholder="Filter Network" onChange={(e)=> {
                        useStore.setState({ filterNetwork:e.value})
                    }} /> 
                </>}
            </>
        )
    }

    return (
        <>
            <DetailsDialog />
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>Wallet List Controller</h2>
                                <div className="d-flex flex-row">
                                    <MarketTypes />
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

export default React.memo(WalletManagementScreen);