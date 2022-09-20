import React ,  {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { initApp, Store } from './store/index';
import { InputText } from 'primereact/inputtext';

const AppTopbar = (props:any) => {

    useEffect(() => {
        initApp();
    }, [])
    

    const ThemeController = () => {
        const {isDark , searchValue} = Store();
        const changeTheme = Store((state) => state.changeTheme);
        
        return <>
           
             <div className='d-flex flex-row align-items-center'>
                <button className="p-link layout-topbar-button d-lg-none" onClick={() => changeTheme(!isDark)}>
                    <i className={`pi ${isDark ? 'pi-moon':'pi-sun'}`}/>
                </button>
            </div>
            <ul className={classNames("layout-topbar-menu  origin-top d-flex justify-content-between w-100", )}>
                <li>
                    <div className="search-controller">
                        <span className="p-input-icon-left">
                            <i className="pi pi-search pl-2" />
                            <InputText placeholder='Search video' value={searchValue}  onChange={(e) => Store.setState({searchValue:e.target.value})} />
                        </span>
                    </div>
                </li>
                <li>
                    <button className="p-link layout-topbar-button" onClick={() => changeTheme(!isDark)}>
                        <i className={`pi ${isDark ? 'pi-moon':'pi-sun'}`}/>
                    </button>
                </li>
               
            </ul>
        </>
    }

    return (
        <div className="layout-topbar">
            

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>


            <Link to="/dashboard" className="layout-topbar-logo ml-3 pt-1">
                <span>HFM</span>
            </Link>


           <ThemeController />
        </div>
    );
}


export default React.memo(AppTopbar)