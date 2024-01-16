type NullableString = string | null;
type NullableNumber = number | null;

interface User {
  email: NullableString;
  name: NullableString;
  dailyCalories: NullableNumber;
  dailyActivity: NullableNumber;
  settings: {
    height: NullableNumber;
    currentWeight: NullableNumber;
    desiredWeight: NullableNumber;
    birthday: NullableString;
    blood: NullableNumber;
    sex: NullableString;
    levelActivity: NullableNumber;
  };
}

interface InitialAuthState {
  user: User;
  token: NullableString;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: NullableString;
  type: NullableString;
}

export type { User, InitialAuthState };
