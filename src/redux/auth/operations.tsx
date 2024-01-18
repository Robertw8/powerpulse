import {
  SignInArgs,
  SignUpArgs,
} from '../../services/apiRequest';
import { operationWrapper } from '../../helpers';
import { apiService,clearToken,setToken } from '../../services';

import  {toast}  from 'react-hot-toast';

const registerUser = operationWrapper(
  'auth/register',
  async (data: SignUpArgs) => {
    const response = await apiService(
      {
      method: 'post',
      url: 'users/register',
      data,
    },
      (error) => {
 if (error.response && error.response.status === 409) {
         toast.error('Such a user with an email or name already exists!', {
          position: "top-center",
           style: {
            backgroundColor: "#686868",
            color: '#fff',
           },
        });
    } else {
        toast.error('Sorry, server error, please wait !', {
          position: "top-center",
           style: {
            backgroundColor: "#686868",
            color: '#fff',
           },
        });
    }  
    return ''
      } 
    );
      setToken(response.data.token);
  return response.data;
  },


);

const loginUser = operationWrapper('auth/login', async (data: SignInArgs) => {
  const response = await apiService({
    method: 'post',
    url: 'users/login',
    data,
  },
    (error) => {
      if (error.response && error.response.status === 401) {
         toast.error('Check the correctness of the password for mail !', {
          position: "top-center",
           style: {
            backgroundColor: "#686868",
            color: '#fff',
           },
        });
    } else {

        toast.error('Sorry, server error, please wait !', {
          position: "top-center",
           style: {
            backgroundColor: "#686868",
            color: '#fff',
           },
        });
    }  
    return ''
      }    
    );
  setToken(response.data.token);
  return response.data;
});


const getCurrentUser = operationWrapper(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) return thunkAPI.rejectWithValue('Unable to refresh user');
    setToken(token);

    const response = await apiService({
      method: 'get',
      url: 'users/current',
    });

    return response.data;
  }
);


const logOutUser = operationWrapper(
  'auth/logout',
  async () => {
    await apiService(
      {
        method: 'post',
        url: 'users/logout',
      }
      );
    clearToken()
  },


);

export { registerUser, loginUser, getCurrentUser, logOutUser };
