import React from 'react'
import './competitionsDetailsStyle.scss';
import myProfile from '../../../assets/imgs/users/user4.jpg';
import EducationRankingComponent from '../../eduction/room/EducationRankingComponent';
import CompetitionDetailsChartComponent from './CompetitionDetailsChartComponent';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import CountDown from 'count-down-react'

const CoundownRenderer = ({ days, hours, minutes, seconds, completed }: { days:any, hours:any, minutes:any, seconds:any, completed:any }) => {

    return (
        <>
        <div className="timer-controller">
            <div className="cont">
                <span>Days</span>
                <div className="item">{days}</div> 
            </div>
            <div className="cont">
                <span>Hours</span>
                <div className="item">{hours}</div> 
            </div>
            <div className="cont">
                <span>Minutes</span>
                <div className="item">{minutes}</div> 
            </div>
            <div className="cont">
                <span>Seconds</span>
                <div className="item">{seconds}</div>
            </div>
        </div>
        </>
    );
  };
  

const CompetitionDetailsScreen = () => {
    const date1 = Date.now() + 26 * 60 * 60 * 1000;

    return (
        <>
            <div className="Competition-Details-controller">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 px-1">
                            <div className="my-details">
                                <div className="controller">
                                        <div className="profile">
                                        <div className="child">
                                            <img src={myProfile}  />
                                        </div>
                                        <div className="child">
                                            <span>Leo </span>
                                            <span className="subtitle">@lord_0921</span>
                                        </div>
                                        </div>
                                    <span className='f-14 gray'>Day 15 Ago</span>
                                </div>
                                <div className="controller mt-4 f-16">
                                    <span>Balance :</span>
                                    <span>22 USDT</span>
                                </div>
                                <div className="controller mt-3 f-16">
                                    <span>Profit :</span>
                                    <span className='green f-18'>
                                        <ArrowDropUp  fontSize='large' className='green' />
                                            +2 %</span>
                                </div>
                                <div className="controller mt-2 f-16">
                                    <span>Ranking :</span>
                                    <span className='red f-18'>
                                        <ArrowDropDown  fontSize='large' className='red' />
                                        - 1 %
                                    </span>
                                </div>
                                <div className="controller mt-2 f-16">
                                    <span>Winner Point :</span>
                                    <span className='green f-18'>
                                        + 300
                                    </span>
                                </div>
                            </div>
                            <div className="my-details my-2">
                                <CountDown date={date1} renderer={CoundownRenderer} />
                            </div>
                            <div className="box">
                            <CompetitionDetailsChartComponent />
                            </div>
                        </div>
                        <div className="col-lg-6 px-1 ">
                            <EducationRankingComponent isMax={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default React.memo(CompetitionDetailsScreen)