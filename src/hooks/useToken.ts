//? в hooks тому що коли токен перенесеться в redux то тут токен буде отримуватись через useSelector()

const useToken = () => {
  const TOKEN = localStorage.getItem('token');

  return TOKEN;
};

export default useToken;
