import { Container } from '../components';
import SignUpForm from '../components/SignUp/SignUp';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const SignUpPage: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && !isRefreshing && navigate('/diary');
  }, [isLoggedIn, isRefreshing, navigate]);
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
