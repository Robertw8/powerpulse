import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '.';
import routes from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux';
import { getCurrentUser } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';

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
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch]);

  console.log(user);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path={routes.SIGNUP} element={<SignUpPage />} />
          <Route path={routes.SIGNIN} element={<SignInPage />} />
          <Route path={routes.PROFILE} element={<ProfilePage />} />
          <Route path={routes.DIARY} element={<DiaryPage />} />
          <Route path={routes.PRODUCTS} element={<ProductsPage />} />
          <Route path={routes.EXERCISES} element={<ExercisesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
