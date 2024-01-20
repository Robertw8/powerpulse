import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { NavList, LinkStyled } from './UserNav.styled';

const UserNav: React.FC = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return null;
  }
  const areSomeSettingsPresent = Object.values(user.settings || {}).some(
    setting => setting
  );

  return (
    <NavList>
      {areSomeSettingsPresent && (
        <>
          <li>
            <LinkStyled to="/diary">Diary</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/products">Products</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/exercises">Exercises</LinkStyled>
          </li>
        </>
      )}
    </NavList>
  );
};

export default UserNav;
