import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks';

interface PrivateRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const { isLoggedIn, isRefreshing, userSettings } = useAuth();
  const location = useLocation();

  if (
    isLoggedIn &&
    !isRefreshing &&
    !userSettings &&
    location.pathname !== '/profile'
  )
    return <Navigate to="/profile" />;

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

export default PrivateRoute;
