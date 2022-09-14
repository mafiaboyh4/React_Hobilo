import React from 'react';
import './exchangeIntroStyle.scss';
import koalaIcon from '../../../assets/imgs/koalaIcon.png';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

export const ExchangeIntroScreen = () => {
    const baseUrl = 'http://demoexchange.koalablockchain.com/#/'
    return (
        <>
         <div className="exchange-main-intro-controller">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="box">
               
                <p className="f-14 gray">
                    THE New STANDARD DECENTRALIZED TRADING PLATFORM
                </p>
                <h1>Trade decentralized</h1>
                <div className="img-controller">
                    <img src={koalaIcon}  />
                <h1>Koala Exchange</h1>
                </div>
                <p className="gray f-14">
                High security, ease of trading and registration, deposit and withdrawal with the lowest fee are the features of Koala Exchange
                </p>
                <div className="btn-controller">
                    <Button onClick={()=> {
                        let x = document.createElement("a");
                        x.href = baseUrl;
                        x.target = "_blank"
                        x.click();
                    }} icon={PrimeIcons.HOME} iconPos={'right'} label="Home" className="p-button-rounded" />
                    <Button onClick={()=> {
                          let x = document.createElement("a");
                        x.href = baseUrl+'register';
                        x.target = "_blank"
                        x.click();
                    }} icon={PrimeIcons.SIGN_IN} iconPos={'right'} label="Sing Up" className="p-button-rounded" />
                </div>
            </div>
         </div>
        </>
    )
};