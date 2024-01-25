type OptionalString = string | undefined;

interface User {
  email: OptionalString;
  name: OptionalString;
  dailyCalories: number;
  dailyActivity: number;
  settings: {
    height: number;
    currentWeight: number;
    desiredWeight: number;
    birthday: string;
    blood: number;
    sex: OptionalString;
    levelActivity: OptionalString;
  };
  avatarURL: string;
  verify: boolean;
}

interface InitialAuthState {
  user: User;
  token: OptionalString;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: OptionalString;
  type: OptionalString;
}

export type { User, InitialAuthState };
