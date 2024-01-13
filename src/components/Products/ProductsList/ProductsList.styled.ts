import styled from '@emotion/styled';

const List = styled.ul`
  width: 100%;
  margin-top: 40px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px 16px;

    max-height: 660px;
  }

  @media screen and (min-width: 1441px) {
    max-height: 490px;
    max-width: 840px;
  }
`;

export { List };
