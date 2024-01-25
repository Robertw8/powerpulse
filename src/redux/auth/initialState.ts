import { User, InitialAuthState } from './types';

const user: User = {
  email: '',
  name: '',
  dailyCalories: 0,
  dailyActivity: 0,
  settings: {
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    birthday: '',
    blood: 0,
    sex: '',
    levelActivity: '',
  },
  avatarURL: '',
  verify: false,
};

const initialState: InitialAuthState = {
  user,
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: true,
  error: '',
  type: '',
};

export default initialState;
