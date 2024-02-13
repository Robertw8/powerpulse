import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';

import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Layout,
  PublicRoute,
  PrivateRoute,
  WaistList,
  ExercisesSlider,
} from '.';

import routes from '../routes';
import { getCurrentUser } from '../redux/auth';
import type { AppDispatch } from '../redux';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ExercisesPage = lazy(() => import('../pages/ExercisesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, isRefreshing, userSettings } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Navigate
              to={!isLoggedIn && !isRefreshing ? routes.WELCOME : routes.DIARY}
            />
          }
        />
        <Route
          path={routes.WELCOME}
          element={<PublicRoute component={<WelcomePage />} />}
        />
        <Route
          path={routes.SIGNUP}
          element={<PublicRoute component={<SignUpPage />} />}
        />
        <Route
          path={routes.SIGNIN}
          element={
            <PublicRoute
              redirectTo={userSettings ? routes.DIARY : routes.PROFILE}
              component={<SignInPage />}
            />
          }
        />
        <Route
          path={routes.PROFILE}
          element={<PrivateRoute component={<ProfilePage />} />}
        />
        <Route
          path={routes.DIARY}
          element={<PrivateRoute component={<DiaryPage />} />}
        />
        <Route
          path={routes.PRODUCTS}
          element={<PrivateRoute component={<ProductsPage />} />}
        />
        <Route
          path={routes.EXERCISES}
          element={<PrivateRoute component={<ExercisesPage />} />}
        >
          <Route
            path=":filter"
            element={<PrivateRoute component={<ExercisesSlider />} />}
          />
          <Route
            path=":filter/:category"
            element={<PrivateRoute component={<WaistList />} />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
