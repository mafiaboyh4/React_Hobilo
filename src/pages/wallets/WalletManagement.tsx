import { Button } from 'primereact/button';
import React , {useEffect, useState} from 'react';
import './walletsStyle.scss'
import { toast } from 'react-toastify';
import { InputNumber } from 'primereact/inputnumber';
import { PrimeIcons } from 'primereact/api';

const WalletManagementScreen = () => {

    const [fromSelected, setFromSelected] = useState('USDT');
    const [toSelected, setToSelected] = useState('Koala');
    const switchCoin = () => {

    }

    const onSubmit = () => {
        toast.info('its Preview')
    }
    return (
        <>
            <div className=" wallet-controller">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                            <div className="head">
                                <div className="controller start">
                                    <img src="http://185.202.113.250/icons/64x64/USDT.png" alt="?" />
                                    <span className='f-24 fw-b'>USDT<span className="gray ml-2 f-15 fw-n">Tether</span></span>
                                </div>
                                <div className="controller mt-3 ">
                                    <div>
                                        <span className='f-14 gray'>price : </span><span className='f-16'>0.998</span> 
                                    </div>
                                    <div>
                                        <span className='f-14 gray'>Balance : </span><span className='f-16'> 12 USDT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="controller mt-3">
                                <div className="flex-1 pr-1">
                                    <Button label='Deposit' className='tether-1' />
                                </div>
                                <div className="flex-1 pl-1">
                                    <Button className='tether-2' label='Withdraw' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                            <div className="head">
                                <div className="controller start">
                                    <img src="http://185.202.113.250/icons/64x64/BTC.png" alt="?" />
                                    <span className='f-24 fw-b'>BTC<span className="gray ml-2 f-15 fw-n">Bitcoin</span></span>
                                </div>
                                <div className="controller mt-3 ">
                                    <div>
                                        <span className='f-14 gray'>price : </span><span className='f-16'>20.132.0 USDT</span> 
                                    </div>
                                    <div>
                                        <span className='f-14 gray'>Balance : </span><span className='f-16'> 0 USDT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="controller mt-3">
                                <div className="flex-1 pr-1">
                                    <Button label='Deposit' />
                                </div>
                                <div className="flex-1 pl-1">
                                    <Button className='secondary' label='Withdraw' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                            <div className="head">
                                <div className="controller start">
                                    <img src="http://185.202.113.250/icons/64x64/ETH.png" alt="?" />
                                    <span className='f-24 fw-b'>ETH<span className="gray ml-2 f-15 fw-n">Ethereum</span></span>
                                </div>
                                <div className="controller mt-3 ">
                                    <div>
                                        <span className='f-14 gray'>price : </span><span className='f-16'>1.565.45 USDT</span> 
                                    </div>
                                    <div>
                                        <span className='f-14 gray'>Balance : </span><span className='f-16'> 0 USDT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="controller mt-3">
                                <div className="flex-1 pr-1">
                                    <Button label='Deposit' className='eth-1' />
                                </div>
                                <div className="flex-1 pl-1">
                                    <Button className='eth-2' label='Withdraw' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                    <div className="swap-controller">
                            <div className="swap-panel">
                                <div className="swap-form from">
                                    <div className="controller">
                                        <span className="gary f-13">From</span>
                                         <Button className="p-button-text p-0" >
                                            <span  className="f-13">Max</span>
                                         </Button>
                                    </div>
                                    <div className="controller">
                                        <div className="choose-box">
                                           
                                             <div className="input-controller">
                                                <InputNumber min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                    <div  className="controller px-0 justify-content-end">
                                        <span className="f-14 gary">Available : 
                                            <span className="blue f-14">s</span> {fromSelected} 
                                            <span className="blue f-14 cp" >Deposit</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="middle">
                                    <Button onClick={switchCoin} icon={PrimeIcons.SORT_ALT}  />
                                </div>
                                <div className="swap-form to">
                                    <div className="controller">
                                        <span className="gary f-13">To</span>
                                    </div>
                                    <div className="controller">
                                        <div className="choose-box">
                                             <div className="input-controller">
                                                <InputNumber min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                    <div className="controller px-0 justify-content-start">
                                        <span  className="f-14 gary">Reference Price: <span className="text">1 Koala Coin = 1 {fromSelected}</span>  </span>
                                    </div>
                                </div>
                                <div className="swap-button">
                                    <Button label="swap" onClick={onSubmit} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
   
};

export default React.memo(WalletManagementScreen);