import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goit-be.onrender.com/', 
});


const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

interface SignUpResponse {
  token: string;

}

export const singUp = async (data: { name: string, email: string, password: string }): Promise<SignUpResponse> => {
  
    const response = await instance.post<SignUpResponse>('users/register', data);
    setToken(response.data.token);
    return response.data;

};

export const SignIn = async (dataUser) => {
  const { data } = await instance.post('users/login', dataUser);
  setToken(data.token);
  return data;
};