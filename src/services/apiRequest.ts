import axios from 'axios';

interface AuthResponse {
  token: string;
}

interface SignUpArgs {
  name: string;
  email: string;
  password: string;
}

interface SignInArgs {
  email: string;
  password: string;
}

const instance = axios.create({
  baseURL: 'https://goit-be.onrender.com/',
});

const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const singUp = async (data: SignUpArgs): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>('users/register', data);
  setToken(response.data.token);
  return response.data;
};

const SignIn = async (dataUser: SignInArgs): Promise<AuthResponse> => {
  const { data } = await instance.post<AuthResponse>('users/login', dataUser);
  setToken(data.token);
  return data as AuthResponse;
};

export type { AuthResponse, SignUpArgs, SignInArgs };
export { singUp, SignIn };
