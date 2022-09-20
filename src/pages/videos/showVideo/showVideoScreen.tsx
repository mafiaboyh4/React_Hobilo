import React, { useState } from 'react';
import './showVideoStyle.scss';
import Profile from '../../../assets/imgs/youtube/hfLogo.jpg'
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import {data} from '../listVideos.json'
import { GetImageVideosTemplate } from '../list1/list1Screen';

const ShowVideoScreen = () => {
   
    return (
        <>
            <div className="show-video-controller">
                <div className="row">
                    <div className="col-12 px-1">
                        <div className="streaming-controller">
                            <div className="screen-controller">
                                <div className="video-controller">
                                    <div className="head">
                                        <div className="controller">
                                            <div className="child">
                                                <img src={Profile} />
                                            </div>
                                            <div className="child ml-3">
                                                <span className='f-18'>HFM <i className="pi pi-check-circle red f-15"></i></span>
                                                <span className='f-13 gray'>Hot Forex Market</span>
                                            </div>
                                        </div>
                                        <div className="controller">
                                            <div className="child">
                                                <Button label='Live' icon="fa-solid fa-fire" className='p-button-danger' />
                                            </div>
                                        </div>
                                    </div>
                                    <video autoPlay={true} loop={false} controls className="video-container clipped" src="http://egiby.net/video1.mp4" />
                                    <div className="footer-controller">
                                        <div className="child">
                                            <div className="controller">
                                                <span className="title">
                                                    HotForex is Evolving into HFM!
                                                </span>
                                            </div>
                                            <div className="controller">
                                                <div className="detail-box">
                                                    <i className="pi pi-eye"></i>
                                                    <span className="gray f-14">120</span>
                                                </div>
                                                <div className="detail-box">
                                                    <i className={PrimeIcons.COMMENTS}></i>
                                                    <span className="gray f-14">51</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="child">
                                            <div className="controller align-items-center">
                                                <i className={`${PrimeIcons.THUMBS_UP} gray f-20 cp`}></i>
                                                <div className="px-2"></div>
                                                <i className={`${PrimeIcons.THUMBS_DOWN} gray f-20 cp`}></i>
                                                <div className="px-2"></div>
                                                <i className={`${PrimeIcons.COMMENT} gray f-20 cp`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description-controller">
                                    <div className="controller">
                                            <div className="child">
                                                <img src={Profile} />
                                            </div>
                                            <div className="child ml-3">
                                                <span className='f-18'>HFM <i className="pi pi-check-circle red f-15"></i></span>
                                                <p className='f-15 gray'>A dead cat bounce is a continuation pattern consisting of temporary small and short-lived rebounds within a prolonged period of downside. Find out how to identify them, which markets they are most commonly found in and more in our new educational video!</p>
                                            </div>
                                    </div>
                                    <div className="controller mt-2">
                                        <div className="detail-box mx-1">
                                            <span className="gray f-14">#Forex</span>
                                        </div>
                                        <div className="detail-box mx-1">
                                            <span className="gray f-14">#HFM</span>
                                        </div>
                                        <div className="detail-box mx-1">
                                            <span className="gray f-14">#Evolving</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-1"></div>
                            <div className="recommendation-controller">
                                <span className="f-20 fw-b mb-3">Recommendation</span>
                                <div className="list-controller">
                                    {data.map((item , index) => (
                                        <div className="item cp">
                                            <div className="child">
                                                <GetImageVideosTemplate index={index + 1} />
                                            </div>
                                            <div className="child">
                                                <span className="f-16 fw-b">{item.label}</span>
                                                <span className="f-13">{item.owner}</span>
                                                <span className='mt-2 f-13 gray'>{item.time} - {item.views} views</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    );
}
 
export default React.memo(ShowVideoScreen);