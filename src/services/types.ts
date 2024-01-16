import { AxiosError, AxiosRequestConfig } from 'axios';

interface ApiServiceOptions {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  data?: { [key: string]: unknown };
  config?: AxiosRequestConfig;
}

interface ApiServiceResponse<T> {
  data: T;
  error?: AxiosError<string> | string | null;
  token?: string;
}

export type { ApiServiceOptions, ApiServiceResponse };
