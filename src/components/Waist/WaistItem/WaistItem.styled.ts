import styled from '@emotion/styled';
import { palette } from '../../../styles/index';
import { Button } from 'antd';

const WaistItemLi = styled.li`
  width: 100%;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${palette.colors.white30};
  background: ${palette.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition-duration: 150ms;
  text-transform: capitalize;
  @media screen and (min-width: 376px) {
    width: 335px;
  }

  @media screen and (min-width: 769px) {
    height: 160px;
  }

  @media screen and (min-width: 1441px) {
    width: 405px;
  }

  &:hover {
    background-color: #efede80a;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const CardLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: ${palette.colors.white};

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
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
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #efede8 !important;
    transform: translateX(5px);

    svg {
      stroke: #efede8;
    }
  }

  @media screen and (min-width: 769px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

const ExercisesTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
const Title = styled.h3`
  position: relative;
  font-size: 24px;
  line-height: 1.333;
  color: ${palette.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  width: 263px;

  @media screen and (min-width: 768px) {
    width: 285px;
  }
`;

const SpanExerciseRun = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.colors.beige};
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 4px 16px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: ${palette.colors.white};
  font-size: 12px;
  line-height: calc(18 / 12);
`;

const ListItemValue = styled.span`
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
  ListItem,
  ListItemValue,
  List,
  WaistItemLi,
  AddButton,
  BtnWrapper,
  CardLabel,
  SpanExerciseRun,
  ExercisesTitleBox,
  Title,
};
