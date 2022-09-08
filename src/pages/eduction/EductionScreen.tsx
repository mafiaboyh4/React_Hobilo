import React, { useRef } from 'react';
import './eductionStyle.scss'
import koalaIcon from '../../assets/imgs/koalaIcon.png';
import { Button } from 'primereact/button';
import FullCalenderComponent from './fullCalenderComponent';
import { Menu } from 'primereact/menu';
import { PrimeIcons } from 'primereact/api';
import { useNavigate } from 'react-router-dom';

const EductionScreen = () => {

    const nav = useNavigate();
    const menu = useRef(null);
    const roomId = useRef(1);

    const events = [
        {id:1,time:'10:00 - 11:00' , color:'#735bf3' , title:'Meeting With 10 Client' , description:'How To Trade Basicity' },
        {id:2,time:'05:40 - 13:20' , color:'#51cffd' , title:'NFT and Market place' , description:'create and deploy workshop' },
        {id:3,time:'9:00 - 13:00' , color:'#fdc95f' , title:'Eth v2' , description:'what is Eth v2 and how work it is' }
    ];
    
    const items = [
        {
            items: [
                {
                    label: 'see More',
                    icon: 'pi pi-eye',
                     command: () => {
                        nav('/room/'+roomId.current);
                    }
                },
                {
                    label: 'report',
                    icon: PrimeIcons.FLAG_FILL,
                    command: () => {
                    }
                }
            ]
        },
    ];

    return (
        <>
            <div className="eduction-controller">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="today-events">
                        <div>
                            <div className="head">
                                <div className="child">
                                    <img src={koalaIcon} />
                                </div>
                                <div className="child">
                                    <span>Koala Eduction</span>
                                    <span className="f-14 gray">Learn and Make Mony</span>
                                </div>
                            </div>
                            <div className="event-controller">
                                <h3>Today Events</h3>
                                <p className="f-14 gray">Don't miss scheduled Events</p>
                                    {events.map((item)=> 
                                        <div className="event-item">
                                            <div className="time">
                                                <div>
                                                    <i className="pi pi-circle-fill" style={{color:item.color}}></i>
                                                    <span className='ml-2 f-14'>{item.time}</span>
                                                </div>
                                                <Menu model={items} popup ref={menu} id="popup_menu" />
                                                <i  onClick={(event) => {
                                                    //@ts-ignore
                                                    menu.current.toggle(event);
                                                    roomId.current = item.id;
                                                }} aria-controls="popup_menu" aria-haspopup className=" f-20 pi pi-ellipsis-h cp"></i>
                                            </div>
                                            <div className='title mt-2'>
                                                <span>{item.title} </span>
                                                
                                            </div>
                                            <div className="description">
                                            <span className='mt-1 f-14 gray'>{item.description}</span>
                                            <div className="pints">
                                                    <span className='ml-2'>+300 Points</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                        <div className="banner-live-now">
                            <div className='controller'>
                                <div className="child">
                                    <div className="icon-controller">
                                        <i className="pi pi-video"></i>
                                    </div>
                                </div>
                                <div className="child">
                                    <span className='f-20'>Live now</span>
                                    <span className="f-14">Crypto News and analyze Market</span>
                                </div>
                            </div>
                            <Button label='Join Now' onClick={()=> {
                                 nav('/room/'+roomId.current);
                            }}/>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-8 mt-3 mt-lg-0">
                    <FullCalenderComponent />
                  </div>
                </div>
            </div>
        </>
    )
   
};

export default React.memo(EductionScreen);