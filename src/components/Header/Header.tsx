import { Container } from '..';
import { PrimaryButton } from '..';

const Header: React.FC<{ testAuth: boolean }> = ({ testAuth }) => {
  return (
    <Container>
      <div>
        {testAuth
          ? 'це хедер для авторизованого юзера'
          : 'це хедер для НЕ авторизованого юзера'}
      </div>
      <PrimaryButton type="primary" />
    </Container>
  );
};

export default Header;
