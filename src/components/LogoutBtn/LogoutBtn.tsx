import { useDispatch } from 'react-redux';
import Icon from '../Icon/Icon';
import { Text, LogoutBtn } from './LogoutBtn.styled';

import { AppDispatch } from '../../redux';
import { logOutUser } from '../../redux/auth/operations';

const LogOutBtn: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOutUser({}));
  };

  return (
    <LogoutBtn onClick={handleLogOut} className={className}>
      <Text>Logout</Text>
      <Icon
        name="logout"
        iconWidth={{ mobile: '20px', tablet: '20px' }}
        iconHeight={{ mobile: '20px', tablet: '20px' }}
        fill={'#e6533c'}
        stroke={'#e6533c'}
      />
    </LogoutBtn>
  );
};

export default LogOutBtn;
