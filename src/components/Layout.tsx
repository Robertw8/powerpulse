import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Loader } from '.';

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
