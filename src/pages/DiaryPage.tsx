import { Container, PageTitle, Diary } from '../components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { DiaryDateControl } from '../components/Diary/DiaryDateControl';

const DiaryPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && !isRefreshing && navigate('/');
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Container>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <PageTitle text="Diary" />
      <DiaryDateControl></DiaryDateControl>
      </div>
      <Diary />
    </Container>
  );
};

export default DiaryPage;
