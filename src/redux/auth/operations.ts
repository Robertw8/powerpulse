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

    setToken(response.data.token);
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
      if (error.response && error.response.status === 401) {
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

    const response = await apiService(
      {
        method: 'get',
        url: 'users/current',
      },
      error => {
        error.response &&
          error.response.status === 401 &&
          callToast('error', 'Session expired, please log in again', 1000 * 60);
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

export { registerUser, loginUser, getCurrentUser, logOutUser };
