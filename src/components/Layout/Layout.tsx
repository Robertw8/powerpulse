import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '..';

const Layout: React.FC = () => {
  return (
    <>
      <Header testAuth={false} />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
