import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import { LinkStyled } from './UserBar.styled';

export const UserBar = () => {
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
