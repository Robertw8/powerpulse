import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, PublicRoute, PrivateRoute, Loader } from '.';
import routes from '../routes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux';
import { getCurrentUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ExercisesPage = lazy(() => import('../pages/ExercisesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Navigate
                to={
                  !isLoggedIn && !isRefreshing ? routes.WELCOME : routes.DIARY
                }
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
            element={<PublicRoute component={<SignInPage />} />}
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
            <Route path="bodyparts" element={<ExercisesPage />} />
            <Route path="muscles" element={<ExercisesPage />} />
            <Route path="equipment" element={<ExercisesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
