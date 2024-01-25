
import ContainerAuth from '../components/Container/ContainerAuth';
import SignInForm from '../components/SignIn/SignIn';

const SignInPage: React.FC = () => {
  return (
    <ContainerAuth>
      <SignInForm />
    </ContainerAuth>
  );
};

export default SignInPage;
