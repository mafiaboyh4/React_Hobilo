import React, { useEffect, useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmPopup } from 'primereact/confirmpopup';
import useApi from '../../api/useApi';
import { UsersGetModel } from '../../models/userModel';
import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
import { checkIsNull } from './../../components/global/checkIsNull';
import { DateBody } from '../../components/global/DateBody';
import create from 'zustand'
import { InputText } from 'primereact/inputtext';
import FormUpdateUser from './formUpdateUser';
import { Tooltip } from 'primereact/tooltip';
import { SlideMenu } from 'primereact/slidemenu';
import { useNavigate } from 'react-router-dom';

const UsersController = () => {
    interface StoreInterface {
        postDataLoading: boolean;
        page: number;
        total: number;
        list: UsersGetModel[];
        selectedUser?: any;
        showDialog: boolean;
        showDialogUserBalance: boolean;
        showUpdateDialog: boolean;
        menuItems:any[];
        onSearch:Function
    }
    
    const useStore = create<StoreInterface>((set, get) => ({
        postDataLoading: false,
        page:0,
        total:0,
        list:[],
        selectedUser:null,
        showDialog:false,
        showDialogUserBalance:false,
        showUpdateDialog:false,
        menuItems:[{}],
        onSearch:(value:string) => {
            const {postDataLoading} = get();

            if ((value.length > 0  && value.length <= 3) || postDataLoading) return 
            set({postDataLoading:false})

            const res =  getRequest(`users/search?limit=10&page=1&search=${value}`);
            res.then((result:any) => {
                set({list:result.list , total:result.count , postDataLoading:false})
            }).finally(()=>{
                set({ postDataLoading:false})
            })
        },
        onUpdate:(data:any) => {
            const {list} = get();
            const req = postRequest(`users/user/${data.id}` , data);
            set({postDataLoading:true,showUpdateDialog:false});
            req.then((res:any)=> {
                console.log(res);
                let userList = list;
                const index = userList.findIndex(item => item._id == data.id);
                userList[index].accept = data.active;
                userList[index].level = data.level;
                userList[index].banned = data.banned;
                userList[index].passwordwrong = data.passwordwrong;
                
                set({list:userList})
            }).finally(()=> set({postDataLoading:false }))
        }
    }));

    const { getRequest , postRequest } = useApi();
    const menu = useRef<any>(null);
    const nav = useNavigate();

    const initMenu = (event:any , id:string ) => {
        useStore.setState({menuItems:[
            {
                label: 'History',
                items: [
                    {
                        label: 'spot',
                        command: () => {
                            nav('/spotHistory/'+ id)
                        }
                    },
                    {
                        label: 'Futures',
                        command: () => {
                            nav('/futuresHistory/'+ id)
                        }
                    },  
                    {
                        separator:true
                    }, 
                ]
            },
            {
                label: 'Balance',
                items: [
                    {
                        label: 'spot',
                        command: () => {
                            useStore.setState({showDialogUserBalance : true })
                        }
                    },
                    {
                        label: 'Futures',
                        command: () => {
                            useStore.setState({showDialogUserBalance : true })
                        }
                    },
                    {
                        separator:true
                    },
                ]
            },
            {
                label: 'orders',
                items: [
                    {
                        label: 'Spot pending',
                        command: () => {
                            nav('/spotPending/'+ id)
                        }
                    },
                    {
                        label: 'Futures pending',
                        command: () => {
                            nav('/futuresPending/'+ id)
                        }
                    },   
                    {
                        label: 'Futures Position',
                        command: () => {
                            nav('/futuresPosition/'+ id)
                        }
                    },
                    {
                        separator:true
                    },
                ]
            },
           
        ]});

        menu.current.toggle(event)
    }

    const OptionsBodyTemplate = (rowData:UsersGetModel) => {
        const {menuItems} = useStore()
        return (
            <>
                <div className="d-flex flex-row">
                    <SlideMenu model={menuItems} viewportHeight={210} menuWidth={188} popup ref={menu} id="popup_menu" />
                    <Button icon='pi pi-ellipsis-v'  onClick={(event) => {
                        initMenu(event , rowData._id);
                        useStore.setState({selectedUser:rowData })
                    }} aria-controls="popup_menu" aria-haspopup className='p-button-rounded p-button-plain p-button-text' tooltip="More" tooltipOptions={{position: 'top'}} />
                    <Button icon="pi pi-eye" onClick={() => {
                        useStore.setState({selectedUser:rowData , showDialog : true})
                    }} className="p-button-rounded  mx-2 p-button-text" aria-label="Notification" />
                    <Button icon='pi pi-pencil' className="p-button-rounded p-button-warning p-button-text" onClick={()=> 
                      useStore.setState({selectedUser:rowData , showUpdateDialog : true})} />
                    <Button icon={rowData.banned ? 'pi pi-lock' : 'pi pi-lock-open'}  className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                </div>
            </>
        );
    }

    const kycStatus = (rowData:UsersGetModel) => {
        const statusColor = (key:string) => {
            switch (key) {
                case 'pending':
                    return 'yellow';
                case 'error':
                    return 'red';
                case 'not set':
                default:
                    return 'gray';
            }
        } 

        return (
            <>
                <span className={statusColor(rowData.kycstatus)}>{rowData.kycstatus}</span>
            </>
        )
    }
   
    const getAllUsers =  async (page:number) => {
        const resultPromise = getRequest(`users/list?page=${page}&limit=10`);
        useStore.setState({postDataLoading:true})
    
        resultPromise.then((data:any) => {
            useStore.setState({postDataLoading:false, list:data.list , total:data.total});
          }).finally(() => {
            useStore.setState({postDataLoading:false})
          });
    }
    
    const pageChange = (event:any) => {
        if (event.page == useStore.getState().page) return;
        useStore.setState({page:event.first})
        getAllUsers(event.page)
    }

    useEffect(() => {
        getAllUsers(1);
    }, [])

    const  DataView = () => {
        const { list,postDataLoading , total , page } = useStore()
        return <DataTable value={list} loading={postDataLoading} footer={
            <Paginator first={page} rows={10} totalRecords={total}  onPageChange={pageChange}></Paginator>
        } emptyMessage='Users Not Found ... ' responsiveLayout="scroll">
                <Column field="username" header="username" body={(data)=> checkIsNull(data , 'username') } ></Column>
                <Column field="phone" header="phone" body={(data)=> checkIsNull(data , 'phone') } ></Column>
                <Column field="email" header="email" body={(data)=> checkIsNull(data , 'email') } ></Column>
                <Column field="kycstatus" header="kyc status" body={kycStatus} ></Column>
                <Column field="mailconfirm" header="mail confirm" body={(data)=> data.mailconfirm ? 'true':'false' } ></Column>
                <Column field="date" header="Date" body={DateBody}  ></Column>
                <Column field="permission" header="Options"  body={OptionsBodyTemplate} ></Column>
            </DataTable>
    }

    const DetailsDialog = () => {
        const { showDialog,selectedUser } = useStore()
        return <Dialog header="User Info" visible={showDialog} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialog:false})}>
                {selectedUser &&
                <div className="show-details-controller">
                  <div className="child">
                      <span>email : {checkIsNull(selectedUser,'email')}</span>
                  </div>
                  <div className="child">
                      <span>Username : {checkIsNull(selectedUser,'username')}</span>
                  </div>
                  <div className="child">
                      <span>phone : {checkIsNull(selectedUser,'phone')}</span>
                  </div>
                  <div className="child">
                      <span>country code : {checkIsNull(selectedUser,'countrycode')}</span>
                  </div>
                  <div className="child">
                      <span>totp Status : {String(selectedUser.istotp)}</span>
                  </div>
                  <div className="child">
                      <span>totp : {checkIsNull(selectedUser,'totp')}</span>
                  </div>
                  <div className="child">
                      <span>kyc Status : {checkIsNull(selectedUser,'kycstatus')}</span>
                  </div>
                  <div className="child">
                      <span>level : {checkIsNull(selectedUser,'level')}</span>
                  </div>
                  <div className="child">
                      <span>password Wrong : {checkIsNull(selectedUser,'passwordwrong')}</span>
                  </div>
                  <div className="child">
                      <span>mail Confirm : {String(selectedUser.mailconfirm)}</span>
                  </div>
                  <div className="child">
                      <span>Date : {DateBody(selectedUser)}</span>
                  </div>
                  <div className="child">
                      <span>banned : {String(selectedUser.banned)}</span>
                  </div>
                </div>
            }
            </Dialog>
    }

    const DialogUserBalance = () => {
        const { showDialogUserBalance , selectedUser } = useStore()
        const [userBalance, setUserBalance] = useState(0);
        const [loading, setLoading] = useState(false);
        if (selectedUser) {
            const req = getRequest(`users/balance/spot/${selectedUser._id}`)
            req.then((res)=> {
                console.log('balance ' , res);
                
            })
        }
        return <Dialog header="User Info" visible={showDialogUserBalance} style={{ width: '50vw' }}  onHide={() => useStore.setState({showDialogUserBalance:false})}>
             balance {userBalance}
        </Dialog>
    }

    const UpdateUserDialog = () => {
        const { showUpdateDialog,selectedUser } = useStore()
        const onUpdate = useStore((state:any) =>  state.onUpdate);

        return <Dialog header="Update User" visible={showUpdateDialog} style={{ width: '100%' , maxWidth:'992px' }}  onHide={() => useStore.setState({showUpdateDialog:false})}>
                {selectedUser &&
                <>
                 <FormUpdateUser user={selectedUser} onSubmit={(data:Object)=> {
                    console.log(data);
                    onUpdate(data);
                 }}/>
                </>
            }
            </Dialog>
    }
    
    const onSearch = useStore((state:any) =>  state.onSearch);

    return (
        <>
            <DetailsDialog />
            <UpdateUserDialog/>
            <DialogUserBalance/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3">
                            <div className="d-flex flex-row justify-content-between">
                                <h2>Users List Controller</h2>
                                <span className="p-input-icon-left d-flex align-items-center">
                                    <i className="pi pi-search" />
                                    <InputText  onChange={(e) => onSearch(e.target.value)} placeholder="Search" />
                                </span>
                            </div>
                            <ConfirmPopup />
                            <DataView />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default React.memo(UsersController);