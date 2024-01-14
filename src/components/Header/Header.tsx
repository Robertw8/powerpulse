import { Container } from '..';

import { MobileMenuBtn } from '../MobileMenuBtn/MobileMenuBtn';

// import { PrimaryButton } from '..';

// import MobileMenu from '..';

import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';

// import { UserMenu } from '..';

import { HeaderContainer, LinkLogo, UserContainer } from './Header.styled';

// import { useState } from 'react';

const Header: React.FC<{ testAuth: boolean }> = ({ testAuth }) => {
  return (
    <Container>
      <HeaderContainer
        style={
          testAuth
            ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
            : { borderBottom: 'none' }
        }
        /* <PrimaryButton type="primary" /> */
      >
        <LinkLogo to="/">
          <Icon
            name="logo"
            iconWidth={{ mobile: '126px', tablet: '152px' }}
            iconHeight={{ mobile: '13px', tablet: '17px' }}
          />
        </LinkLogo>
        <UserContainer>
          {testAuth && (
            <>
              {/* <MobileMenuBtn />
               <UserMenu />

              <MobileMenu isOpen={isOpen} />  */}
            </>
          )}
        </UserContainer>
        <div style={{ marginTop: 50, display: 'flex', gap: '30px' }}>
          <Link to="/">Home</Link>
          <Link to="/welcome">Welcome</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/diary">Diary</Link>
          <Link to="/products">Products</Link>
          <Link to="/exercises">Exercises</Link>
        </div>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
