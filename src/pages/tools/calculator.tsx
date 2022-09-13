import React from 'react';
import './toolsStyle.scss'
const Calculator = () => {
    // const coins = [
    //     {symbol: 'USDT' , name:'Tether' , price:'0.998' , balance:'300' , class1:'tether-1' , class2:'tether-2'},
    //     {symbol: 'BTC' , name:'Bitcoin' , price:'20.132.0' , balance:'0' , class1:'' , class2:'secondary'},
    //     {symbol: 'ETH' , name:'Ethereum' , price:'1.565.45' , balance:'0' , class1:'eth-1' , class2:'eth-2'},
    // ];

    // const switchCoin = () => {
    //     const data = {
    //         from: fromSelected,
    //         to: toSelected
    //     }

    //     setFromSelected(data.to);
    //     setToSelected(data.from);
    // }
    return (
        <>
        {/* <div className="container">
            <div className="main-table-points-controller">
              <div className="col-12 mb-5">
                    <div className="head">
                        <h2>Koala Calculate</h2>
                        <span className="subtitle">
                         Calculate Koala Coin to Any Coin or Token
                        </span>
                    </div>
                    <div className="py-3"></div>
                    <div className="box">
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
                                                <InputNumber min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
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
                                                <InputNumber min={0}  minFractionDigits={1} maxFractionDigits={8}  placeholder="0.0" />
                                             </div>
                                        </div>
                                    </div>
                                    <div className="controller px-0 justify-content-start">
                                        <span  className="f-14 gary">Reference Price: <span className="text">1 Koala Coin = 1 USDT</span>  </span>
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
        </div> */}
        </>
    )
};

export default React.memo(Calculator)