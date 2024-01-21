import { User, InitialAuthState } from './types';

const user: User = {
  email: '',
  name: '',
  dailyCalories: '',
  dailyActivity: '',
  settings: {
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  },
  avatarURL: '',
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
