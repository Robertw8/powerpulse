import {
  // singUp,
  // signIn,
  SignInArgs,
  SignUpArgs,
} from '../../services/apiRequest';
import { operationWrapper } from '../../helpers';
import { apiService, setToken } from '../../services';

// const registerUser = createAsyncThunk(
//   'auth/register',
//   async (data: SignUpArgs, thunkAPI) => {
//     try {
//       const response = await singUp(data);

//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error instanceof Error ? error.message : 'An unknown error occurred'
//       );
//     }
//   }
// );

// const loginUser = createAsyncThunk(
//   'auth/login',
//   async (dataUser: SignInArgs, thunkAPI) => {
//     try {
//       const response: AuthResponse = await signIn(dataUser);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error instanceof Error ? error.message : 'An error occurred'
//       );
//     }
//   }
// );

const registerUser = operationWrapper(
  'auth/register',
  async (data: SignUpArgs) => {
    const response = await apiService({
      method: 'post',
      url: 'users/register',
      data,
    });
    setToken(response.data.token);

    return response.data;
  }
);

const loginUser = operationWrapper('auth/login', async (data: SignInArgs) => {
  const response = await apiService({
    method: 'post',
    url: 'users/login',
    data,
  });
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

export { registerUser, loginUser, getCurrentUser };
