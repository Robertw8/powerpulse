import styled from '@emotion/styled';
import { palette } from '../../../styles/theme';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 10px 27px;
  transition: background-color 250ms linear;
  text-decoration: none;
  &.active {
    background-color: ${palette.colors.orange};
  }

  &:hover,
  &:focus {
    background-color: ${palette.colors.orange};
  }
`;
