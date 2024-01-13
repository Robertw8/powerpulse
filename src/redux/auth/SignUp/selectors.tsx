
interface AuthState {

  profile: {
    name: string;
    email: string;
  };
}

 export interface RootState {
  auth: AuthState;
}

export const selectUserMail = (state: RootState) => state.auth.profile.email;
