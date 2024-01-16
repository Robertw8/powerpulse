import { Container, PageTitle } from '../components';
import { UserCard, UserForm } from '../components/Profile';
import { Wrap } from '../components/Profile/UserForm/UserForm.styled';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <PageTitle text="Profile Settings" />
      <Wrap>
        <UserCard />
        <UserForm />
      </Wrap>
    </Container>
  );
};

export default ProfilePage;
