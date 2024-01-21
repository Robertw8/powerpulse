import axios from 'axios';
import { ApiServiceOptions } from './types';

axios.defaults.baseURL = 'https://goit-be.onrender.com/';

const apiService = async (
  { method, url, data, config }: ApiServiceOptions,
  errorHandler = error => {
    console.error('An error occurred:', error); // ! temp
    return 'An error occurred';
  }
) => {
  try {
    const response = await axios.request({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export default apiService;
