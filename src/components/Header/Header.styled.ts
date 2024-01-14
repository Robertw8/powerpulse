import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  /* margin: 0 auto; */

  background-color: var('--black-color');

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
export const LinkLogo = styled(Link)`
  margin-right: auto;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: black;
`;
