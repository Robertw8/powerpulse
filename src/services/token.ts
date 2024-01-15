import axios from 'axios';

const setToken = (token: string | null) => {
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearToken = () => {
  axios.defaults.headers.common.Authorization = null;
};



export { setToken, clearToken  };
