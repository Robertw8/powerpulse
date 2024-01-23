import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectSettings,
  selectToken,
  selectType,
  selectUser,
} from '../redux/auth/selectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const userSettings = useSelector(selectSettings);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const type = useSelector(selectType);
  const token = useSelector(selectToken);

  return { user,userSettings, isLoggedIn, isLoading, isRefreshing, error, type, token };
};

export default useAuth;
