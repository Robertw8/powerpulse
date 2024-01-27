import { Container, PageTitle, Diary } from '../components';
import { DiaryWrapper } from '../components/Diary/Diary.styled';
import { CustomDatePicker } from '../components/Diary/CustomDatePicker';

const DiaryPage: React.FC = () => {
  return (
    <Container>
      <DiaryWrapper>
        <PageTitle text="Diary" />
        <CustomDatePicker />
      </DiaryWrapper>
      <Diary />
    </Container>
  );
};

export default DiaryPage;
