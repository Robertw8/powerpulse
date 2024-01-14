import { Container, PageTitle } from '../components';
import { Profile } from '../components/Profile';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <PageTitle text="Profile Settings" />
      <Profile />
    </Container>
  );
};

export default ProfilePage;
