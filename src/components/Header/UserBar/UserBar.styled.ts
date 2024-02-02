import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { palette } from '../../../styles';
import { Link } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SettingsLink = styled(Link)`
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
const LinkStyled = styled(Link)`
  width: 37px;
  height: 37px;
  border: 1px solid ${palette.colors.orange};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

const Avatar = styled.img`
  width: 37px;
  height: 37px;
  border: 1px solid ${palette.colors.orange};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export { SettingsLink, LinkStyled, Avatar };
