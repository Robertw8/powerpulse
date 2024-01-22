import axios from "axios";
import { setToken } from '.';

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
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

// @todo do we need to delete it if we don't use it?
const singUp = async (data: SignUpArgs): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>('users/register', data);
  setToken(response.data.accessToken, response.data.refreshToken);
  return response.data;
};

const signIn = async (dataUser: SignInArgs): Promise<AuthResponse> => {
  const { data } = await instance.post<AuthResponse>('users/login', dataUser);
  setToken(data.accessToken, data.refreshToken);
  return data as AuthResponse;
};

export type { AuthResponse, SignUpArgs, SignInArgs };
export { singUp, signIn };
