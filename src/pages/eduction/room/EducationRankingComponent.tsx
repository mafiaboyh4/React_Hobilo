import React from 'react';
import './rankingStyle.scss'
import { PrimeIcons } from 'primereact/api';
import Profile0 from '../../../assets/imgs/profiles/profile0.jpg'
import Profile1 from '../../../assets/imgs/profiles/profile1.jpg'
import Profile2 from '../../../assets/imgs/profiles/profile2.jpg'
import Crown from "../../../assets/imgs/queen-crown.png";
import { ArrowDropUp , ArrowDropDown} from '@material-ui/icons';

import user0 from '../../../assets/imgs/users/user1.jpg'
import user1 from '../../../assets/imgs/users/user10.jpg'
import user2 from '../../../assets/imgs/users/user2.jpg'
import user3 from '../../../assets/imgs/users/user3.jpg'
import user4 from '../../../assets/imgs/users/user4.jpg'
import user5 from '../../../assets/imgs/users/user5.jpg'
import user6 from '../../../assets/imgs/users/user6.jpg'
import user7 from '../../../assets/imgs/users/user7.jpg'
import user8 from '../../../assets/imgs/users/user8.jpg'
import user9 from '../../../assets/imgs/users/user9.jpg'
import {data} from './users.json';

const EducationRanking = () => {

    const users = [...data]
    const getUrl = (index:number) => {
        switch (index) {
            case 0:
                return user0
            case 1:
                return user1
            case 2:
                return user2
            case 3:
                return user3
            case 4:
                return user4
            case 5:
                return user5
            case 6:
                return user6
            case 7:
                return user7
            case 8:
                return user8
            case 9:
                return user9
        }
    }

    return (
        <>
            <div className="ranking-table-controller">
                <span className="header-title">Top Traders</span>
                <div className="top-traders">
                    <div className="trader ">
                        <span>2</span>
                        <ArrowDropUp fontSize="large"  className='green' />
                        <div className="profile-controller">
                            <img src={Profile1} />
                        </div>
                        <div className="mt-2 pt-1"></div>
                            <span className="gray f-14">
                                @dorisklein
                            </span>
                        <span className="green f-18 fw-b">
                            8023
                        </span>
                    </div>
                    <div className="trader first">
                         <span>1</span>
                        <img className='mt-1' src={Crown}/>
                        <div className="profile-controller">
                            <img src={Profile0} />
                        </div>
                        <div className="mt-2 pt-1 username-controller"></div>
                            <span className="gray f-14">
                                @lord_0921
                            </span>
                        <span className="green f-18 fw-b">
                            8122
                        </span>
                    </div>
                    <div className="trader ml-2">
                         <span>3</span>
                        <ArrowDropDown fontSize="large"  />
                        <div className="profile-controller">
                            <img src={Profile2} />
                        </div>
                        <div className="mt-2 pt-1"></div>
                            <span className="gray f-14">
                                @sher231
                            </span>
                        <span className="green f-18 fw-b">
                            7884
                        </span>
                    </div>
                </div>
                <div className="other-traders no-scroll-bar">
                    {users.map((item , index)=> 
                        <div className="item cp">
                            <div className="rank">
                                <span className={`${item.change > 0 ? 'green':'red'}`} >{Math.round(item.change)}</span>
                                {item.change > 0 ? <ArrowDropUp fontSize="large" className='green' /> : <ArrowDropDown fontSize="large" className="red"  /> }
                                
                            </div>
                            <div className="user-details">
                                <img src={getUrl(index)} />
                                <span>{item.username}</span>
                                <span className="green f-16 fw-b">{item.rank}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="shadow-panel"></div>
            </div>
        </>
    )
};


export default React.memo(EducationRanking)