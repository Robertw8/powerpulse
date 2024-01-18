import { Container, PageTitle, Diary } from '../components';

const DiaryPage: React.FC = () => {
  return (
    <Container>
      <PageTitle text="Diary" />
      <Diary />
    </Container>
  );
};

export default DiaryPage;
