import { SignInArgs, SignUpArgs } from '../../services/apiRequest';
import { operationWrapper } from '../../helpers';
import { apiService, clearToken, setToken } from '../../services';
import { callToast } from '../../helpers';

const registerUser = operationWrapper(
  'auth/register',
  async (data: SignUpArgs) => {
    const response = await apiService(
      {
        method: 'post',
        url: 'users/register',
        data,
      },
      error => {
        if (error.response && error.response.status === 409) {
          callToast('error', 'User with this name or email already exists');
        } else {
          callToast(
            'error',
            'An unknown error occurred, please reload the page and try again'
          );
        }

        return '';
      }
    );

    setToken(response.data.accessToken, response.data.refreshToken);
    return response.data;
  }
);

const loginUser = operationWrapper('auth/login', async (data: SignInArgs) => {
  const response = await apiService(
    {
      method: 'post',
      url: 'users/login',
      data,
    },
    error => {
      if (error.response && error.response.status === 404) {
        callToast('error', 'Login or password is incorrect');
      } else {
        callToast(
          'error',
          'An unknown error occurred, please reload the page and try again'
        );
      }

      return '';
    }
  );

  setToken(response.data.accessToken, response.data.refreshToken);
  return response.data;
});

const getCurrentUser = operationWrapper(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    // @todo add token ckeck with persist at getCurrentUser call
    const token = localStorage.getItem('session')
    // const token = state.auth.token;

    if (!token) return thunkAPI.rejectWithValue('Unable to refresh user');

    const response = await apiService(
      {
        method: 'get',
        url: 'users/current',
      },
      error => {
        //@todo add error handling exept 401
        // error.response &&
        //   error.response.status === 401 &&
        //   callToast('error', 'Session expired, please log in again', 1000 * 60);
        // clearToken();
        // return '';
      }
    );

    return response.data;
  }
);

const logOutUser = operationWrapper('auth/logout', async () => {
  await apiService({
    method: 'post',
    url: 'users/logout',
  });
  clearToken();
});

const getUserValue = operationWrapper(
  'profile/getUserValue',
  async userData => {
    const { data } = await apiService(
      {
        method: 'patch',
        url: '/users',
        data: userData,
      },
      () => {
        callToast('error', 'Request error, try again');
        return '';
      }
    );
    return data;
  }
);

const getUserAvatar = operationWrapper(
  'profile/getUserAvatar',
  async dataFile => {
    const { data } = await apiService(
      {
        method: 'post',
        url: '/users/avatars',
        data: dataFile,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      },
      () => {
        callToast('error', 'Request error, try again');
        return '';
      }
    );
    return data;
  }
);

export {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
  getUserValue,
  getUserAvatar,
};
