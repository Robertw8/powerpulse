import styled from '@emotion/styled';
import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
import { palette } from '../../../styles';

const DrawerStyled = styled(Drawer)`
  .ant-drawer-header-close-only {
    display: none;
  }

  .ant-drawer-body {
    padding: 20px;

    @media screen and (min-width: 768px) {
      padding: 32px;
    }
  }

  &.ant-drawer-content {
    background-color: ${palette.colors.orange};
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  }

  .ant-drawer-close {
    display: none;
  }

  @media screen and (max-width: 1440px) {
    &.shown {
      right: 0;
    }

    transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const Logout = styled.button`
  position: absolute;
  bottom: 26px;
  left: 20px;

  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  padding: 0px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);

  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    left: 32px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin-top: 202px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;

  @media screen and (min-width: 768px) {
    margin-top: 222px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: none;
  color: ${palette.colors.white};

  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &.active,
  &:hover,
  &:focus {
    border: 1px solid ${palette.colors.white};
    color: ${palette.colors.white};
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 0px;
  margin-right: 0;
  margin-left: auto;
  border: none;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;
const Appeal = styled.div`
  margin-top: 202px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  width: auto;

  color: ${palette.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
`;

export { DrawerStyled, Logout, NavMenu, NavLinkStyled, CloseBtn, Appeal };
