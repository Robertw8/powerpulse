import styled from '@emotion/styled';
// export const Button = styled.button`

//   display: none;
//   @media screen and (max-width: 1439px) {
//      display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 78px;
//   height: 20px;
//   padding: 0;
//   color: #efede8;
//   font-size: 16px;
//   background-color: unset;
//   }
// `;

import { Link } from 'react-router-dom';

export const LogoutBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  text-decoration: none;
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
export const Text = styled.span`
  margin-right: 8px;
`;
