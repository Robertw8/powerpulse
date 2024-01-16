import axios from 'axios';
import { ApiServiceOptions } from './types';

axios.defaults.baseURL = 'https://goit-be.onrender.com/';

const apiService = async ({ method, url, data, config }: ApiServiceOptions) => {
  try {
    const response = await axios.request({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    return error instanceof Error ? error.message : 'An error occurred';
  }
};

export default apiService;
