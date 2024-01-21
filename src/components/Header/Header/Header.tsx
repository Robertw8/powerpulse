import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks';
import { useDispatch } from 'react-redux';
import routes from '../../../routes';
import { AppDispatch } from '../../../redux';
import { getCurrentUser } from '../../../redux/auth';

import UserBar from '../UserBar/UserBar';
import UserNav from '../UserNav/UserNav';
import LogOutBtn from '../../LogoutBtn/LogoutBtn';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import MobileMenu from '../MobileMenu/MobileMenu';
import Icon from '../../Icon/Icon';
import { Container } from '../..';
import {
  HeaderContainer,
  LinkLogo,
  UserContainer,
  HeaderWrap,
  UserBarWrapper,
  NavWrap,
} from './Header.styled';

const Header: React.FC = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch, isLoggedIn]);

  return (
    <div
      style={
        isLoggedIn
          ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
          : { borderBottom: 'none' }
      }
    >
      <Container>
        <HeaderContainer>
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
                  <LogOutBtn className="desktop" />
                  <MobileMenuBtn onClick={toggleMenu} />
                  <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                </UserBarWrapper>
              </UserContainer>
            )}
          </HeaderWrap>
        </HeaderContainer>
      </Container>
    </div>
  );
};

export default Header;
