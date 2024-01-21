import { Container, PageTitle, Diary } from '../components';


const DiaryPage: React.FC = () => {
  return (
    <Container>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <PageTitle text="Diary" />
     
      </div>
      <Diary />
    </Container>
  );
};

export default DiaryPage;
