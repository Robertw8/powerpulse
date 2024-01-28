import useAuth from '../../../hooks/useAuth';
import { LinkStyled, SettingsLink, Avatar } from './UserBar.styled';
import Icon from '../../Icon/Icon';

export const UserBar = () => {
  const { user } = useAuth();
  const { avatarURL } = user;

  return (
    <>
      <SettingsLink to="/profile">
        <Icon
          name="settings"
          iconWidth={{ mobile: '24px', tablet: '28px' }}
          iconHeight={{ mobile: '24px', tablet: '28px' }}
          stroke={'rgba(239, 237, 232, 0.3)'}
        />
      </SettingsLink>
      <LinkStyled to="/profile">
        {avatarURL ? (
          <Avatar src={avatarURL} width={46} height={46} alt="Avatar" />
        ) : (
          <Icon
            name="user"
            iconWidth={{ mobile: '21px', tablet: '24px' }}
            iconHeight={{ mobile: '21px', tablet: '24px' }}
            stroke="rgba(239, 237, 232, 0.3)"
          />
        )}
      </LinkStyled>
    </>
  );
};

export default UserBar;
