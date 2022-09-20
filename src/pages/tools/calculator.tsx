import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { OverlayPanel } from 'primereact/overlaypanel';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import HFMIcon from '../../assets/imgs/HFMIcon.png';
import './toolsStyle.scss'
import { Currency } from './../../components/contract/globalService';

const Calculator = () => {
    const op = useRef<OverlayPanel>(null);
    const [fromSelected, setFromSelected] = useState('HFM');
    const [toSelected, setToSelected] = useState('USDT');
    const coinsPanelFrom = useRef<OverlayPanel>(null);
    const [fromValue, setFromValue] = useState<number>(0);
    const [toValue, setToValue] = useState<number>(0);

    const coins = [
        {symbol: 'USDT' , name:'Tether' , price:'0.998' , balance:'300' , class1:'tether-1' , class2:'tether-2'},
        {symbol: 'BTC' , name:'Bitcoin' , price:'20132' , balance:'0' , class1:'' , class2:'secondary'},
        {symbol: 'ETH' , name:'Ethereum' , price:'1565' , balance:'0' , class1:'eth-1' , class2:'eth-2'},
    ];

    const [calcValue, setCalcValue] = useState(0);
    const Calculate = (isFrom:boolean , sourceValue:number)  => {
        const price = coins.find((item) => item.symbol == toSelected)?.price ?? 1
        const value = isFrom ? fromValue : toValue;
        const result = Number(price) * (value > 0 ? value : 1)
        console.log('res' , result);
        if (isFrom) {
            setFromValue(sourceValue);
            const cal = sourceValue / Number(price)  ;
            setToValue(cal)
        } else {
            setToValue(sourceValue);
            const cal = sourceValue * Number(price) 
            setFromValue(cal)
        };
        setCalcValue(result ? result : 1);
    }

    useEffect(() => {
        Calculate(true , 0)
    }, [fromSelected]);

    useEffect(() => {
        Calculate(false , 0)
    }, [toSelected]);

    
    return (
        <>
        <div className="container">
            <div className="main-table-points-controller">
              <div className="col-12 mb-5">
                    <div className="head">
                        <h2>HFM Calculate</h2>
                        <span className="subtitle">
                         Calculate HFM Coin to Any Coin or Token
                        </span>
                    </div>
                    <div className="py-3"></div>

                    <div className="box mx-auto">
                    <div className="swap-controller">
                            <div className="swap-panel">
                                <div className="swap-form from">
                                    <div className="controller">
                                        <span className="gary f-13">From</span>
                                    </div>
                                    <div className="controller">
                                    <OverlayPanel ref={coinsPanelFrom} dismissable style={{minWidth:'350px'}}>
                                        <div className="coin-list-swap">
                                            {coins.map((item)=> 
                                                <div key={item.name} className="item cp" onClick={()=> {
                                                    
                                                    if (fromSelected == 'HFM') setToSelected(item.symbol);
                                                    else setFromSelected(item.symbol);
                                                    // @ts-ignore
                                                    coinsPanelFrom.current.hide();
                                                }}>
                                                    <img src={`https://alinance.com/statics/${item.symbol}.svg`} alt="?" />
                                                    <span>{item.name}</span>
                                                </div>
                                            )}
                                        </div>
                                    </OverlayPanel>
                                        <div className="choose-box">
                                        <Button className="p-button-text p-button-plain p-0" onClick={(e) => {
                                            if (fromSelected == 'HFM') return
                                            // @ts-ignore
                                            coinsPanelFrom.current.toggle(e)
                                        }} >
                                                <div className="selected-coin">
                                                        <div className="d-flex align-items-center"  >
                                                            <img src={fromSelected == 'HFM' ? HFMIcon : `https://alinance.com/statics/${fromSelected.toUpperCase()}.svg`} alt="?" style={fromSelected == 'HFM' ? {backgroundColor:'#fff'}:{}} />
                                                            <span className="mx-2 center f-18 pt-1">{fromSelected}</span>
                                                        </div>
                                                        {fromSelected !== 'HFM' && <i className="pi pi-angle-down gary"></i>}
                                                    <div className="line"></div>
                                                </div>
                                            </Button>
                                             <div className="input-controller">
                                                <InputNumber min={0} value={fromValue} onChange={(e)=> {
                                                    Calculate(true , Number(e.value));
                                                }}   minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="middle my-3">
                                    
                                    <span className='fw-b'>| |</span>
                                </div>
                                <div className="swap-form to">
                                    <div className="controller">
                                        <span className="gary f-13">To</span>
                                    </div>
                                    <div className="controller">
                                        <div className="choose-box">
                                        <Button className="p-button-text p-button-plain p-0"  onClick={(e) => {
                                            if (toSelected == 'HFM') return
                                            // @ts-ignore
                                            coinsPanelFrom.current.toggle(e)
                                        }} >
                                                <div className="selected-coin">
                                                        <div className="d-flex align-items-center"  >
                                                            <img src={toSelected == 'HFM' ? HFMIcon : `http://185.202.113.250/icons/64x64//${toSelected.toUpperCase()}.png`} alt="?"  style={toSelected == 'HFM' ? {backgroundColor:'#fff'}:{}} />
                                                            <span className="mx-2 center f-18 pt-1">{toSelected}</span>
                                                        </div>
                                                        {toSelected !== 'HFM' && <i className="pi pi-angle-down gary"></i>}
                                                    <div className="line"></div>
                                                </div>
                                            </Button>
                                             <div className="input-controller">
                                                <InputNumber value={toValue} onChange={(e)=> {
                                                    Calculate(false , Number(e.value));
                                                }}  min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                    <div className="controller px-0 justify-content-start">
                                        <span  className="f-14 gary">Reference Price: <span className="text">{Currency((fromValue).toFixed(5))} HFM Coin = {(Currency((toValue).toFixed(5)))} {toSelected}</span>  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default React.memo(Calculator)