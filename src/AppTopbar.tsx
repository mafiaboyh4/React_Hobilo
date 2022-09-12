import React ,  {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { initApp, Store } from './store/index';
import Profile from './assets/imgs/users/user4.jpg'
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tag } from 'primereact/tag';
import KoalaPoint from './components/global/koalaPoint';

const AppTopbar = (props:any) => {
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/', { replace: true })
    }


    useEffect(() => {
        initApp();
    }, [])
    

    const OpTemplate = () => {

        return (
            <>  
                <div className="toolBar-profile-controller">
                    <div className="item">
                        <span>Total Deposit :</span>
                        <span>300 $</span>
                    </div>
                    <div className="item mb-0">
                        <span>Total Point</span>
                        <span>1200</span>
                    </div>
                    <div className="item mb-0 pb-0">
                        <span>Account Type</span>
                        <Tag value="Premium"></Tag>
                    </div>
                </div>
            </>
        )
    }

    const op = useRef<OverlayPanel>(null);
    const ThemeController = () => {
        const {isDark} = Store();
        const changeTheme = Store((state) => state.changeTheme);
        
        return <>
            <OverlayPanel
                ref={op}
                id="overlay_panel"
                dismissable
                style={{ width: "300px" }}
                className="overlaypanel-demo"
            > 
            <OpTemplate />
          </OverlayPanel>
             <div className='d-flex flex-row align-items-center'>

                <button onClick={()=> {
                    navigate('/profile')
                }}
                    onMouseEnter={(e) => op.current?.toggle(e)}
                    onMouseLeave={(e) => op.current?.hide()}
                    aria-haspopup
                    aria-controls="overlay_panel" 
                    className="p-link layout-topbar-button d-lg-none" >

                    <img src={Profile} style={{
                        borderRadius:'50%',
                        width:'35px',
                        height:'35px',
                        objectFit:'cover',
                        objectPosition:'center'
                    }}  />
                </button>
                <button className="p-link layout-topbar-button d-lg-none" onClick={() => changeTheme(!isDark)}>
                    <i className={`pi ${isDark ? 'pi-moon':'pi-sun'}`}/>
                </button>
            </div>
            <ul className={classNames("layout-topbar-menu  origin-top", )}>
                <li className='d-flex align-items-center'>
                 <KoalaPoint label='' point={200} />
                </li>
                <li>
                    <button className="p-link layout-topbar-button" 
                        onClick={()=> {
                            navigate('/profile')
                        }}
                        onMouseEnter={(e) => op.current?.toggle(e)}
                        onMouseLeave={(e) => op.current?.hide()}
                        aria-haspopup
                        aria-controls="overlay_panel">
                        <img src={Profile} style={{
                            borderRadius:'50%',
                            width:'35px',
                            height:'35px',
                            objectFit:'cover',
                            objectPosition:'center'
                        }} />
                    </button>
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
                <span>Koala</span>
            </Link>


           <ThemeController />
        </div>
    );
}


export default React.memo(AppTopbar)