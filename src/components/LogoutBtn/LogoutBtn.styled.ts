import styled from '@emotion/styled';
import { palette } from '../../styles/theme';

import { Link } from 'react-router-dom';

export const LogoutBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.colors.white};
  text-decoration: none;
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
export const Text = styled.span`
  margin-right: 8px;
`;
