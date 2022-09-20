import React from 'react';
import HFMLogo from '../../assets/imgs/HFMIcon.png';
const HFMPoint = ({label , point} : {label:string , point:number}) => {
    return (
        <>
            <div className="d-flex flex-row align-items-center">
                <span className='mr-1' style={label ? {color:'#4caf50'}:{}}>{label && label + ' : +' } {point} </span>
                <span className='f-13 mr-1 ' style={label ? {color:'#4caf50'}:{}}>{label ? 'KP' : 'HFM Point'}</span>
                {label &&
                 <img style={{
                        width:'23px' ,
                        position:'relative' ,
                        bottom: '2px',
                        height:'23px' ,
                        background:'var(--bg)' ,
                        borderRadius:'50%'
                    }}
                    src={HFMLogo} />
                }
            </div>
        
        </>
    )
};

export default React.memo(HFMPoint)