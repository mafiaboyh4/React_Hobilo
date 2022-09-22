import React , {useState} from 'react';
import './teachersStyle.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import {data} from './teachersList.json';
import user1 from '../../assets/imgs/users/user2.jpg';
import user2 from '../../assets/imgs/users/user3.jpg';
import user3 from '../../assets/imgs/users/user4.jpg';
import user4 from '../../assets/imgs/users/user5.jpg';
import user5 from '../../assets/imgs/users/user6.jpg';
import user6 from '../../assets/imgs/users/user7.jpg';
import { GetImageVideosTemplate } from '../videos/list1/list1Screen';
import { useNavigate } from 'react-router-dom';

const GetUserProfile = (key:number) => {
    switch (key) {
        case 1:
            return user1;
        case 2:
            return user2;
        case 3:
            return user3;
        case 4:
            return user4;
        case 5:
            return user5;
        case 6:
            return user6;
    }
}


const Teachers = () => {
    const nav = useNavigate();
    const [teacherName, setTeacherName] = useState(data[0].owner)
    return ( 
        <div className="main-teacher-controller">
            <div className="header">
                <span className="fw-b f-18">Teachers</span>
                <div className="swiper-controller">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={12}
                        loop
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation>
                            {data.map((item , index)=> (
                                <SwiperSlide key={index+1} style={{maxWidth:'fit-content'}}>
                                    <div className={`swiper-item cp`} onClick={()=> setTeacherName(item.owner)}>
                                        <div className={` img-controller ${item.owner == teacherName && 'border-red'}`}>
                                            <img  src={GetUserProfile(index+1)} />
                                        </div>
                                    <span className='mt-2'>{item.owner}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
            <div className="main-list-controller">
                <span className="fw-b f-18 w-100 mb-3">Recommended</span>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation>
                        {data.map((item , index)=> (
                            <SwiperSlide key={index+1} style={{maxWidth:'fit-content'}}>
                                <div key={index+1} className={`${index % 2 == 0 && 'justify-content-end'} `} >
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
            <div className="main-list-controller border-0">
                <span className="fw-b f-18 w-100 mb-3">{teacherName} Videos</span>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation>
                        {data.map((item , index)=> (
                            <SwiperSlide key={index+1} style={{maxWidth:'fit-content'}}>
                                <div key={index+1} className={`${index % 2 == 0 && 'justify-content-end'} `} >
                                    <div className="item-main-controller-alt cp">
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
                                </div>
                            </SwiperSlide>
                        )).reverse()}
                    </Swiper>
            </div>
        </div>
     );
}
 
export default React.memo(Teachers);