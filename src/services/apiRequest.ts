import axios from 'axios';
import { setToken } from '.';

interface AuthResponse {
  data: {
    token: string;
    email: string;
  };
  token: string;
}

interface SignUpArgs {
  name: string;
  email: string;
  password: string;
  [key: string]: unknown;
}

interface SignInArgs {
  email: string;
  password: string;
  [key: string]: unknown;
}

const instance = axios.create({
  baseURL: 'https://goit-be.onrender.com/',
});

const singUp = async (data: SignUpArgs): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>('users/register', data);
  setToken(response.data.token);
  return response.data;
};

const signIn = async (dataUser: SignInArgs): Promise<AuthResponse> => {
  const { data } = await instance.post<AuthResponse>('users/login', dataUser);
  setToken(data.token);
  return data as AuthResponse;
};


export type { AuthResponse, SignUpArgs, SignInArgs };
export { singUp, signIn };
