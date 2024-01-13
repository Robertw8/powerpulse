import { Container } from '..';
import { Link } from 'react-router-dom';

const Header: React.FC<{ testAuth: boolean }> = ({ testAuth }) => {
  return (
    <Container>
      <div>
        {testAuth
          ? 'це хедер для авторизованого юзера'
          : 'це хедер для НЕ авторизованого юзера'}
      </div>
      <div style={{ marginTop: 50, display: 'flex', gap: '30px' }}>
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/products">Products</Link>
        <Link to="/exercises">Exercises</Link>
      </div>
    </Container>
  );
};

export default Header;
