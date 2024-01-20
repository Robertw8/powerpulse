import styled from '@emotion/styled';
import { palette } from '../../styles/theme';

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.colors.white};
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &.desktop {
    @media screen and (max-width: 1439px) {
      display: none;
    }
  }
  &.desktopProfile {
    @media screen and (max-width: 1439px) {
      display: ;
    }
  }
`;
export const Text = styled.span`
  margin-right: 8px;
  color: ${palette.colors.white};
`;
