import styled from '@emotion/styled';
import { palette } from '../../../styles/theme';
import { Link } from 'react-router-dom';

export const SettingsLink = styled(Link)`
  &.active {
    background-color: ${palette.colors.red};
  }
  &:hover,
  &:focus {
    svg {
      stroke: ${palette.colors.red};
    }
  }
`;
export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border: 1px solid ${palette.colors.orange};
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
