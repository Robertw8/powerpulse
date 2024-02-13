import { useDispatch } from 'react-redux';

import { Icon } from '..';
import { Text, LogoutBtn } from './LogoutButton.styled';

import { logOutUser } from '../../redux/auth';
import type { AppDispatch } from '../../redux';

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className }) => {
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

export default LogoutButton;
