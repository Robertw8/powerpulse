import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { logOutUser } from '../../redux/auth/operations';
import Icon from '../Icon/Icon';
import { Text, LogoutBtn } from './LogoutBtn.styled';

export const LogOutBtn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOutUser({}));
  };

  return (
    <LogoutBtn type="button" onClick={handleLogOut}>
      <Text>Logout</Text>
      <Icon
        name="logout"
        iconWidth={{ mobile: '20px', tablet: '20px' }}
        iconHeight={{ mobile: '', tablet: '20px' }}
        stroke={'#e6533c'}
      />
    </LogoutBtn>
  );
};
