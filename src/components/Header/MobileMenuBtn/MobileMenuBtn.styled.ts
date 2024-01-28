import styled from '@emotion/styled';

const Button = styled.button`
  display: none;
  border: none;
  padding: 0px;

  background: none;
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    display: block;
  }
`;

export { Button };
