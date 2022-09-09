import React from 'react';
import './profileStyle.scss';
import myProfile from '../../assets/imgs/users/user4.jpg';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import ProfileBrokersListComponent from './ProfileBrokersListComponent';
import { DepositHistoryComp } from './DepositHistoryComp';
import LiveAndEducationComp from './LiveAndEducationComp';
import CompetitionDetailsChartComponent from '../competition/competitionDetails/CompetitionDetailsChartComponent';

const ProfileScreen = () => {
   
    
    return (
        <>
         <div className="main-profile-controller">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="box">
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
                    </div>
                    <div className="controller mt-4 f-16">
                        <span>Balance :</span>
                        <span>300 USDT</span>
                    </div>
                    <div className="controller mt-2 f-16">
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
                            <span>Total Point :</span>
                            <span className='green f-18'>
                                1200
                            </span>
                        </div>
                        <div className="controller mt-2 f-16">
                            <span>Total Deposit :</span>
                            <span className='f-18'>
                                3
                            </span>
                        </div>
                        <div className="controller mt-2 f-16">
                            <span>Total Attendance at Live :</span>
                            <span className='f-18'>
                               12
                            </span>
                        </div>
                        <div className="controller mt-2 f-16">
                            <span>Total Eduction :</span>
                            <span className='f-18'>
                               14
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mb-4">
                    <div className="box">
                        <CompetitionDetailsChartComponent  title='Profile Analyze'/>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <ProfileBrokersListComponent />
                </div>
                <div className="col-lg-6 mb-4">
                    <LiveAndEducationComp />
                </div>
                <div className="col-12 mb-4">
                    <DepositHistoryComp />
                </div>
            </div>
         </div>
        </>
    )
};

export default React.memo(ProfileScreen);
