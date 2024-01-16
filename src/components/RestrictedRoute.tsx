import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

interface RestrictedRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
