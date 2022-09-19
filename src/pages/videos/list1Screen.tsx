import React, { useState } from 'react';
import { Swiper, SwiperSlide , useSwiper  } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import './list1Style.scss';
import event1 from '../../assets/imgs/event4.png';
import event2 from '../../assets/imgs/event5.jpg';
import Teachers from '../../assets/imgs/teachers.jpg';

import { Button } from 'primereact/button';
import SwiperCore, { Autoplay } from 'swiper';
import post1 from '../../assets/imgs/youtube/1.webp';
import post2 from '../../assets/imgs/youtube/2.webp';
import post3 from '../../assets/imgs/youtube/3.webp';
import post4 from '../../assets/imgs/youtube/4.webp';
import post5 from '../../assets/imgs/youtube/5.webp';
import post6 from '../../assets/imgs/youtube/6.webp';
import post7 from '../../assets/imgs/youtube/7.webp';
import post8 from '../../assets/imgs/youtube/8.webp';
import {data} from './listVideos.json';
import { SelectButton } from 'primereact/selectbutton';
import { signal } from '@preact/signals-react';

const ListVideos1Screen = () => {
   
    SwiperCore.use([Autoplay]);

    const GetImageTemplate = ({index} : {index:number}) => {
        let image ;
        let objectPosition = 'right';
        switch (index) {
            case 1:
                image = post1;
                objectPosition = 'left'
                break;
            case 2:
                image = post2;
                objectPosition = 'center'
                break;
            case 3:
                image = post3;
                break;
            case 4:
                image = post4;
                break;
            case 5:
                image = post5;
                break;
            case 6:
                image = post6;
                break;
            case 7:
                image = post7;
                break;
            case 8:
                image = post8;
                break;
        }
        return <img src={image} style={{objectPosition:objectPosition}} />
    }

    // const selectFormat = signal('left');
    const [selectFormat, setSelectFormat] = useState('Center')
    const justifyOptions = [
        {icon: 'pi pi pi-bars', value: 'left'},
        {icon: 'pi pi pi-th-large', value: 'Center'},
    ];
    const justifyTemplate = (option:ListTemplateTypeInterface) => {
        return <i className={option.icon}></i>;
    }
    const HeadListTemplate = () => {

        return (
            <>
                <span className='title'>Hot Videos </span>
                <SelectButton value={selectFormat} options={justifyOptions} onChange={(e) => setSelectFormat( e.value)} optionValue="value"  itemTemplate={justifyTemplate} optionLabel="value" />
            </>
        )
    }
    return ( 
        <>
          <div className="video-list-1-main-controller">
            <div className="row">
            <div className="head-controller">
                <div className="col-8">
                    <div style={{cursor: "grab" , height:"259px"}}>
                        <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 3000 }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        >
                            <SwiperSlide>
                                <img src={event1} width="100%"  height={'255px'}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={event2} width="100%" height={'255px'} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="col-4">
                    <div className="live-now">
                        <img src={Teachers} />
                        <div className="text-controller">
                            <span className='title'>Live NOW !</span>
                            <Button label='join Now'  />
                        </div>
                    </div>
                </div>
            </div>
                <div className="col-12">
                    <div className="list-controller row">
                    <div className="head ">
                        <HeadListTemplate />
                    </div>
                        {data.map((item , index)=> (
                            <div key={index+1} className="item-main-controller col-lg-4 col-xl-3 cp">
                                <div className="banner-controller">
                                    <GetImageTemplate index={index + 1} />
                                </div>
                                <div className="details-controller">
                                    <div className="child">
                                        <GetImageTemplate index={index + 1} />
                                    </div>
                                    <div className="child">
                                        <span className='title'>{item.label}</span>
                                        <div className="time-controller">
                                            <span className="owner">{item.owner}</span>
                                            <div>
                                                <span>{item.views} views</span>
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default React.memo(ListVideos1Screen);


interface ListTemplateTypeInterface {
    icon:string;
    value:string
}