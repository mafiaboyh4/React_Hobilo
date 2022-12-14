import React, { useState, useEffect, useRef , Suspense }  from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import classNames from 'classnames';

import AppTopbar  from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';


import PrimeReact from 'primereact/api';

import 'primeflex/primeflex.css';
import './assets/styles/bootstrap.css'
import './assets/styles/styles.scss'
import "primereact/resources/themes/arya-purple/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';

import { ToastContainer } from 'react-toastify';
import { TradeTypeAppUrlEnum } from './enum/allEnums';
import EductionScreen from './pages/eduction/EductionScreen';
import ListVideos1Screen from './pages/videos/list1/list1Screen';
import ShowVideoScreen from './pages/videos/showVideo/showVideoScreen';
import EductionRoomScreen from './pages/eduction/room/EductionRoomScreen';
import ProfileScreen from './pages/profile/ProfileScreen';
import Teachers from './pages/teachers/teachers';
import SavedEventAndVideos from './pages/saved/savedEventAndVideosScreen';
import { RoadMapScreen } from './pages/roadMap/roadMapScreen';
import TeacherProfileScreen from './pages/teacherProfile/teacherProfileScreen';

const App = () => {
    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        // @ts-ignore
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, []);


    const onWrapperClick = (event:any) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event:any) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        }
        else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMobileTopbarMenuClick = (event:any) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event:any) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const onMenuItemClick = (event:any) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }
    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const menu = [
        {
            items: [
                {label: 'Events', icon: 'fa-sharp fa-solid fa-lines-leaning', to: '/events' ,},
                {label: 'Teachers', icon: 'fa-sharp fa-solid fa-graduation-cap', to:'/teachers'},
                {label: 'Videos', icon: 'fa-brands fa-youtube',to:'/videos'},
                {label: 'Saved', icon: 'pi pi-bookmark', items:[
                    {label:'Saved Events' , icon : 'fa-sharp fa-solid fa-lines-leaning' , to:'/savedEvents'},
                    {label:'Saved Videos' , icon : 'fa-brands fa-youtube' , to:'/savedVideos'},
                ]},
                {label: 'Road Map', icon: 'pi pi-map',to:'/roadMap'},

            ]
        },
    ];

    const addClass = (element:any, className:any) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element:any, className:any) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-theme-light': layoutColorMode === 'light'
    });

    const location = useLocation();
    const tradeTypeMenu = Object.keys(TradeTypeAppUrlEnum).splice(0,5).map((key) => ({ key:Number(key) , path: TradeTypeAppUrlEnum[Number(key)] }));

    return (
        <div className={wrapperClass } onClick={onWrapperClick}>
            <ToastContainer />
            {location.pathname !== '/login' && <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />}

            {location.pathname !== '/login' && <div className={`layout-sidebar ${location.pathname === '/login' && 'd-none'}`} onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div>}

            <div className={`layout-main-container ${location.pathname == '/' && 'ml-0'}`} >
                <div className="layout-main">
                  
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/events" replace />} />
                            <Route path="/events" element={<EductionScreen />} />
                            <Route path="/videos" element={<ListVideos1Screen />} />
                            <Route path="/showVideo/:id" element={<ShowVideoScreen />} />
                            <Route path="/room/:id" element={<EductionRoomScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                            <Route path="/teachers" element={<Teachers />} />
                            <Route path="/savedVideos" element={<SavedEventAndVideos type={1} />} />
                            <Route path="/savedEvents" element={<SavedEventAndVideos type={2} />} />
                            <Route path="/roadMap" element={<RoadMapScreen />} />
                            <Route path="/teacherProfile" element={<TeacherProfileScreen />} />
                            
                        </Routes>
                    </Suspense>

                </div>
                {location.pathname !== '/login' && <AppFooter layoutColorMode={layoutColorMode} />}
            </div>
        </div>
    );

}

export default App;
