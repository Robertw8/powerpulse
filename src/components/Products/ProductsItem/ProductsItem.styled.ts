import styled from '@emotion/styled';
import { Button } from 'antd';
import { palette } from '../../../styles';

const Item = styled.li`
  width: 100%;
  height: 150px;
  padding: 16px;
  border: 1px solid ${palette.colors.white20};

  border-radius: 12px;
  background-color: ${palette.colors.white5};
  transition-duration: 150ms;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    height: 160px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }

  &:hover {
    background-color: ${palette.colors.white5};
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
`;

const Badge = styled.p`
  display: inline;
  padding: 5px 7px;

  font-weight: 700;
  font-size: 12px;
  line-height: calc(14 / 12);

  background-color: ${palette.colors.white5};
  border-radius: 4px;
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

const AddButton = styled(Button)`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 3px 6px;
  margin-left: 16px;

  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${palette.colors.orange};

  &:hover {
    color: ${palette.colors.white} !important;
    transform: translateX(5px);

    svg {
      stroke: ${palette.colors.white};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
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

  @media screen and (min-width: 375px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }

  @media screen and (min-width: 768px) {
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

  background-color: ${palette.colors.beige};
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
  color: ${palette.colors.white40};
`;

const SpecificationValue = styled.p`
  color: ${palette.colors.beige};
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 30px;
  white-space: nowrap;

  @media screen and (min-width: 375px) {
    max-width: 70px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 120px;
  }
`;

export {
  Item,
  TopRow,
  Badge,
  Status,
  StatusRound,
  AddButton,
  BottomRow,
  NameRow,
  Name,
  NameIconWrapper,
  SpecificationsList,
  SpecificationsItem,
  SpecificationName,
  SpecificationValue,
};
