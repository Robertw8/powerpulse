import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { setToken } from '.';

axios.defaults.baseURL = 'https://goit-be.onrender.com/';

const TOKEN = localStorage.getItem('token'); //! temp

interface ApiServiceOptions {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
}

interface ApiServiceResponse<T> {
  data: T | null;
  error: AxiosError<string> | null;
}

const apiService = async <T>({
  method,
  url,
  data,
  config,
}: ApiServiceOptions): Promise<ApiServiceResponse<T>> => {
  try {
    setToken(TOKEN);
    const response: AxiosResponse<T> = await axios.request({
      method,
      url,
      data,
      ...config,
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error as AxiosError<string>,
    };
  }
};

export default apiService;
