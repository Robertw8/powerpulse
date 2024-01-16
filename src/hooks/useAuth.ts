import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectType,
  selectUser,
} from '../redux/auth/selectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const type = useSelector(selectType);
  const token = useSelector(selectToken);

  return { user, isLoggedIn, isLoading, isRefreshing, error, type, token };
};

export default useAuth;
