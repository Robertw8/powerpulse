import { Container, Welcome } from '../components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const WelcomePage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && !isRefreshing && navigate('/diary');
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Container>
      <Welcome />
    </Container>
  );
};

export default WelcomePage;
