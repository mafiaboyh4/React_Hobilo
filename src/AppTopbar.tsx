import React ,  {useEffect} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { initApp, Store } from './store/index';


const AppTopbar = (props:any) => {
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/', { replace: true })
    }


    useEffect(() => {
        initApp();
    }, [])
    

    const ThemeController = () => {
        const {isDark} = Store();
        const changeTheme = Store((state) => state.changeTheme);
        
        return <>
          <button className="p-link layout-topbar-button d-lg-none" onClick={() => changeTheme(!isDark)}>
                <i className={`pi ${isDark ? 'pi-moon':'pi-sun'}`}/>
            </button>
            <ul className={classNames("layout-topbar-menu  origin-top", )}>
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
                <span>Koala</span>
            </Link>


           <ThemeController />
        </div>
    );
}


export default React.memo(AppTopbar)