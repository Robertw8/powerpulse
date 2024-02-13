import styled from '@emotion/styled';
import { Button } from 'antd';
import { palette } from '../../../styles';

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

export {
  TimerWrapper,
  TimerTitle,
  TimeRemaining,
  TimerButton,
  BurnedCalories,
  Value,
};
