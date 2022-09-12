import React from 'react';
import KoalaLogo from '../../assets/imgs/koalaIcon.png';
const KoalaPoint = ({label , point} : {label:string , point:number}) => {
    return (
        <>
            <div className="d-flex flex-row align-items-center">
                <span className='mr-1' style={label ? {color:'#4caf50'}:{}}>{label && label + ' : +' } {point} </span>
                <span className='f-13 mr-1 ' style={label ? {color:'#4caf50'}:{}}>{label ? 'KP' : 'Koala Point'}</span>
                {label &&
                 <img style={{
                        width:'23px' ,
                        position:'relative' ,
                        bottom: '2px',
                        height:'23px' ,
                        background:'var(--bg)' ,
                        borderRadius:'50%'
                    }}
                    src={KoalaLogo} />
                }
            </div>
        
        </>
    )
};

export default React.memo(KoalaPoint)