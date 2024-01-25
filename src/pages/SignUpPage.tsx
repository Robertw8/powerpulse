

import ContainerAuth from '../components/Container/ContainerAuth';
import SignUpForm from '../components/SignUp/SignUp';

const SignUpPage: React.FC = () => {
  return (
    <ContainerAuth>
      <SignUpForm />
    </ContainerAuth>
  );
};

export default SignUpPage;
