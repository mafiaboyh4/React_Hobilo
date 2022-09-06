import React from 'react'

import event1 from '../../assets/imgs/event1.jpg';
import event2 from '../../assets/imgs/event2.jpg';
import event3 from '../../assets/imgs/event3.jpg';

const FullCalenderComponent = () => {
    return <>
     <h3>This Week Events</h3>
     <div className="row">
        <div className="col-12 mb-2">
            <img className='cp' width={'100%'} height={'400px'} style={{objectFit:'cover'}} src={event1}/>
        </div>
        <div className="col-lg-6 mt-2">
            <img className='cp' width={'100%'} src={event2}/>
        </div>
        <div className="col-lg-6 mt-2">
            <img className='cp' width={'100%'} src={event3}/>
        </div>
     </div>

    </>
};
export default React.memo(FullCalenderComponent)