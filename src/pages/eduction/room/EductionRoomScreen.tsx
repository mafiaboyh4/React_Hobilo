import React, { useState } from 'react';
import { Tag } from 'primereact/tag';
import { LiveTv , PersonRounded , FavoriteRounded , CommentRounded } from '@material-ui/icons';
import './roomStyle.scss'
import Profile from '../../../assets/imgs/profile.png'
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import EducationChatComponent from './EducationChatComponent';
import EductionQuiz from './EductionQuiz';
import EducationRankingComponent from './EducationRankingComponent';
import event2 from '../../../assets/imgs/event2.jpg';
import event3 from '../../../assets/imgs/event3.jpg';


const EductionRoomScreen = () => {

   const [isLike, setIsLike] = useState<boolean | null>(null);
  
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
                                            <div className="icon-controller">
                                                <LiveTv />
                                                <span className="f-14 fw-b  pt-1">Live</span>
                                            </div>
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
                                        <div className="controller v-center">
                                            <PersonRounded className='green' />
                                            <span className='ml-1'>2 k</span>
                                        </div>
                                        <div className="controller v-center">
                                            <FavoriteRounded className='red' />
                                            <span className='ml-1'>180</span>
                                        </div>
                                        <div className="controller v-center">
                                            <CommentRounded className='gray' />
                                            <span className='ml-1'>32</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="video-controller">
                                    <video autoPlay={true} loop={false} controls className="video-container clipped" src="http://185.202.113.250/video/live.mp4" />
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
                    <div className="col-lg-3 px-1">
                      <EducationRankingComponent isMax={false} />
                    </div>
                    <div className="col-lg-6 px-1">
                        <img className='cp mt-1' style={{maxHeight:'300px',objectFit:'cover' , borderRadius:'8px'}} width={'100%'} src={event2}/>
                        <img className='cp mt-2' style={{maxHeight:'308px',objectFit:'cover' , borderRadius:'8px'}} width={'100%'} src={event3}/>
                    </div>
                </div> 
            </div> 
        </>
    );
};

export default React.memo(EductionRoomScreen);