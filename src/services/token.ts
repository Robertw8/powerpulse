
const setToken = (accessToken: string | null, refreshToken: string | null) => {
  if (accessToken && refreshToken)
    localStorage.setItem(
      'session',
      JSON.stringify({ accessToken, refreshToken })
    );
};

const clearToken = () => {
  localStorage.removeItem('session');
};

const getToken = () => {
  return localStorage.getItem('session');
}
export { setToken, clearToken, getToken };
