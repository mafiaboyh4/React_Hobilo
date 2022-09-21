import React from 'react';
import './profileStyle.scss';
import Profile from '../../assets/imgs/users/user1.jpg';
import CheckIcon  from '../../assets/imgs/checkIcon.png';
import backLight from '../../assets/imgs/profiles/background.jpg';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import Lottie from "lottie-react";
import ranking from '../../assets/lotties/bar.json';
import points from '../../assets/lotties/coins.json';
import consultation from '../../assets/lotties/consultation.json';
import share from '../../assets/lotties/share.json';

const ProfileScreen = () => {
   
    return (
        <div className="main-profile-controller">
            <div className="details-controller">
                <div className="head-details">
                    <div className="back-light">
                        <img src={backLight} width="100%" />
                    </div>
                    <div className="detail">
                        <div className="controller">
                                <div className="profile" >
                                    <img  src={Profile} />
                                </div>
                            <div className="child">
                                <span className="f-23 fw-b">Nannie Nelson <img width={'20px'} src={CheckIcon} /> </span>
                                <span className="f-14 gray">NannieBe1996@gmail.com</span>
                            </div>

                        </div>
                        <div className="controller justify-content-end">
                            <div className="child">
                                <Button label='Update profile' className='p-button-text' icon={PrimeIcons.PENCIL} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-me-controller">
                    <span className="f-14 gray">About Me</span>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti labore a recusandae eligendi libero corrupti, voluptatem tempore expedita eos quo tempora pariatur ipsam repellendus unde magni, quisquam aut aliquid dignissimos.</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="description-box-controller">
                            <div className="col-6">
                                <div className="description-box">
                                    <Lottie animationData={ranking} style={{width:'60px' , height:'60px'}}/>
                                    <span className="f-14 gray my-1">Ranking</span>
                                    <span className="f-25">23.4K</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="description-box">
                                    <Lottie animationData={points} style={{width:'60px' , height:'60px'}}/>
                                    <span className="f-14 gray my-1">Points</span>
                                    <span className="f-25">12K</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="description-box">
                                    <Lottie animationData={share} style={{width:'60px' , height:'60px'}}/>
                                    <span className="f-14 gray my-1">Shared Videos</span>
                                    <span className="f-25">43</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="description-box">
                                    <Lottie animationData={consultation} style={{width:'60px' , height:'60px'}}/>
                                    <span className="f-14 gray my-1">Attended Events</span>
                                    <span className="f-25">327</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tran-line-controller">
                                <div className="box">
                                    <div className="flex-1 flex-column h-100 justify-content-around">
                                        <span className="f-14 gray">Point</span>
                                        <span className="f-25 my-2">12K</span>
                                        <span className="f-14">
                                            <i className="pi pi-arrow-right yellow mr-2 f-14"> </i>
                                            + 75 Point up 
                                        <span className="gray ml-1">vs Last Week</span>
                                        </span>
                                    </div>
                                    <div className="flex-1 align-items-center" style={{overflow:'hidden'}}>
                                    <svg width="300" height="302" viewBox="0 0 300 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.9398 93.8863C54.3215 108.586 59.0581 117.686 72.4398 132.386C85.8215 147.086 93.0582 103.686 106.44 118.386C119.822 133.086 132.058 94.6863 145.44 109.386C158.822 124.086 177.058 114.266 190.44 128.966C203.822 143.666 231.558 120.686 244.94 135.386C258.321 150.086 277.94 140.386 288.44 159.886L288.44 180.5L40.9398 175.5L40.9398 93.8863Z" fill="url(#paint0_linear_6_16)" stroke="url(#paint1_linear_6_16)" stroke-width="3"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_6_16" x1="135.5" y1="-65" x2="106.5" y2="174.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F9DD4E"/>
                                        <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_6_16" x1="183" y1="40.5" x2="172.5" y2="148" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F9DD4E"/>
                                        <stop offset="0.854178" stop-color="#F9DD4E" stop-opacity="0.72665"/>
                                        <stop offset="1" stop-color="#F9DD4E" stop-opacity="0"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="box mb-2">
                                <div className="flex-1 flex-column h-100 justify-content-around">
                                        <span className="f-14 gray">Ranking</span>
                                        <span className="f-25">23.4K</span>
                                        <span className="f-14">
                                            <i className="pi pi-arrow-up-right green mr-2 f-14"> </i>
                                            + 5 Rank up 
                                        <span className="gray ml-1">vs Last Week</span>
                                        </span>
                                    </div>
                                    <div className="flex-1" style={{overflow:'hidden'}}>
                                        <svg width="253" height="134" viewBox="0 0 253 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M245.771 105.498V10.6366L239.296 13.4585L234.326 20.4049L225.893 44.9341L218.212 65.1219L207.219 75.5415L195.623 71.8512L186.889 61.4317L181.919 52.5317L174.389 44.9341C171.98 44.2829 168.667 42.9805 168.667 42.9805C168.667 42.9805 162.643 41.0268 152.252 50.578C152.252 50.578 139.602 78.1183 134.783 82.4878C129.964 86.8573 120.326 84.2244 112.495 87.0463C98.5181 92.0829 78.6107 91.8219 78.6107 91.8219L55.419 113.529H35.6911L7.07797 105.498V133.5H245.771V105.498Z" fill="url(#paint0_linear_3_12)" fill-opacity="0.17"/>
                                        <path d="M7.22858 107.288C27.1071 107.288 27.1071 113.746 46.9857 113.746C66.8643 113.746 66.8643 91.1436 86.7429 91.1436C106.621 91.1436 106.621 84.6857 126.5 84.6857C146.379 84.6857 146.379 42.7091 166.257 42.7091C186.136 42.7091 186.136 74.9988 206.014 74.9988C225.893 74.9988 225.893 10.4195 245.771 10.4195" stroke="#51BC5F" stroke-width="3"/>
                                        <path d="M7.22858 108.44C7.56332 108.44 7.81344 108.244 7.95886 108.034C8.10558 107.822 8.18037 107.557 8.18037 107.288C8.18037 107.02 8.10558 106.754 7.95886 106.543C7.81344 106.333 7.56332 106.137 7.22858 106.137C6.89384 106.137 6.64372 106.333 6.4983 106.543C6.35158 106.754 6.27679 107.02 6.27679 107.288C6.27679 107.557 6.35158 107.822 6.4983 108.034C6.64372 108.244 6.89384 108.44 7.22858 108.44Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <path d="M46.9857 114.898C47.3205 114.898 47.5706 114.701 47.716 114.492C47.8627 114.28 47.9375 114.015 47.9375 113.746C47.9375 113.477 47.8627 113.212 47.716 113.001C47.5706 112.791 47.3205 112.595 46.9857 112.595C46.651 112.595 46.4009 112.791 46.2554 113.001C46.1087 113.212 46.0339 113.477 46.0339 113.746C46.0339 114.015 46.1087 114.28 46.2554 114.492C46.4009 114.701 46.651 114.898 46.9857 114.898Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <path d="M86.7428 92.2948C87.0776 92.2948 87.3277 92.0987 87.4731 91.8891C87.6198 91.6776 87.6946 91.4125 87.6946 91.1436C87.6946 90.8747 87.6198 90.6096 87.4731 90.3981C87.3277 90.1885 87.0776 89.9924 86.7428 89.9924C86.4081 89.9924 86.158 90.1885 86.0126 90.3981C85.8658 90.6096 85.7911 90.8747 85.7911 91.1436C85.7911 91.4125 85.8658 91.6776 86.0126 91.8891C86.158 92.0987 86.4081 92.2948 86.7428 92.2948Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <path d="M126.5 85.8369C126.835 85.8369 127.085 85.6408 127.23 85.4312C127.377 85.2197 127.452 84.9546 127.452 84.6857C127.452 84.4168 127.377 84.1517 127.23 83.9402C127.085 83.7306 126.835 83.5345 126.5 83.5345C126.165 83.5345 125.915 83.7306 125.77 83.9402C125.623 84.1517 125.548 84.4168 125.548 84.6857C125.548 84.9546 125.623 85.2197 125.77 85.4312C125.915 85.6408 126.165 85.8369 126.5 85.8369Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <path d="M166.257 43.8604C166.592 43.8604 166.842 43.6642 166.987 43.4546C167.134 43.2431 167.209 42.978 167.209 42.7091C167.209 42.4403 167.134 42.1751 166.987 41.9637C166.842 41.754 166.592 41.5579 166.257 41.5579C165.922 41.5579 165.672 41.754 165.527 41.9637C165.38 42.1751 165.305 42.4403 165.305 42.7091C165.305 42.978 165.38 43.2431 165.527 43.4546C165.672 43.6642 165.922 43.8604 166.257 43.8604Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <path d="M206.014 76.15C206.349 76.15 206.599 75.9539 206.745 75.7443C206.891 75.5328 206.966 75.2677 206.966 74.9988C206.966 74.7299 206.891 74.4648 206.745 74.2533C206.599 74.0437 206.349 73.8476 206.014 73.8476C205.68 73.8476 205.429 74.0437 205.284 74.2533C205.137 74.4648 205.062 74.7299 205.062 74.9988C205.062 75.2677 205.137 75.5328 205.284 75.7443C205.429 75.9539 205.68 76.15 206.014 76.15Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <path d="M245.771 11.5707C246.106 11.5707 246.356 11.3746 246.502 11.165C246.648 10.9535 246.723 10.6884 246.723 10.4195C246.723 10.1506 246.648 9.88552 246.502 9.67403C246.356 9.46442 246.106 9.2683 245.771 9.2683C245.437 9.2683 245.187 9.46442 245.041 9.67403C244.894 9.88552 244.82 10.1506 244.82 10.4195C244.82 10.6884 244.894 10.9535 245.041 11.165C245.187 11.3746 245.437 11.5707 245.771 11.5707Z" fill="#51bc5f" stroke="#51bc5f"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_3_12" x1="114" y1="11" x2="114" y2="133" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51BC5F"/>
                                        <stop offset="1" stop-color="#51BC5F" stop-opacity="0"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history-controller">
                <span className="f-18 mb-2">Education History </span>
                <div className="item">
                    <div className="side">
                        <div className="yellow mb-1 f-14 w-100">
                            <i className="fa-sharp fa-solid fa-graduation-cap mr-2"></i>
                            <span>Event : What is Crypto</span>
                        </div>
                        <span className='gray my-2 w-100'>How To Trade Basicity</span>
                        <span className='f-23 w-100'>+ 300 <span className='f-17'>points</span> </span>
                    </div>
                    <div className="side end">
                        <span>2022/9/20</span>
                        <span className=' gray'>20:00 - 21:30</span>
                    </div>
                </div>
                <div className="item">
                    <div className="side">
                        <div className=" mb-1 f-14 w-100" style={{color:'#51cffd'}}>
                            <i className="fa-sharp fa-solid fa-graduation-cap mr-2"></i>
                            <span>NFT and Market place</span>
                        </div>
                        <span className='gray my-2 w-100'>create and deploy workshop</span>
                        <span className='f-23 w-100'>+ 120 <span className='f-17'>points</span> </span>
                    </div>
                    <div className="side end">
                        <span>2022/9/19</span>
                        <span className=' gray'>05:40 - 13:20</span>
                    </div>
                </div>
                <div className="item">
                    <div className="side">
                        <div style={{color:"#eb382f"}} className="mb-1 f-14 w-100">
                            <i className="fa-sharp fa-solid fa-graduation-cap mr-2"></i>
                            <span>Event : Meeting With 10 Client</span>
                        </div>
                        <span className='gray my-2 w-100'>How To Trade Basicity</span>
                        <span className='f-23 w-100'>+ 400 <span className='f-17'>points</span> </span>
                    </div>
                    <div className="side end">
                        <span>2022/9/18</span>
                        <span className=' gray'>10:00 - 11:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default React.memo(ProfileScreen);
