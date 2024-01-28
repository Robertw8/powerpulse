import styled from '@emotion/styled';

const Title = styled.h1`
  margin: 40px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(28 / 24);
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    margin: 72px 0 32px;
    font-size: 32px;
    line-height: calc(44 / 32);
  }
`;

export { Title };
