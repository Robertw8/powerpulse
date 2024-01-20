import { AxiosError, AxiosRequestConfig } from 'axios';

interface RequestConfig extends AxiosRequestConfig {
  [key: string]: unknown;
}

interface ApiServiceOptions {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  data?: { [key: string]: unknown } | unknown;
  config?: RequestConfig;
}

interface ApiServiceResponse<T> {
  data: T;
  error?: AxiosError<string> | string | null;
  token?: string;
}

export type { ApiServiceOptions, ApiServiceResponse };
