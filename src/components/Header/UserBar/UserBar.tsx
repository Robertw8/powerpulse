import { Link } from 'react-router-dom';

import Icon from '../../Icon/Icon';
import { LinkStyled } from './UserBar.styled';

export const UserBar = () => {
  return (
    <>
      <Link to="/profile">
        <Icon
          name="settings"
          iconWidth={{ mobile: '36px', tablet: '44px' }}
          iconHeight={{ mobile: '13px', tablet: '17px' }}
          stroke="rgba(239, 237, 232, 0.3)"
        />
      </Link>
      <LinkStyled to="/profile">
        <Icon
          name="user"
          iconWidth={{ mobile: '36px', tablet: '44px' }}
          iconHeight={{ mobile: '13px', tablet: '17px' }}
          stroke="rgba(239, 237, 232, 0.3)"
        />
      </LinkStyled>
    </>
  );
};
