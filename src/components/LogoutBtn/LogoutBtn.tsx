// import { useDispatch } from 'react-redux';

import Icon from '../Icon/Icon';
import { Text, LogoutBtn } from './LogoutBtn.styled';
// import { logOutThunk } from '../../redux/auth/auth-operations';

export const LogOutBtn = () => {
  //   const dispatch = useDispatch();
  //   const handleLogOut = () => {
  //     dispatch(logOutThunk());
  //   };
  return (
    <LogoutBtn
      type="button"
      to="/"
      // onClick={handleLogOut}
    >
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
