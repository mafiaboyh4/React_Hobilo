import { Button } from 'primereact/button';
import React , {useEffect, useRef, useState} from 'react';
import './walletsStyle.scss'
import { toast } from 'react-toastify';
import { InputNumber } from 'primereact/inputnumber';
import { PrimeIcons } from 'primereact/api';
import koalaIcon from '../../assets/imgs/koalaIcon.png';
import { OverlayPanel } from 'primereact/overlaypanel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import QRCode from "react-qr-code";
import { Currency } from './../../components/contract/globalService';

const WalletManagementScreen = () => {
    const op = useRef<OverlayPanel>(null);
    const [fromSelected, setFromSelected] = useState('USDT');
    const [toSelected, setToSelected] = useState('Koala');
    const coinsPanelFrom = useRef<OverlayPanel>(null);
    const [fromValue, setFromValue] = useState<number>(0);
    const [toValue, setToValue] = useState<number>(0);
    const [calculateValue, setCalculateValue] = useState(0)

    const coins = [
        {symbol: 'USDT' , name:'Tether' , price:'0.998' , balance:'300' , class1:'tether-1' , class2:'tether-2'},
        {symbol: 'BTC' , name:'Bitcoin' , price:'20.132.0' , balance:'0' , class1:'' , class2:'secondary'},
        {symbol: 'ETH' , name:'Ethereum' , price:'1.565.45' , balance:'0' , class1:'eth-1' , class2:'eth-2'},
    ];

    const swapHistory = [
        {time: '2022/9/5'  , amount:10 , from:'USDT' , to:'Koala' , price:'0.998' , status:1},
        {time: '2022/9/4'  , amount:16 , from:'USDT' , to:'Koala' , price:'0.998' , status:2},
        {time: '2022/9/3'  , amount:0.62 , from:'ETH' , to:'Koala' , price:'0.998' , status:3},
        {time: '2022/9/5'  , amount:10 , from:'USDT' , to:'Koala' , price:'0.998' , status:1},
        {time: '2022/9/4'  , amount:16 , from:'USDT' , to:'Koala' , price:'0.998' , status:2},

    ]

    const switchCoin = () => {
        const data = {
            from: fromSelected,
            to: toSelected
        }

        setFromSelected(data.to);
        setToSelected(data.from);
    }

    const onSubmit = () => {
        toast.info('its Preview')
    }

    const StatusTemplate = (rowData:any) => {
        let classN = '';
        let name = '';
        switch (rowData.status) {
            case 1:
                name = 'Susses';
                classN = 'green';
                break;
            case 2:
                name = 'Pending';
                classN = 'yellow';
                break;
            case 3:
                name = 'Failed';
                classN = 'red';
                break;
        
            default:
                break;
        }
        return <span className={classN}>{name}</span>
    }

    const Calculate = (isFrom:boolean)  => {

        let selected = '' ;
        const symbol = isFrom ? toSelected : fromSelected

        const price = coins.find((item) => item.symbol == symbol)?.price
        console.log('price' , price);
        const value = isFrom ? fromValue : toValue;
        const result = Number(price) * (value > 0 ? value : 1)
        console.log('res' , result);
        if (fromSelected == 'Koala') {
            setToValue(Number(price) * fromValue)
        } else {
            setFromValue(Number(price) * toValue)
        };
        setCalculateValue(result ? result : 0);
    }

    useEffect(() => {
        Calculate(true);
    }, [fromSelected]);

    useEffect(() => {
        Calculate(false);
    }, [toSelected])
    

    return (
        <>
        <OverlayPanel
            ref={op}
            id="overlay_panel"
            dismissable
            style={{ width: "300px" }}
            className="overlaypanel-demo"
          > 

            <div className="qr-code-controller">
                <span>Scan Qr</span>
                <QRCode value="dwjkapojdfipawfipaipwjfiawhf" />
            </div>
          </OverlayPanel>
            <div className=" wallet-controller">
                <div className="row">
                  {coins.map((item) => 
                    <div className="col-md-6 col-xl-4 mt-2 mt-xl-0">
                        <div className="box">
                            <div className="head">
                                <div className="controller start">
                                    <img src={`https://alinance.com/statics/${item.symbol}.svg`} alt="?" />
                                    <span className='f-24 fw-b'>{item.symbol}<span className="gray ml-2 f-15 fw-n">{item.name}</span></span>
                                </div>
                                <div className="controller mt-3 ">
                                    <div>
                                        <span className='f-14 gray'>price : </span><span className='f-16'>{item.price} USDT</span> 
                                    </div>
                                    <div>
                                        <span className='f-14 gray'>Balance : </span><span className='f-16'> {item.balance} USDT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="controller mt-3">
                                <div className="flex-1 pr-1">
                                    <Button label='Deposit'
                                     onClick={(e) => op.current?.toggle(e)}
                                     aria-haspopup
                                     aria-controls="overlay_panel"
                                    className={item.class1} />
                                </div>
                                <div className="flex-1 pl-1">
                                    <Button className={item.class2} label='Withdraw' />
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
                    <div className="col-xl-4 mt-2 mt-xl-0">
                        <div className="swap-controller">
                            <div className="swap-panel">
                                <div className="swap-form from">
                                    <div className="controller">
                                        <span className="gary f-13">From</span>
                                         <Button className="p-button-text p-0" >
                                            <span  className="f-13 p-color">Max</span>
                                         </Button>
                                    </div>
                                    <div className="controller">
                                    <OverlayPanel ref={coinsPanelFrom} dismissable style={{minWidth:'350px'}}>
                                        <div className="coin-list-swap">
                                            {coins.map((item)=> 
                                                <div key={item.name} className="item cp" onClick={()=> {
                                                    
                                                    if (fromSelected == 'Koala') setToSelected(item.symbol);
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
                                            if (fromSelected == 'Koala') return
                                            // @ts-ignore
                                            coinsPanelFrom.current.toggle(e)
                                        }} >
                                                <div className="selected-coin">
                                                        <div className="d-flex align-items-center"  >
                                                            <img src={fromSelected == 'Koala' ? koalaIcon : `https://alinance.com/statics/${fromSelected.toUpperCase()}.svg`} alt="?" style={fromSelected == 'Koala' ? {backgroundColor:'#fff'}:{}} />
                                                            <span className="mx-2 center f-18 pt-1">{fromSelected}</span>
                                                        </div>
                                                        {fromSelected !== 'Koala' && <i className="pi pi-angle-down gary"></i>}
                                                    <div className="line"></div>
                                                </div>
                                            </Button>
                                             <div className="input-controller">
                                                <InputNumber onInput={()=> Calculate(true)} value={fromValue} onValueChange={(e) => setFromValue(Number(e.value))} min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                    <div  className="controller px-0 justify-content-end">
                                        <span className="f-14 gary">Available : 
                                            <span className="p-color f-14"> 0 </span> {fromSelected} 
                                            <span
                                             onClick={(e) => op.current?.toggle(e)}
                                             aria-haspopup
                                             aria-controls="overlay_panel"
                                            className="p-color f-14 cp ml-2" >Deposit</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="middle">
                                    <Button onClick={switchCoin} icon={PrimeIcons.SORT_ALT}  className='p-color ' />
                                </div>
                                <div className="swap-form to">
                                    <div className="controller">
                                        <span className="gary f-13">To</span>
                                    </div>
                                    <div className="controller">
                                        <div className="choose-box">
                                        <Button className="p-button-text p-button-plain p-0"  onClick={(e) => {
                                            if (toSelected == 'Koala') return
                                            // @ts-ignore
                                            coinsPanelFrom.current.toggle(e)
                                        }} >
                                                <div className="selected-coin">
                                                        <div className="d-flex align-items-center"  >
                                                            <img src={toSelected == 'Koala' ? koalaIcon : `http://185.202.113.250/icons/64x64//${toSelected.toUpperCase()}.png`} alt="?"  style={toSelected == 'Koala' ? {backgroundColor:'#fff'}:{}} />
                                                            <span className="mx-2 center f-18 pt-1">{toSelected}</span>
                                                        </div>
                                                        {toSelected !== 'Koala' && <i className="pi pi-angle-down gary"></i>}
                                                    <div className="line"></div>
                                                </div>
                                            </Button>
                                             <div className="input-controller">
                                                <InputNumber onInput={()=> Calculate(false)} value={toValue} onValueChange={(e) => setToValue(Number(e.value))} min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                    <div className="controller px-0 justify-content-start">
                                        <span  className="f-14 gary">Reference Price: <span className="text">{fromSelected == 'Koala' ? Currency(fromValue): Currency(toValue)} Koala Coin = {calculateValue}</span>  </span>
                                    </div>
                                </div>
                                <div className="swap-button">
                                    <Button label="swap" onClick={onSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mt-2 mt-xl-0">
                    <div className="swap-history-controller">
                            <div className="head">
                                <span className="f-16">Last 5 Records <i className="pi pi-replay green ml-2"></i></span>
                            </div>
                            <DataTable value={swapHistory} responsiveLayout="stack" breakpoint="960px">
                                <Column field="time" header="Time"></Column>
                                <Column field="amount" header="Amount"></Column>
                                <Column field="from" header="From"></Column>
                                <Column field="to" header="To"></Column>
                                <Column field="price" header="Price"></Column>
                                <Column field="status" header="Status"  body={StatusTemplate}></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
   
};

export default React.memo(WalletManagementScreen);