import styled from '@emotion/styled';
import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
import { palette } from '../../../styles/theme';

export const DrawerStyled = styled(Drawer)`
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

  @media screen and (max-width: 1439px) {
    &.shown {
      right: 0;
    }

    transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Logout = styled.button`
  position: absolute;
  bottom: 26px;
  left: 32px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);
  outline: none;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const NavMenu = styled.nav`
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

export const NavLinkStyled = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: ${palette.colors.white};

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

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
  margin-right: 0;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;
export const Appeal = styled.div`
  margin-top: 202px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  color: ${palette.colors.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: auto;
  text-transform: uppercase;
  text-align: center;
`;
