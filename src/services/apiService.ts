import axios from 'axios';
import { ApiServiceOptions } from './types';

axios.defaults.baseURL = 'https://goit-be.onrender.com/';

const apiService = async (
  { method, url, data, config }: ApiServiceOptions,
  errorHandler = error => {
    return `An error occurred: ${error}`;
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
