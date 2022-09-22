import React, { useState , useEffect } from 'react';
import { Tag } from 'primereact/tag';
import './roomStyle.scss'
import Profile from '../../../assets/imgs/profile.png'
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import EducationChatComponent from './EducationChatComponent';
import EductionQuiz from './EductionQuiz';
import EducationRankingComponent from './EducationRankingComponent';
import { useParams } from 'react-router-dom';
import { GetImageVideosTemplate } from '../../videos/list1/list1Screen';
import { useNavigate } from 'react-router-dom';
import {data} from '../../videos/listVideos.json';
import Countdown from 'react-countdown-simple';

const EductionRoomScreen = () => {
   
    const {id} = useParams();

    // expired , live , soon
    return (
        <>
            <div className="room-controller">

                <div className="row">
                    <div className="col-12 px-1">
                        <div className="streaming-controller">
                            <div className="screen-controller">
                                <div className="head">
                                    <div className="side">
                                        <div className="child ">
                                            {(Number(id) == 1 || Number(id) == 2) && 
                                                <div className="icon-controller">
                                                    <LiveSvg/>
                                                    <span className="f-14 fw-b  pt-1">Live</span>
                                                </div>
                                            }
                                           
                                        </div>
                                        <div className="child">
                                            <div className="controller end mb-2">
                                                <span className='f-19'>How Make NFt And Deploy part 1</span>
                                                <span className='ml-2'>+ 200 point</span>
                                            </div>
                                            <div className="controller">
                                                <Tag className="mr-2" value="#Crypto" ></Tag>
                                                <Tag className="mr-2" value="#NFT" ></Tag>
                                                <Tag value="#Market place" ></Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side v-center">
                                    {(Number(id) == 1 || Number(id) == 2) && 
                                       <>
                                        <div className="controller v-center">
                                            <i className="fa-solid fa-user green"></i>
                                            <span className='ml-1'>2 k</span>
                                        </div>
                                        <div className="controller v-center">
                                            <i className="fa-solid fa-heart red"></i>
                                            <span className='ml-1'>180</span>
                                        </div>
                                        <div className="controller v-center">
                                            <i className="fa-solid fa-comment gray"></i>
                                            <span className='ml-1'>32</span>
                                        </div>
                                       </>
                                    }

                                    </div>
                                </div>
                                <div className="video-controller">
                                    {Number(id) == 1 ?
                                    <video autoPlay={true} loop={false} controls className="video-container clipped"
                                        src="http://185.202.113.250/video/live.mp4" />

                                    :
                                        <div className='expired-controller'>
                                            <div className="head-text">
                                                <span className="f-25 fw-b">{Number(id) == 2 ? 'Event is Finished !' : 'It will be held soon'} </span>
                                                <p className='gray f-14'>{Number(id) == 2 ? 'Our recommended videos':'Time left until the start of the event'}</p>
                                            </div>
                                            <div className="bg">
                                            </div>
                                            <div className="controller">
                                                { Number(id) == 2 ?  <ExpiredListTemplate start={0}  end={4} /> : <SoonTemplate />}
                                            </div>
                                        </div>
                                    
                                    }
                                </div>
                                <div className="footer-controller">
                                    <div className="side">
                                        <div className="child">
                                            <img className='profile' src={Profile} />
                                        </div>
                                        <div className="child ml-2">
                                            <span className='f-18 '>Durban Area</span>
                                            <div>
                                                <Tag className="mr-2" value="english" ></Tag>
                                                <Tag className="mr-2" value="Master" ></Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side">
                                    {(Number(id) == 1 || Number(id) == 2) && 
                                    <>
                                           <div className="child time end">
                                            <span className='f-16 fw-b'>2:54:8 <i className={`${PrimeIcons.CLOCK} f-14`}></i></span>
                                            <span className='f-16 gray'>-0:00:13 <i className={`${PrimeIcons.BELL} f-14`}></i></span>
                                        </div>
                                        <div className="child mx-2">
                                            <Button className='join' label='Join' />
                                        </div>
                                        <div className="child ml-2">
                                            <Button className='join' label='Follow' />
                                        </div>
                                        <div className="child ml-2">
                                            <div className="rate-controller">
                                                <Button className='p-button-text  h-100' >
                                                    <i className={`${PrimeIcons.THUMBS_UP} green mr-2 f-20`}></i>
                                                </Button> 
                                                <Button className='p-button-text h-100'>
                                                    <i className={`${PrimeIcons.THUMBS_DOWN} red mr-2 f-20`}></i>
                                                </Button> 

                                            </div>
                                        </div>
                                    </>
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="px-1"></div>
                            <div className="chat-controller">
                                <EducationChatComponent />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 px-1">
                      <EductionQuiz />
                    </div>    
                    <div className="col-lg-3 col-xl-4 px-2">
                      <EducationRankingComponent isMax={false} />
                    </div>
                    <div className="col-lg-6 col-xl-5 px-1">
                        <div className="banner-controller">
                            <img className='cp mt-1' style={{objectFit:'cover' , borderRadius:'8px'}} width={'100%'} src={`http://egiby.net/event2.jpg`}/>
                            <img className='cp mt-2' style={{objectFit:'cover' , borderRadius:'8px'}} width={'100%'} src={`http://egiby.net/event3.jpg`}/>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    );
};

export default React.memo(EductionRoomScreen);

const LiveSvg = () => (

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 24 24"  xmlSpace="preserve">

    <g id="bounding_box">
        <rect style={{fill:"transparent"}} width="1" height="1"/>
    </g>
    <g id="design">
        <g>
            <path  style={{fill:'#FFF'}} d="M16.04,16.13c-0.17,0-0.34-0.06-0.48-0.17c-0.32-0.26-0.36-0.74-0.1-1.06c0.33-0.4,0.6-0.87,0.78-1.39
                c0.17-0.48,0.25-0.98,0.25-1.51s-0.09-1.03-0.25-1.51c-0.18-0.52-0.45-0.99-0.78-1.39c-0.26-0.32-0.22-0.79,0.1-1.06
                c0.32-0.26,0.79-0.22,1.06,0.1c0.45,0.54,0.8,1.16,1.04,1.85C17.89,10.63,18,11.31,18,12c0,0.69-0.11,1.37-0.34,2.01
                c-0.24,0.69-0.59,1.31-1.04,1.85C16.47,16.04,16.25,16.13,16.04,16.13z"/>
            <path  style={{fill:'#FFF'}} d="M19.06,18.86c-0.17,0-0.34-0.06-0.48-0.17c-0.32-0.27-0.36-0.74-0.09-1.06c0.46-0.54,0.85-1.16,1.16-1.82
                c0.56-1.16,0.86-2.48,0.86-3.81s-0.3-2.64-0.86-3.8c-0.32-0.67-0.71-1.28-1.16-1.83c-0.27-0.32-0.22-0.79,0.09-1.06
                c0.32-0.27,0.79-0.22,1.06,0.09c0.54,0.65,1,1.37,1.36,2.14c0.66,1.35,1,2.89,1,4.45c0,1.55-0.35,3.1-1.01,4.46
                c-0.36,0.77-0.82,1.49-1.36,2.14C19.48,18.77,19.27,18.86,19.06,18.86z"/>
            <path  style={{fill:'#FFF'}} d="M7.96,16.13c-0.21,0-0.43-0.09-0.58-0.27c-0.45-0.54-0.8-1.16-1.04-1.85C6.11,13.37,6,12.69,6,12
                c0-0.69,0.11-1.37,0.34-2.01c0.24-0.69,0.59-1.31,1.04-1.85c0.26-0.32,0.74-0.36,1.06-0.1C8.76,8.31,8.8,8.78,8.54,9.1
                c-0.33,0.4-0.6,0.87-0.78,1.39C7.59,10.97,7.5,11.48,7.5,12s0.09,1.03,0.25,1.51c0.18,0.52,0.45,0.99,0.78,1.39
                c0.26,0.32,0.22,0.79-0.1,1.06C8.3,16.07,8.13,16.13,7.96,16.13z"/>
            <path  style={{fill:'#FFF'}} d="M4.94,18.86c-0.21,0-0.43-0.09-0.58-0.27c-0.54-0.64-1-1.36-1.36-2.14C2.35,15.1,2,13.55,2,12
                c0-1.56,0.35-3.1,1.01-4.46c0.36-0.77,0.82-1.49,1.36-2.14c0.27-0.32,0.74-0.36,1.06-0.09c0.32,0.27,0.36,0.74,0.09,1.06
                C5.06,6.92,4.67,7.53,4.36,8.19C3.8,9.36,3.5,10.67,3.5,12s0.3,2.64,0.86,3.8c0.32,0.67,0.71,1.28,1.16,1.83
                c0.27,0.32,0.22,0.79-0.09,1.06C5.28,18.8,5.11,18.86,4.94,18.86z"/>
            <path  style={{fill:'#FFF'}} d="M12,14c-0.27,0-0.52-0.05-0.77-0.15c-0.24-0.1-0.46-0.25-0.64-0.44c-0.1-0.09-0.18-0.19-0.26-0.3
                c-0.07-0.11-0.13-0.22-0.18-0.34c-0.05-0.12-0.09-0.25-0.11-0.38C10.01,12.26,10,12.13,10,12c0-0.13,0.01-0.26,0.04-0.39
                c0.02-0.13,0.06-0.25,0.11-0.37c0.05-0.13,0.11-0.24,0.19-0.35c0.07-0.11,0.15-0.21,0.25-0.31c0.09-0.09,0.19-0.17,0.3-0.24
                c0.11-0.07,0.22-0.14,0.34-0.19c0.13-0.05,0.25-0.08,0.38-0.11c0.65-0.13,1.34,0.08,1.8,0.54C13.79,10.96,14,11.48,14,12
                c0,0.13-0.01,0.26-0.04,0.39c-0.02,0.13-0.06,0.26-0.11,0.38c-0.05,0.12-0.11,0.23-0.19,0.34c-0.07,0.11-0.15,0.21-0.25,0.3
                c-0.18,0.19-0.4,0.34-0.64,0.44C12.52,13.95,12.27,14,12,14z"/>
        </g>
    </g>
    </svg>
);

const ExpiredListTemplate = ({start , end} : {start:number , end:number}) => {
    const nav = useNavigate();
    return (
        <>
        {data.slice(start,end).map((item , index)=> (
            <div key={index+1} className={`${index % 2 == 0 && 'justify-content-end'} d-flex col-6`} >
                <div className="item-main-controller-alt cp">
                    <div onClick={()=> nav(`/showVideo/${index}`)}>
                    <GetImageVideosTemplate index={index + 1} />
                    </div>
                    <div className="text-controller">
                        <div className="controller">
                            <div className="pl-2 pt-2">
                                <span onClick={()=> nav('/teacherProfile')} className='f-14 name'>{item.owner}</span>
                            </div>
                            <div className="profile" onClick={()=> nav('/teacherProfile')}>
                                <GetImageVideosTemplate index={index + 1} />
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="controller title">
                                <span className="f-18">{item.label}</span>
                            </div>
                            <div className="controller">
                                <span className="f-14 gray">{item.views} views - {item.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
};

const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 34)
).toISOString();

const renderer = ({ days, hours, minutes, seconds } : { days:any, hours:any, minutes:any, seconds:any }) =>
  <h2 className=' fw-b mt-2'>{days}:{hours}:{minutes}:{seconds}</h2>

const SoonTemplate = () => {
    return <Countdown targetDate={oneHour} renderer={renderer}/>
}