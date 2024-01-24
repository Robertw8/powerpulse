import { AxiosError, AxiosRequestConfig } from 'axios';

interface RequestConfig extends AxiosRequestConfig {
  [key: string]: unknown;
}

interface ApiServiceOptions {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  data?: { [key: string]: unknown } | unknown;
  config?: RequestConfig;
  params?: {
    [k: string]: string;
  };
}

interface ApiServiceResponse<T> {
  data: T;
  error?: AxiosError<string> | string | null;
  token?: string;
}

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

export type {
  ApiServiceOptions,
  ApiServiceResponse,
  AuthResponse,
  SignUpArgs,
  SignInArgs,
};
