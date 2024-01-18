import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '..';
import { Loader } from '../Loader';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
