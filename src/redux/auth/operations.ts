import { SignInArgs, SignUpArgs } from '../../services/types';
import { operationWrapper } from '../../helpers';
import { apiService, clearToken, setToken } from '../../services';
import { callToast } from '../../helpers';
import { getToken } from '../../services/token.ts';

const registerUser = operationWrapper(
  'auth/register',
  async (data: SignUpArgs, { dispatch }) => {
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
    dispatch(getCurrentUser({}));

    return response.data;
  }
);

const loginUser = operationWrapper(
  'auth/login',
  async (data: SignInArgs, { dispatch }) => {
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
    dispatch(getCurrentUser({}));
    return response.data;
  }
);

const getCurrentUser = operationWrapper(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const token = getToken();
    if (!token) return thunkAPI.rejectWithValue('Unable to refresh user');

    const response = await apiService(
      {
        method: 'get',
        url: 'users/current',
      },
      () => {
        clearToken();
        return '';
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
        callToast(
          'error',
          'Please upload a valid format of image and try again'
        );
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
