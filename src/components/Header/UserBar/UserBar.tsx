import { LinkStyled, SettingsLink } from './UserBar.styled';
import Icon from '../../Icon/Icon';
// import { Link } from 'react-router-dom';

export const UserBar = () => {
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
        <Icon
          name="user"
          iconWidth={{ mobile: '21px', tablet: '24px' }}
          iconHeight={{ mobile: '21px', tablet: '24px' }}
          stroke="rgba(239, 237, 232, 0.3)"
        />
      </LinkStyled>
    </>
  );
};

export default UserBar;
