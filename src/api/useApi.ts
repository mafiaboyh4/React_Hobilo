import { AxiosError, AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../base/axios';
import { toast } from 'react-toastify';
import { ToastOptions } from './../../node_modules/react-toastify/dist/types/index.d';
import { Contents } from './../content/content';
const getDefaultHeader = () => {
  const token = localStorage.getItem('token');

  return {
    ...(token ? { token } : {}),
  };
};

const useApi = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate('/', { replace: true });
    return
   
  };

  const handleError = (status: number , msg:string) => {
    
    switch (status) {
      case 500:
        toast.error('Error Form Server Call Support !', Contents.toastOption);
        break;
      case 400:
        toast.error('User Not Found !', Contents.toastOption);
        logOut()
        break;
      case 401:
        if (location.pathname == '/') toast.error('User Not Found !', Contents.toastOption);
        
        toast.error(msg, Contents.toastOption);
        break;

      default:
        break;
    }
  };


  const getRequest = useCallback(async <T, P>(url: string): Promise<T> => {
    try {
      const result:any = await axios.get<T>(url , {
        headers: {
          ...getDefaultHeader(),
        },
      });
      if (String(result.data) == 'invalid token') logOut();
      return result.data.data
    } catch (error) {
      const axiosError = error as AxiosError;
      // @ts-ignore
      handleError(axiosError.response?.status , axiosError.response?.data);
      throw error;
    }
  }, []);

  const postRequest = useCallback(async <T, P>(url: string, payload: P): Promise<T> => {
    try {
      const result:any = await axios.post<T>(url, payload, {
        headers: {
          ...getDefaultHeader(),
        },
      });
      if (String(result.data) == 'invalid token') logOut();
      return result.data.data
    } catch (error) {
      const axiosError = error as AxiosError;
      // @ts-ignore
      handleError(axiosError.response?.status);
      throw error;
    }
  }, []);

  const putRequest = useCallback(async <T, P>(url: string, payload: P): Promise<T> => {
    try {
      const result:any = await axios.put<T>(url, payload, {
        headers: {
          ...getDefaultHeader(),
        },
      });
      if (String(result.data) == 'invalid token') logOut();
      return result.data.data
    } catch (error) {
      const axiosError = error as AxiosError;
      // @ts-ignore
      handleError(axiosError.response?.status);
      throw error;
    }
  }, []);

  const deleteRequest = useCallback(async <T, P>(url: string, payload?: P) => {
    const result:any = await axios.delete<T>(url, {
      headers: {
        ...getDefaultHeader(),
      },
      data: payload,
    });

    if (String(result.data) == 'invalid token') logOut();
    return result.data.data
  }, []);

  return {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
  };
};

export default useApi;
