import styled from '@emotion/styled';

const Item = styled.li`
  width: 100%;
  padding: 16px;
  @media screen and (min-width: 376px) {
 
  }

  @media screen and (min-width: 769px) {

  }

  @media screen and (min-width: 1441px) {
 
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
`;



const Status = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;

  font-size: 12px;
  line-height: calc(18 / 12);
`;

const StatusRound = styled.span<{ recommended: boolean }>`
  display: inline-block;
  width: 14px;
  height: 14px;

  background-color: ${({ recommended }) =>
    recommended ? '#419B09' : '#E9101D'};
  border-radius: 50%;
`;


const BottomRow = styled.div`
  margin-top: 35px;
`;

const NameRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Name = styled.p`
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: capitalize;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (min-width: 376px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }

  @media screen and (min-width: 769px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

const NameIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  width: 24px;
  height: 24px;

  background-color: #efa082;
  border-radius: 50%;
`;

const SpecificationsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const SpecificationsItem = styled.li`
  display: flex;
  gap: 4px;

  font-size: 12px;
  line-height: calc(18 / 12);
`;

const SpecificationName = styled.p`
  color: #efede866;
`;

const SpecificationValue = styled.p`
  color: #efa082;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 30px;
  white-space: nowrap;

  @media screen and (min-width: 376px) {
    max-width: 70px;
  }

  @media screen and (min-width: 1441px) {
    max-width: 120px;
  }
`;

export {
  Item,
  TopRow,

  Status,
  StatusRound,

  BottomRow,
  NameRow,
  Name,
  NameIconWrapper,
  SpecificationsList,
  SpecificationsItem,
  SpecificationName,
  SpecificationValue,
};
