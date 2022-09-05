import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';


export const AppTopbar = (props:any) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/', { replace: true })
    }

    return (
        <div className="layout-topbar">
            <Link to="/dashboard" className="layout-topbar-logo mt-3">
                <span>Exchange management</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={logout}>
                            <i className="pi pi-sign-out"/>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
        </div>
    );
}
