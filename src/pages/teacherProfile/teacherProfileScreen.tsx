import React , {useState} from 'react';
import './teacherProfileStyle.scss';
import Profile from '../../assets/imgs/users/user8.jpg';
import CheckIcon  from '../../assets/imgs/checkIcon.png';
import backLight from '../../assets/imgs/profiles/background.jpg';
import Switch from "react-switch";
import {data} from '../videos/listVideos.json'
import VideoItemComponent from './../../components/global/videoItem/VideoItemComponent';

const TeacherProfileScreen = () => {
    const [notification, setNotification] = useState(true);
    const BellIcon = () => <i className="pi pi-bell pt-2 pl-2 f-18 fw-b mr-3 d-block"></i>

    return ( 
        <div className="main-teacher-profile-controller">
            <div className="details-controller">
                <div className="head-details">
                    <div className="back-light">
                        <img src={backLight} width="100%" />
                    </div>
                    <div className="detail">
                        <div className="controller">
                                <div className="profile" >
                                    <img  src={Profile} />
                                </div>
                            <div className="child">
                                <span className="f-23 fw-b">sara watson <img width={'20px'} src={CheckIcon} /> </span>
                                <span className="f-14 gray">sarawats@gmail.com</span>
                            </div>

                        </div>
                        <div className="controller justify-content-end">
                            <div className="child">
                                <Switch height={36} width={76} onChange={(bool)=> setNotification(bool)} checked={notification} checkedIcon={<BellIcon/>} onColor={'#eb382f'} />
                                <div className="history-controller">
                                    <div className="item">
                                    <div className="controller">
                                            <i className="pi pi-user"></i><span>1.2k Subscriber</span>
                                    </div>
                                        <div className="controller">
                                            <i className="pi pi-video"></i><span>23 Videos</span>
                                        </div>
                                        <div className="controller">
                                            <i className="pi pi-eye"></i><span>2.5k Views</span>
                                        </div>
                                        <div className="controller">
                                            <i className="pi pi-thumbs-up"></i><span>500 Like</span>
                                        </div>
                                        <div className="controller mb-0">
                                            <i className="pi pi-thumbs-down"></i><span>53 DisLike</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-me-controller">
                    <div className="side">
                        <span className="f-14 gray">About Me</span>
                        <br />
                        <p className='about-me-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br />
                             Deleniti labore a recusandae eligendi libero corrupti, voluptatem tempore expedita eos quo tempora pariatur ipsam repellendus unde magni,<br /> quisquam aut aliquid dignissimos.</p>
                        <div className="row ">
                            <div className="col-12 mb-2">
                                <span className="f-20 fw-b">My Videos</span>
                            </div>
                            {data.map((item , index)=> (
                                <div className="col-lg-4 col-xl-3 cp">
                                    <VideoItemComponent index={index} item={item} className={'mw-100'} />
                                </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
              
            </div>
           
        </div>
     );
}
 
export default React.memo(TeacherProfileScreen);