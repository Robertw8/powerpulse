import styled from '@emotion/styled';

const ListWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: 1440px) {
    max-width: 840px;
    margin-top: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  overflow-y: auto;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px 16px;

    max-height: 560px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 840px;
  }
`;

export { List, ListWrapper };
