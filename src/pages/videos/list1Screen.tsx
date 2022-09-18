import React from 'react';
import { Swiper, SwiperSlide , useSwiper  } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import './list1Style.scss';
import event1 from '../../assets/imgs/event4.png'
import { Button } from 'primereact/button';

const ListVideos1Screen = () => {
   

      
    return ( 
        <>
          <div className="video-list-1-main-controller">
            <div className="head-controller">
                <div className="col-8">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    >
                        <SwiperSlide>
                            <img src={event1} width="100%" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-4">
                    <div className="live-now">
                        <img src="https://static.hfmarkets.co.uk/assets/hfappnew/websites/main/images/homepage/analysts_new.jpg" />
                        <div className="text-controller">
                            <span>Live NOW !</span>
                            <Button label='join Now'  />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default React.memo(ListVideos1Screen);