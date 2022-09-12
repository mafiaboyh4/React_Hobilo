import { PrimeIcons } from 'primereact/api';
import React, { useEffect, useState } from 'react';
import './brokersDetailsStyle.scss';
import etorostatic from '../../../assets/imgs/brokers/etorostatic.png';
import eightcap from '../../../assets/imgs/brokers/eightcap-review.png';
import tradestation from '../../../assets/imgs/brokers/tradestation-review.png';
import Capital from '../../../assets/imgs/brokers/Capital.png';
import Swissquote from '../../../assets/imgs/brokers/Swissquote.jpg';
import award from '../../../assets/imgs/award_badge.webp';
import { RatingTemplate } from '../BrokersScreen';
import { Button } from 'primereact/button';
import YouTube from 'react-youtube';
import {data} from './brokerDetails.json';
import { useParams } from 'react-router-dom';
import  CommentsComponent  from '../../../components/global/comments/commentsComponent';
import NewsListComponent from '../../../components/global/news/newsListComponent';
import Tour from 'reactour'

const BrokerDetailsScreen = () => {

    const {id} = useParams()
    const {
        title,
        date,
        score,
        bestBroker,
        name,
        sub1,
        sub2,
        sub3,
        hint1,
        hint2,
        description1,
        description2,
        description3,
        description4,
        description5,
        disclaimer,
        disclaimer2,
        disclaimer3,
        recommended,
        recommended2,
        prosAndCons1,
        prosAndCons2,
        link,
        videoId,
    } = data[Number(id)];
    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    const [openTour, setOpenTour] = useState(false);
    const  _onReady = (event:any) => {
        event.target.pauseVideo();
    }

    const ProsAndCons = () => {
        const { pros, cons } = data[Number(id)];
        const list = cons.length > pros.length ? structuredClone(cons) : structuredClone(pros);
        
        return (
            <>
               <table className="bc_procon_table">
                        <tbody>
                        <tr>
                            <th className="pro_header">Pros</th>
                            <th className="con_header">Cons</th>
                        </tr>
                            {list.map((item:string , index:number) => 
                                <tr>
                                    <td className="pro_cell">
                                        <span className="pro_bullet">•</span> {pros[index]}
                                    </td>
                                    <td className="con_cell">
                                        <span className="con_bullet">•</span> {cons[index]}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                
            </>
        )
    }

    const BrokerImage = () => {
        let imgSrc;
        switch (Number(id)) {
            case 0:
                imgSrc = etorostatic;
                break;
            case 1:
                imgSrc = tradestation;
                break;
            case 2:
                imgSrc = eightcap;
                break;
            case 3:
                imgSrc = Swissquote;
                break;
            case 4:
                imgSrc = Capital;
                break;
        
            default:
                break;
        }
        return (
            <>
               <img src={imgSrc} alt="?" />
            </>
        )
    };

    const tourConfig = [
        {
          selector: '[data-tut="reactour__singup"]',
          content: `For Sing Up , you get +1000 Koala Point`
        },
    ]

    useEffect(() => {
      const isFirstTime = localStorage.getItem('FirstDetails');
      if (!isFirstTime ||isFirstTime == 'true') {
        setOpenTour(true);
      } 
    }, [])
    
    return (
        <>
        <div className="container ml-0">
            <div className="broker-review-main-controller">
                <div className="head">
                    <div className='d-flex flex-row'>
                        <div className="child">
                           <BrokerImage />
                        </div>
                        <div className="child">
                            <span className="f-25 fw-b">
                                {title}
                            </span>
                            <span><i className={PrimeIcons.CALENDAR}></i> {date}</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="child score">
                            <RatingTemplate percent={score * 20} score={score} />
                        </div>
                        <div className="child">
                            {bestBroker && 
                                <div className="controller">
                                    <img src={award} className="mr-2 " />
                                    <span>Best discount broker</span>
                                </div>
                            }
                        </div>
                        <div className="child flex-row">
                            <div className="btn-controller">
                                <Button data-tut="reactour__singup" label="Sing Up" onClick={()=> {
                                    let x = document.createElement("a");
                                    x.href = link;
                                    x.target = "_blank"
                                    x.click();
                                }}  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-controller">
                    <h3 className='fw-b mb-3'>{name} review summary</h3>
                    <div className="bc_custom_html">
                    <p className='mx-0'><a rel="nofollow" >{name}</a> {sub1}<a target="_blank">{sub2}</a> {sub3}</p>
                    {hint1 && 
                        <blockquote>
                         <p className='mx-0'>{hint1} <a  target="_blank">{hint2}</a>.</p>
                        </blockquote>}
                   
                        
                    {description1 && <p className='mx-0'>{description1}.</p>} 
                    {description2 && <p className='mx-0'>{description2}.</p>}
                    {description3 && <p className='mx-0'>{description3}.</p>}
                    {description4 && <p className='mx-0'><strong>{description4} </strong>{description5}<a href="https://brokerchooser.com/broker-reviews/etoro-review#review-part-account-opening" target="_blank">Account opening</a> section.</p>}
                    {disclaimer && <p className='mx-0'><span className="bc-broker-data-field" data-broker-id="14" data-param-id="277"><strong>Disclaimer:</strong> {disclaimer} <strong>{disclaimer2}</strong> {disclaimer3} </span></p>}
                    
                    </div>
                </div>
            
                <div className="review-controller">
                    <div className="controller">
                        <p>
                            <strong>Recommended for</strong> {recommended}
                        </p>
                        <div className="text-center mt-2  mr-0  w-full ">
                        <Button label='Sing up' className='py-2'  onClick={()=> {
                                let x = document.createElement("a");
                                x.href = link;
                                x.target = "_blank"
                                x.click();
                            }} />
                            <br/>
                            <span className="bc-cta-cfd-warning "><strong>{recommended2}</strong></span>
                        </div>
                    </div>
                </div>
                
                <div className="review-controller">
                    <h3 className='fw-b mb-3'>{name} pros and cons</h3>
                    <p>{prosAndCons1}</p>
                    <p>{prosAndCons2}</p>
                    <ProsAndCons />
                    <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
                </div>

                <div className="review-controller">
                   <CommentsComponent />
                </div>

                <div className="review-controller">
                    <NewsListComponent />
                </div>
            </div>
        </div>
        <Tour
            steps={tourConfig}
            isOpen={openTour}
            onRequestClose={()=> {
            setOpenTour(false)
            localStorage.setItem('FirstDetails' , 'false');
        }} />
        </>
    )
};

export default React.memo(BrokerDetailsScreen);

