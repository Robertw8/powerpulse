import { Container } from '../components';
import SignInForm from '../components/SignIn/SignIn';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const SignInPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && !isRefreshing && navigate('/diary');
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
