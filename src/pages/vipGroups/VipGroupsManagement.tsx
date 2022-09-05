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
import FormInsertMainWallet from './FormInsertGroups';

const VipGroupsManagementScreen = () => {
    const { getRequest } = useApi();

    interface StoreInterface {
        loading: boolean;
        page: number;
        total: number;
        list: any[];
        selectedGroup?: any;
        showDialog: boolean;
        isCreate:boolean;
        defaultGroup:number;
    };

    const useStore = create<StoreInterface>((set, get) => ({
        loading: false,
        page:0,
        total:0,
        list:[],
        selectedGroup:null,
        showDialog:false,
        isCreate:false,
        filterNetwork:null,
        defaultGroup:1
    }));


    const getAllGroup =  async (page:number) => {
        const list = [
            {
                id:1,
                gName:'group 1',
                sellCP:'1.24',
                buyCP:'0.10',
                swapCP:'0.10',
                minWithdraw:'0.10',
                status:true
            },
            {
                id:2,
                gName:'group 2',
                sellCP:'5',
                buyCP:'0.10',
                swapCP:'0.23',
                minWithdraw:'1.1',
                status:true
            },
            {
                id:3,
                gName:'group 3',
                sellCP:'4.1',
                buyCP:'2.4',
                swapCP:'0.50',
                minWithdraw:'0.10',
                status:true
            },
        ];
        
      
        useStore.setState({list:list })
    }
   
    const OptionsBodyTemplate = (rowData:any) => {
        const { list , defaultGroup } = useStore();
        const status = rowData.status;
        const isDefault = defaultGroup == rowData.id ;
        return (
            <>  
                <div className="d-flex flex-row">
                <Button onClick={()=> {
                    useStore.setState({defaultGroup:rowData.id})
                }} label={isDefault ? 'Default Group':'Set Default'} className={isDefault ? 'p-button-outlined p-button-success':'p-button-outlined p-button-secondary'}  />
                    <Button onClick={()=> {
                        useStore.setState({selectedGroup:rowData , isCreate:false , showDialog:true})
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

    const pageChange = (event:any) => {
        if (event.page == useStore.getState().page) return;
        useStore.setState({page:event.first})
        getAllGroup(event.page)
    }

    useEffect(() => {
        getAllGroup(1);
    }, [])

    const PresentTemplate = (data:string) => {
        return <span className="red">{data} %</span>
    }

    const  DataView = () => {
        const { list,loading  , total , page  } = useStore();

        return (
            <>
                <DataTable value={list} loading={loading} footer={
                    <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
                } emptyMessage={`Group Not Found ...`}  responsiveLayout="scroll">
                    <Column field="gName" header="gName" body={(data)=> checkIsNull(data , 'gName') } ></Column>
                    <Column field="sellCP" header="Sales commission percentage" body={(data)=> PresentTemplate(data.sellCP) } ></Column>
                    <Column field="buyCP" header="Purchase fee percentage" body={(data)=> PresentTemplate(data.buyCP) } ></Column>
                    <Column field="swapCP" header="Swap fee percentage" body={(data)=> PresentTemplate(data.swapCP) } ></Column>
                    <Column field="minWithdraw" header="Min Withdraw" body={(data)=> checkIsNull(data , 'minWithdraw') } ></Column>
                    <Column field="permission" header="Options"  body={OptionsBodyTemplate} ></Column>
                </DataTable>
            </>
        )

    }

    const CreateOrUpdateDialog = () => {
        const { showDialog ,isCreate, selectedGroup } = useStore()
        return <Dialog header={isCreate ? 'Create New Group' : 'Update Group'} visible={showDialog} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialog:false})}>
               <FormInsertMainWallet data={isCreate ? {}:selectedGroup}  onSubmit={()=> {
                toast.success(isCreate ? 'Created':'Updated')
                 useStore.setState({showDialog:false});
               }}/>
        </Dialog>
    }

    return (
        <>
            <CreateOrUpdateDialog />
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>Vip Groups List Controller</h2>
                                <Button style={{minWidth:'35px' , height:'35px'}}  tooltip="add Group" onClick={()=> {
                                    useStore.setState({ showDialog:true , isCreate:true})
                                }} icon="pi pi-plus" className='p-button-rounded p-button-help mr-2'  tooltipOptions={{  position: 'top' }}  />
                            </div>
                            <DataView />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
   
};

export default React.memo(VipGroupsManagementScreen);