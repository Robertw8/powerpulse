import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

interface PublicRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  redirectTo = '/diary',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
