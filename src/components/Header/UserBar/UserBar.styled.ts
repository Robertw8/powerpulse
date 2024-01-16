import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Icon = styled.svg`
  display: inline-block;
  padding: 10px;
  &:hover,
  &:focus {
    fill: red;
  }
`;
export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid #e6533c;
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);
`;
