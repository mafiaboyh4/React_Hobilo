import React from 'react';
import {data} from './brokersData.json';
import './brokersStyle.scss';
import etorostatic from '../../assets/imgs/brokers/etorostatic.png';
import eightcap from '../../assets/imgs/brokers/eightcap-review.png';
import tradestation from '../../assets/imgs/brokers/tradestation-review.png';
import Capital from '../../assets/imgs/brokers/Capital.png';
import Swissquote from '../../assets/imgs/brokers/Swissquote.jpg';
import award from '../../assets/imgs/award_badge.webp';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const RatingTemplate = ({percent , score}:{percent:number , score:number}) => {
    return (
        <>
            <div className="rating-panel-controller">
                <div className="colX"></div>
                <div className="colX"></div>
                <div className="colX"></div>
                <div className="colX"></div>
                <div className="line" style={{width:percent+'%'}}></div>
            </div>
            <span className="ml-2 fw-b">
                {score}
            </span>
        </>
    )
}

const BrokersScreen = () => {

    const brokers:BrokerInterface[] = structuredClone(data as BrokerInterface[]) 
    const nav = useNavigate();

    const BrokerNameTemplate = (rowData:BrokerInterface) => {
        let imgSrc;
        let link ;
        switch (rowData.index) {
            case 1:
                imgSrc = etorostatic;
                link = 'https://www.etoro.com'
                break;
            case 2:
                imgSrc = tradestation;
                link = 'https://www.tradestation.com/'
                break;
                case 3:
                imgSrc = eightcap;
                link = 'https://www.eightcap.com/en/'
                break;
            case 4:
                imgSrc = Swissquote;
                link = 'https://en.swissquote.com/'
                break;
            case 5:
                imgSrc = Capital;
                link = 'https://capital.com/'
                break;
        
            default:
                break;
        }
        return (
            <>
                <div className="controller column">
                    <img className='company-icon' src={imgSrc} />
                    <span className="mt-2">{rowData.name}</span>
                </div>
            </>
        )
    }

  


    return (
        <>
        <div className="main-brokers-list">
            <div className="">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="head">
                            <h2>Broker reviews</h2>
                            <span className="subtitle">
                                Find the right broker and invest on your own
                            </span>
                        </div>
                    </div>
                    {brokers.map((item , index) =>
                        <>
                            <div className="col-md-6 col-lg-4 mb-4 px-lg-4">
                                <div className="box">
                                    {index == 0 && 
                                    <div className="controller center">
                                        <img src={award} className="mr-2 " />
                                        <span>Best discount broker</span>
                                    </div>
                                }
                                    
                                    <div className="pt-4"></div>
                                    <BrokerNameTemplate {...item} />
                                    <div className="controller center pt-3">
                                        <RatingTemplate score={item.score} percent={(item.score * 20)} />
                                    </div>
                                    <div className="controller center py-3 px-3">
                                        <p className='text-center f-14 '>Recommended for traders looking for broad market access and a professional trading environment minimum Deposit {item.minimumDeposit} $</p>
                                    </div>
                                    <div className="btn-controller ">
                                        <Button label="Sing Up" onClick={()=> {
                                            let x = document.createElement("a");
                                            x.href = `${item.link}`;
                                            x.target = "_blank"
                                            x.click();
                                        }}  />

                                        <span>or <span className="review" onClick={()=> {
                                            nav(`/brokerDetails/${index}`)
                                        }}>Read Review</span> </span>
                                    </div>
                                </div>
                            </div>    
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    )
};


export default React.memo(BrokersScreen);

interface BrokerInterface {
    index:number;
	name: string;
	score: number;
	minimumDeposit: number;
	link: string;
	freeScore: number;
}
