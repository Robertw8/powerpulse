import { Container, PageTitle, UserCard, UserForm, Wrap } from '../components';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const ProfilePage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && !isRefreshing && navigate('/');
  });

  return (
    <Container>
      <PageTitle text="Profile Settings" />
      <Wrap>
        <UserCard />
        <UserForm />
      </Wrap>
    </Container>
  );
};

export default ProfilePage;
