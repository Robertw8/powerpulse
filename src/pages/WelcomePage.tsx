import { Welcome } from '../components';
import ContainerAuth from '../components/Container/ContainerAuth';

const WelcomePage: React.FC = () => {
  return (
    <ContainerAuth>
      <Welcome />
    </ContainerAuth>
  );
};

export default WelcomePage;
