import styled from '@emotion/styled';
import { Button, Modal } from 'antd';
import { palette } from '../../../styles';

const StyledModal = styled(Modal)`
  @media screen and (min-width: 769px) {
    width: 700px !important;
  }

  .ant-modal-content {
    padding: 64px 32px 48px 32px;
    background-color: ${palette.colors.bg} !important;
    border: 1px solid ${palette.colors.white20};

    @media screen and (max-width: 375px) {
      padding: 64px 8px 16px 8px;
    }

    .ant-modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 16px;
      }
    }
  }
`;

const TimerColumn = styled.div``;

const InfoColumn = styled.div``;

const GifWrapper = styled.div`
  width: 270px;
  height: 230px;
  border-radius: 12px;

  img {
    border-radius: 12px;
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerTitle = styled.p`
  margin: 10px 0;
  color: ${palette.colors.white40};
  font-size: 10px;
  line-height: calc(14 / 10);
`;

const TimeRemaining = styled.span`
  font-size: 16px;
  line-height: calc(24 / 16);
  color: ${palette.colors.white};
`;

const TimerButton = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 6px;
  margin-top: 14px;

  background-color: ${palette.colors.orange};
`;

const BurnedCalories = styled.p`
  margin-top: 8px;
  color: ${palette.colors.white30};
  font-size: 14px;
  line-height: calc(18 / 14);
`;

const Value = styled.span`
  color: ${palette.colors.orange};
  margin-left: 8px;
`;

const InfoWrapper = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const InfoItem = styled.li`
  width: 130px;
  padding: 12px 18px;
  border: 1px solid ${palette.colors.white20};

  background-color: ${palette.colors.white5};
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    width: 140px;
  }

  @media screen and (min-width: 768px) {
    width: 170px;
  }
`;

const ItemName = styled.p`
  color: ${palette.colors.white40};
  font-size: 12px;
  line-height: calc(16 / 12);
`;

const ItemValue = styled.p`
  margin-top: 4px;
  color: ${palette.colors.white};
  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 700;
  text-transform: capitalize;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 162px;
    margin-left: auto;
    margin-top: 320px;
  }
`;

export {
  StyledModal,
  TimerColumn,
  InfoColumn,
  GifWrapper,
  TimerWrapper,
  TimerButton,
  TimerTitle,
  InfoWrapper,
  ButtonWrapper,
  TimeRemaining,
  BurnedCalories,
  Value,
  InfoList,
  InfoItem,
  ItemName,
  ItemValue,
};
