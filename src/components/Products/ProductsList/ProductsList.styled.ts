import styled from '@emotion/styled';

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  position: relative;

  @media screen and (min-width: 1441px) {
    max-width: 840px;
    margin-top: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 12px;
  overflow-y: auto;

  @media screen and (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px 16px;

    max-height: 560px;
  }

  @media screen and (min-width: 1441px) {
    max-width: 840px;
  }
`;

export { List, ListWrapper };
