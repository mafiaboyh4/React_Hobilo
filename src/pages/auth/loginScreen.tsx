import React, { useRef, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import './loginStyle.scss';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { Contents } from '../../content/content';
import useApi from '../../api/useApi';
import { toast } from 'react-toastify';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { postRequest } = useApi();

    const onSubmit = async () => {
        if (!username || !password) return toast.error('please enter Username And Password' ,  Contents.toastOption)
        const body = {
            username:username,
            password:password
        }
        setLoading(true);

        const resultPromise = postRequest('login' , body);
        
        resultPromise
          .then((data:any) => {
            console.log(data);
            
            setLoading(true);
            localStorage.setItem('token' , data.token)
            localStorage.setItem('refreshToken' , data.refreshToken)
            navigate('/dashboard', { replace: true })
          })
          .catch()
          .finally(() => {
            setLoading(false);
          });

    }

    return (
        <>
         <div className="container">
            <div className="row justify-content-center">
                <div className="py-5"></div>
                <div className="col-md-6">
                    <div className="form-controller">
                        <div className="form">
                            <h3>Admin Login</h3>
                            <div className="py-3"></div>
                            <div className="controller">
                                <span className="p-float-label">
                                    <InputText id="username" onKeyUp={(event) => event.key === 'Enter' && onSubmit()} value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label htmlFor="username">Username</label>
                                </span>
                            </div>
                            <div className="controller">
                                <span className="p-float-label">
                                    <Password onKeyUp={(event) => event.key === 'Enter' && onSubmit()} value={password} feedback={false} onChange={(e) => setPassword(e.target.value)} toggleMask />
                                    <label htmlFor="password">password</label>
                                </span>
                            </div>
                            <div className="controller">
                                <Button className='dark-btn' label="Submit" loading={loading} onClick={onSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}

export default Login;