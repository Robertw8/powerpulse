import { Container, Exercises } from '../components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const ExercisesPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && !isRefreshing && navigate('/');
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Container>
      <Exercises />
    </Container>
  );
};

export default ExercisesPage;
