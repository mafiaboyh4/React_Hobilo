import React from 'react';
import { GetImageVideosTemplate } from '../../../pages/videos/list1/list1Screen';
import { useNavigate } from 'react-router-dom';
import './VideoItemStyle.scss'

const VideoItemComponent = ({item , className = '' , index} : {item:DataInterface , className?:string , index:number}) => {
    const nav = useNavigate();
    return ( 
        <div className={`item-main-controller-alt ${className}`}>
            <div onClick={()=> nav(`/showVideo/${index}`)}>
            <GetImageVideosTemplate index={index + 1} />
            </div>
            <div className="text-controller">
                <div className="controller">
                    <div className="pl-2 pt-2">
                        <span className='f-14 name' onClick={()=> nav('/teacherProfile')}>{item.owner}</span>
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
     );
}
 
export default VideoItemComponent;

interface DataInterface {
    label: string;
    time: string;
    views: string;
    date: string;
    owner: string;
}