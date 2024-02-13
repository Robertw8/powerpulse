import { useState } from 'react';
import { useAuth } from '../../../hooks';

import { UserBar, MobileMenu, MobileMenuBtn, UserNav } from '..';
import { Icon, LogoutButton } from '../..';
import {
  HeaderContainer,
  LinkLogo,
  UserContainer,
  HeaderWrap,
  UserBarWrapper,
  NavWrap,
  Wrapper,
} from './Header.styled';
import { ContainerAuth } from '../../Container';
import routes from '../../../routes';

const Header: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper
      style={
        isLoggedIn
          ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
          : { borderBottom: 'none' }
      }
    >
      <ContainerAuth>
        <HeaderContainer isLoggedIn={isLoggedIn}>
          <HeaderWrap>
            <LinkLogo
              to={!isLoggedIn && !isRefreshing ? routes.WELCOME : routes.DIARY}
            >
              <Icon
                name="logo"
                iconWidth={{ mobile: '36px', tablet: '44px' }}
                iconHeight={{ mobile: '13px', tablet: '17px' }}
              />
              <span>PowerPulse</span>
            </LinkLogo>

            {isLoggedIn && (
              <UserContainer>
                <NavWrap>
                  <UserNav />
                </NavWrap>
                <UserBarWrapper>
                  <UserBar />
                  <LogoutButton className="desktop" />
                  <MobileMenuBtn onClick={toggleMenu} />
                  <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                </UserBarWrapper>
              </UserContainer>
            )}
          </HeaderWrap>
        </HeaderContainer>
      </ContainerAuth>
    </Wrapper>
  );
};

export default Header;
