import { PrimeIcons } from 'primereact/api';
import React from 'react';
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
import { InputTextarea } from 'primereact/inputtextarea';
import { toast } from 'react-toastify';

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


    const soon = () => {
        toast.info('Its Demo')
    }

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
                                <Button label="Sing Up" onClick={()=> {
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
                        <Button label='Sing up'  onClick={()=> {
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
                    <div className="comment-controller-main">
                        <div className="app container py-4">
                            <div className="rounded-3 shadow-sm p-3">
                                <h4 className="mb-4">3 Comments</h4>
                                    <div className="py-3">
                                    <div className="d-flex comment">
                                        <img className="rounded-circle comment-img"
                                            src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                                        <div className="flex-grow-1 ms-3">
                                            <div className="mb-1"><a  className="fw-bold  me-1">Studio KonKon</a> <span className="text-muted text-nowrap">2 days ago</span></div>
                                            <div className="mb-2">Lorem ipsum dolor sit amet, ut qui commodo sensibus, id utinam inermis constituto vim. In nam dolorum interesset, per fierent ponderum ea. Eos aperiri feugiat democritum ne.</div>
                                            <div className="hstack align-items-center mb-2">
                                                <a className="green me-2" ><i onClick={soon} className="cp pi pi-thumbs-up"></i></a>
                                                <span className="me-3 small">55</span>
                                                <a className="link-secondary me-4" ><i onClick={soon} className="cp pi pi-thumbs-down"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="py-3">
                                    <div className="d-flex comment">
                                        <img className="rounded-circle comment-img"
                                            src="https://via.placeholder.com/128/99ccff/0073e6.png?text=A" />
                                        <div className="flex-grow-1 ms-3">
                                            <div className="mb-1"><a  className="fw-bold  pe-1">Asai Kazuma</a> <span className="text-muted text-nowrap">8 hours ago</span></div>
                                            <div className="mb-2">Ei saepe abhorreant temporibus cum, hinc praesent voluptatum ea has.<br /><br />Vis nihil tacimates senserit ut, quo posse labores honestatis te. Ex duo nullam posidonium deterruisset, altera aeterno duo.</div>
                                            <div className="hstack align-items-center">
                                                <a className="link-secondary me-2" ><i onClick={soon} className="cp pi pi-thumbs-up"></i></a>
                                                <span className="me-3 small">26</span>
                                                <a className="link-secondary me-4" ><i onClick={soon} className="cp pi pi-thumbs-down"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="py-3">
                                    <div className="d-flex comment">
                                        <img className="rounded-circle comment-img"
                                            src="https://via.placeholder.com/128/cc99ff/7f00ff.png?text=K" />
                                        <div className="flex-grow-1 ms-3">
                                            <div className="mb-1"><a  className="fw-bold  py-1 px-2 rounded-pill me-1">Kamisato Mugi</a> <span className="text-muted text-nowrap">10 hours ago</span></div>
                                            <div className="mb-2">Aenean non tellus sed erat ultrices rutrum. Sed ac dolor tempus, efficitur diam vitae, sagittis nisi. Morbi bibendum congue nisl eu congue. Mauris eu eros bibendum, pretium ex ac, aliquam lorem.</div>
                                            <div className="hstack align-items-center mb-2">
                                                <a className="green me-2" ><i  onClick={soon} className="cp pi pi-thumbs-up"></i></a>
                                                <span className="me-3 small">8</span>
                                                <a className="link-secondary me-4" ><i  onClick={soon} className="cp pi pi-thumbs-down"></i></a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-controller rounded-3 shadow-sm p-3 ">
                                <div className="d-flex">
                                    <img className="rounded-circle me-3"
                                        style={{width:'3rem',height:'3rem'}}
                                        src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                                    <div className="flex-grow-1">
                                    <div className=" gap-2 mb-1">
                                        <a  className="fw-bold ">My Username</a>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <InputTextarea className=" w-100"
                                                    placeholder='Type your comment ... '
                                                    id="my-comment" rows={5} cols={30}
                                                    style={{height:'7rem'}}></InputTextarea>
                                    </div>
                                    <div className="hstack justify-content-end gap-2">
                                        <Button onClick={soon} label='comment' className="p-button-raised comment-btn"></Button>
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

export default React.memo(BrokerDetailsScreen);

