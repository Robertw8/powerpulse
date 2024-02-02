import styled from '@emotion/styled';
import { palette } from '../../../styles';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkStyled = styled(NavLink)`
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  color: ${palette.colors.white};
  text-decoration: none;

  border-radius: 12px;
  transition: all 250ms linear;

  &.active {
    background-color: ${palette.colors.orange};
  }

  &:hover,
  &:focus {
    border: 1px solid ${palette.colors.orange};
  }
`;

export { NavList, LinkStyled };
