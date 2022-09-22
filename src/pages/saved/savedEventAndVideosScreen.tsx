import React from 'react';
import './savedEventAndVideosStyle.scss';
import VideoItemComponent from './../../components/global/videoItem/VideoItemComponent';
import {data} from '../teachers/teachersList.json';

const SavedEventAndVideos = ({type} : {type:number}) => {
    return ( 
      <div className="saved-main-controller">
        <h4 className='w-100 px-2'>Saved {type == 1 ? 'Video' : 'Event'}</h4>
         

        {type == 1 ? <>
        {data.map((item , index) => (
            <div className="col-lg-4 col-xl-3 px-2">
                <VideoItemComponent className='mw-100' index={index} item={item} />
            </div>
        ))}
        </>: <>{data.map((item , index) => (
            <div className="col-lg-4 col-xl-3 px-2">
             <VideoItemComponent className='mw-100' index={index} item={item} />
         </div>
        )).reverse()}</>}
      </div>
     );
}
 
export default SavedEventAndVideos;