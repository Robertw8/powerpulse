import { Container, PageTitle, Diary } from '../components';
import { DiaryDateControl } from '../components/Diary/DiaryDateControl';
import { DiaryWrapper } from '../components/Diary/Diary.styled'

const DiaryPage: React.FC = () => {
  return (
    <Container>
      <DiaryWrapper>
      <PageTitle text="Diary" />
     <DiaryDateControl/>
     </DiaryWrapper>
      <Diary />
    </Container>
  );
};

export default DiaryPage;
