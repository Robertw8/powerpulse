import { User, InitialAuthState } from './types';

const user: User = {
  email: null,
  name: null,
  dailyCalories: null,
  dailyActivity: null,
  settings: {
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
  },
};

const initialState: InitialAuthState = {
  user,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
  type: null,
};

export default initialState;
