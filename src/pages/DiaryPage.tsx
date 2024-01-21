import { Container, PageTitle, Diary } from '../components';
import { DiaryDateControl } from '../components/Diary/DiaryDateControl';


const DiaryPage: React.FC = () => {
  return (
    <Container>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <PageTitle text="Diary" />
     <DiaryDateControl/>
      </div>
      <Diary />
    </Container>
  );
};

export default DiaryPage;
