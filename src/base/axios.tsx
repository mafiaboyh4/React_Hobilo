import axios from 'axios';
import { Contents } from './../content/content';


const token = localStorage.getItem('token');
axios.defaults.baseURL = Contents.baseUrl;
axios.defaults.headers = {
    "Content-type": "application/json",
    "token": `${token}`,
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
}

export default axios;
