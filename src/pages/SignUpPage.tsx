import { useEffect } from 'react';
import ContainerAuth from '../components/Container/ContainerAuth';
import SignUpForm from '../components/SignUp/SignUp';
import { useAuth } from '../hooks';
import { callToast } from '../helpers';

const SignUpPage: React.FC = () => {
  const { isRefreshing } = useAuth();

  useEffect(() => {
    if (isRefreshing) {
      const timeout = setTimeout(() => {
        callToast(
          'loading',
          'If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.'
        );
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isRefreshing]);
  return (
    <ContainerAuth>
      <SignUpForm />
    </ContainerAuth>
  );
};

export default SignUpPage;
