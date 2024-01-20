import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import Icon from '../../Icon/Icon';
import { LinkStyled } from './UserBar.styled';

export const UserBar = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Link to="/profile">
        <Icon
          name="settings"
          iconWidth={{ mobile: '24px', tablet: '28px' }}
          iconHeight={{ mobile: '24px', tablet: '28px' }}
          stroke={'rgba(239, 237, 232, 0.3)'}
        />
      </Link>
      <LinkStyled to="/profile">
        {user.avatarURL ? (
          <img src={user.avatarURL} alt="avatar" width="24" height="24" />
        ) : (
          <Icon
            name="user"
            iconWidth={{ mobile: '21px', tablet: '24px' }}
            iconHeight={{ mobile: '21px', tablet: '24px' }}
            stroke={'rgba(239, 237, 232, 0.3)'}
          />
        )}
      </LinkStyled>
    </>
  );
};
