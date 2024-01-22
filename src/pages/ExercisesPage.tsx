import { Container, Exercises } from '../components';
import { WaistList } from '../components/Waist';

const ExercisesPage: React.FC = () => {
  return (
    <Container>
      <WaistList />
      <Exercises />
    </Container>
  );
};

export default ExercisesPage;
