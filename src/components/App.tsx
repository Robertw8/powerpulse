import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '.';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ExercisesPage = lazy(() => import('../pages/ExercisesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
