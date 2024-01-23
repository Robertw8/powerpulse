import styled from '@emotion/styled';

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  position: relative;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: auto;
`;

export { List, ListWrapper };
