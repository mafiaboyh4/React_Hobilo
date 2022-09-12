import React from 'react';
import './newsStyle.scss';
import newsPic1 from '../../../assets/imgs/news/1.jpg';
import newsPic2 from '../../../assets/imgs/news/2.jpg';
import newsPic3 from '../../../assets/imgs/news/3.jpg';

const NewsListComponent = () => {
    return (
        <>
        <div className="row">
            <div className="col-12 mb-2">
                <h3>Top stories</h3>
                <span className="f-18 gray" style={{position:'relative' , bottom:'.5rem'}}>News about Ethereum, Crypto</span>
            </div>
            <figure className="snip1216">
                <div className="image"><img src={newsPic1}
                        alt="sample69" /></div>
                <figcaption>
                    <div className="d-flex flex-row align-items-center mb-2">
                        <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                        </div>
                        <h4>Ethereum Merge May Not Be Immediately Deflationary, Crypto Trading Firm QCP Says</h4>
                    </div>
                    <p>
                    Ethereum's long-awaited technological overhaul, the Merge, is just a week away and holders of the blockchain's native token ether (ETH) may be feeling giddy because the upgrade is widely projected to establish ETH as a deflationary cryptocurrency – one with a depreciating supply – and bring more buyers to the market.
                    </p>
                </figcaption>
                <footer className='d-flex flex-row justify-content-end'>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-eye"></i>2,907</div>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-heart-fill"></i>623</div>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-comment"></i>23</div>
                </footer><a href="#"></a>
            </figure>
            <figure className="snip1216">
                <div className="image"><img src={newsPic2}
                        alt="sample68" /></div>
                <figcaption>
                <div className="d-flex flex-row align-items-center mb-2">
                    <div className="date">
                        <span className="day">17</span>
                        <span className="month">Nov</span>
                    </div>
                    <h4>Terra’s LUNA Token Gains 200% in a Few Hours Amid Speculative Frenzy</h4>
                </div>
                    <p>
                    The CoinDesk Market Index is first in a family of nine new price indices built around the media company's Digital Asset Classification Standard for categorizing bitcoin, ether and other digital assets.
                    </p>
                </figcaption>
                <footer className='d-flex flex-row justify-content-end'>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-eye"></i>1,870</div>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-heart-fill"></i>973</div>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-comment"></i>85</div>
                </footer><a href="#"></a>
            </figure>
            <figure className="snip1216">
                <div className="image">
                    <img src={newsPic3}
                        alt="sample58" /></div>
                <figcaption>
                    <div className="d-flex flex-row align-items-center mb-2">
                        <div className="date">
                            <span className="day">01</span>
                            <span className="month">Dec</span>
                        </div>
                    <h4>Ethereum blockchain set for ‘monumental’ overhaul</h4>
                    </div>
                    <p>
                    Cryptocurrency experts say the changeover, expected to take place between Tuesday and Thursday, will slash energy consumption by more than 99 percent.
                    </p>
                </figcaption>
                <footer className='d-flex flex-row justify-content-end'>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-eye"></i>928</div>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-heart-fill"></i>198</div>
                    <div className="d-flex flex-row align-items-center"><i className="pi pb-1 pi-comment"></i>23</div>
                </footer><a href="#"></a>
            </figure>
        </div>
        </>
    ) 
};

export default React.memo(NewsListComponent);