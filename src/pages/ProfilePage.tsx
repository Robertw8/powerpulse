import { Container, PageTitle } from '../components';
import { UserCard, UserForm } from '../components/Profile';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <PageTitle text="Profile Settings" />
      <UserCard />
      <UserForm />
    </Container>
  );
};

export default ProfilePage;
