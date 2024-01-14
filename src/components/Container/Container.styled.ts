import styled from '@emotion/styled';

const ResponsiveContainer = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    width: 100%;
    max-width: 375px;
    padding: 0 10px;
  }

  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 375px;
    padding: 0 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1441px) {
    width: 1440px;
    padding: 0 96px;
  }
`;

export { ResponsiveContainer };
