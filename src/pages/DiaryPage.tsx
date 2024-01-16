import { Container, PageTitle, Diary } from '../components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const DiaryPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && !isRefreshing && navigate('/');
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Container>
      <PageTitle text="Diary" />
      <Diary />
    </Container>
  );
};

export default DiaryPage;
