import { Container, PageTitle, UserCard, UserForm, Wrap } from '../components';

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
