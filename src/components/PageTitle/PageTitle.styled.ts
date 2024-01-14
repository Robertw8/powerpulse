import styled from '@emotion/styled';

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(28 / 24);
  margin: 40px 0;

  @media screen and (min-width: 769px) {
    font-size: 32px;
    line-height: calc(44 / 32);
    margin: 72px 0 32px;
  }
`;

export { Title };
