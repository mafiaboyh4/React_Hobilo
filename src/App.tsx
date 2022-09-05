import React, { useState, useEffect, useRef , lazy, Suspense }  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/loginScreen';


import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';


import PrimeReact from 'primereact/api';

import 'primeflex/primeflex.css';
import './assets/styles/bootstrap.css'
import './assets/styles/styles.scss'
import "primereact/resources/themes/arya-purple/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import UsersList from './pages/users/usersList';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './base/RequireAuth';
import HistoryScreen from './pages/users/history/historyScreen';
import { TradeTypeAppUrlEnum } from './enum/allEnums';
import NetworkManagement from './pages/networks/networkManagement';
import MarketManagement from './pages/market/MarketManagement';
import WalletManagement from './pages/wallets/WalletManagement';
import VipGroupsManagement from './pages/vipGroups/VipGroupsManagement';
import AnalyzeExchangeScreen from './pages/analyzeExchange/AnalyzeExchangeScreen';
import TradeManagement from './pages/trade/TradeManagement';

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
            label: 'Home',
            items: [
                {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' ,},
                {label: 'Users', icon: 'pi pi-fw pi-users' ,
                    items: [
                    {
                        label: 'List', icon: 'pi pi-fw pi-users', to: '/users' ,
                    },
                    {
                        label: 'Spot Trades', icon: 'pi pi-fw pi-chart-bar', to: '/spotTrades' ,
                    },
                    {
                        label: 'Futures Trade', icon: 'pi pi-fw pi-chart-line', to: '/FuturesTrade' ,
                    },
                ]},
                {label: 'Network Management', icon: 'pi pi-fw pi-server',  items: [
                    {
                        label: 'List', icon: 'pi pi-fw pi-server',  to: '/networkManagement' ,
                    },
                    {
                        label: 'Analyze Network', icon: 'pi pi-fw pi-chart-pie', to: '/analyzeExchange' ,
                    },
                ]},
                {label: 'Market Management', icon: 'pi pi-fw pi-shopping-bag',items: [
                    {
                        label: 'List', icon: 'pi pi-fw pi-shopping-bag',  to: '/marketManagement' ,
                    },
                    {
                        label: 'Analyze Market', icon: 'pi pi-fw pi-chart-pie', to: '/analyzeExchange' ,
                    },
                ]},
                {label: 'wallet Management', icon: 'pi pi-fw pi-credit-card',items: [
                    {
                        label: 'Admin/User', icon: 'pi pi-fw pi-credit-card',  to: '/walletManagement' ,
                    },
                ]},
                {label: 'vip groups', icon: 'pi pi-fw pi-dollar',items: [
                    {
                        label: 'List Groups', icon: 'pi pi-fw pi-dollar',  to: '/vipGroups' ,
                    },
                ]},
                {label: 'Analyze Exchange', icon: 'pi pi-fw pi-chart-pie', to: '/analyzeExchange'},
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
            {location.pathname !== '/' && <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />}

            {location.pathname !== '/' && <div className={`layout-sidebar ${location.pathname === '/' && 'd-none'}`} onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div>}

            <div className={`layout-main-container ${location.pathname == '/' && 'ml-0'}`} >
                <div className="layout-main">
                  
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
                            <Route path="/users" element={<RequireAuth><UsersList/></RequireAuth>} />
                            {tradeTypeMenu.map((router)=> (
                                <Route path={router.path} element={<RequireAuth><HistoryScreen  historyType={router.key} /></RequireAuth>} />
                            ))}
                            <Route path="/networkManagement" element={<RequireAuth><NetworkManagement /></RequireAuth>} />
                            <Route path="/marketManagement" element={<RequireAuth><MarketManagement /></RequireAuth>} />
                            <Route path="/walletManagement" element={<RequireAuth><WalletManagement /></RequireAuth>} />
                            <Route path="/vipGroups" element={<RequireAuth><VipGroupsManagement /></RequireAuth>} />
                            <Route path="/analyzeExchange" element={<RequireAuth><AnalyzeExchangeScreen /></RequireAuth>} />
                            <Route path="/spotTrades" element={<RequireAuth><TradeManagement type={1} /></RequireAuth>} />
                            <Route path="/FuturesTrade" element={<RequireAuth><TradeManagement type={2} /></RequireAuth>} />

                        </Routes>
                    </Suspense>

                </div>
                {location.pathname !== '/' && <AppFooter layoutColorMode={layoutColorMode} />}
            </div>
        </div>
    );

}

export default App;
