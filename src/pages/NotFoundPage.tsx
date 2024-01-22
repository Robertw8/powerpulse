
import { NotFound } from '../components';

const NotFoundPage: React.FC = () => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const homeLink = !isLoggedIn && !isRefreshing ? routes.WELCOME : routes.DIARY;
  // const [countdown, setCountdown] = useState(5);
//   const navigate = useNavigate();

  // useEffect(() => {
  //   const intervalId = setInterval(() => setCountdown(countdown - 1), 1000);
  //
  //   if (countdown === 0) {
  //     navigate('/');
  //     return () => clearInterval(intervalId);
  //   }
  // }, [countdown, navigate]);
  return (
    <NotFound />
  );
};

export default NotFoundPage;
