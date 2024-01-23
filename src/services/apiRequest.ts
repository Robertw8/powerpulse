

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


export type { AuthResponse, SignUpArgs, SignInArgs };

