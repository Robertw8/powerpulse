import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

interface PrivateRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

export default PrivateRoute;
