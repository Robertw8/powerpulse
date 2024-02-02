import styled from '@emotion/styled';
import { palette } from '../../../styles';
import { Link } from 'react-router-dom';

interface HeaderContainerProps {
  isLoggedIn: boolean;
}

const Wrapper = styled.div`
  background-color: ${palette.colors.black};
`;

const HeaderContainer = styled.header<HeaderContainerProps>`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 32px;
    position: ${props => (props.isLoggedIn ? 'relative' : 'absolute')};
    z-index: 10;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkLogo = styled(Link)`
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);
  text-decoration: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 19px;
    width: 150px;
  }
`;

const NavWrap = styled.nav`
  margin-right: 32px;

  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const UserBarWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export {
  Wrapper,
  HeaderContainer,
  HeaderWrap,
  LinkLogo,
  NavWrap,
  UserContainer,
  UserBarWrapper,
};
