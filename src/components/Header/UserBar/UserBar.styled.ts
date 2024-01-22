import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { palette } from '../../../styles/theme';
import { Link } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SettingsLink = styled(Link)`
  &:active,
  &:focus {
    svg {
      stroke: ${palette.colors.orange};

    }
  }
  &:hover {
    svg {
      stroke: ${palette.colors.orange};
      animation: ${rotate} 2s linear infinite;
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

export const Avatar = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border-radius: 50%;
  border: 1px solid ${palette.colors.orange};

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
