import { ModalProps } from 'antd';
import { Icon, PrimaryButton } from '../..';
import {
  StyledModal,
  GifWrapper,
  TimerWrapper,
  TimerTitle,
  InfoWrapper,
  ButtonWrapper,
  TimeRemaining,
  TimerButton,
  BurnedCalories,
  Value,
  InfoList,
  InfoItem,
  ItemName,
  ItemValue,
  TimerColumn,
  InfoColumn,
} from './AddExerciseModal.styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { formatTime } from '../../../helpers';
import { Exercise } from '../../../redux/exercises/types';
import { useState } from 'react';

interface AddExerciseModalProps extends ModalProps {
  handleCancel: () => void;
  handleOk: () => void;
  exercise: Exercise;
}

const AddExerciseModal: React.FC<AddExerciseModalProps> = ({
  open,
  handleCancel,
  handleOk,
  exercise,
}) => {
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);

  const timerValue = () => {
    if (exercise.time) {
      return exercise.time * 60;
    }

    return 3;
  };

  return (
    <StyledModal
      open={open}
      closeIcon={
        <Icon
          name="x"
          iconWidth={{ mobile: '22px', tablet: '26px' }}
          iconHeight={{ mobile: '22px', tablet: '26px' }}
        />
      }
      keyboard
      footer={null}
      maskClosable
      onOk={handleOk}
      onCancel={handleCancel}
      focusTriggerAfterClose={false}
    >
      <TimerColumn>
        <GifWrapper>
          <img src={exercise.gifUrl} alt="exercise" />
        </GifWrapper>
        <TimerWrapper>
          <TimerTitle>Time</TimerTitle>
          <CountdownCircleTimer
            colors={'#E6533C'}
            isPlaying={isTimerStarted}
            duration={timerValue()}
            strokeWidth={4}
            trailColor="#EFEDE81A"
            trailStrokeWidth={2}
            rotation="counterclockwise"
          >
            {({ remainingTime }) => (
              <TimeRemaining>{formatTime(remainingTime)}</TimeRemaining>
            )}
          </CountdownCircleTimer>
          <TimerButton type="primary" onClick={() => setIsTimerStarted(true)}>
            <Icon
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              iconHeight={{ mobile: '16px', tablet: '16px' }}
              name="pause"
            />
          </TimerButton>
          <BurnedCalories>
            Burned calories:<Value>{exercise.burnedCalories}</Value>
          </BurnedCalories>
        </TimerWrapper>
      </TimerColumn>
      <InfoColumn>
        <InfoWrapper>
          <InfoList>
            <InfoItem>
              <ItemName>Name</ItemName>
              <ItemValue>{exercise.name}</ItemValue>
            </InfoItem>
            <InfoItem>
              <ItemName>Target</ItemName>
              <ItemValue>{exercise.target}</ItemValue>
            </InfoItem>
            <InfoItem>
              <ItemName>Body part</ItemName>
              <ItemValue>{exercise.bodyPart}</ItemValue>
            </InfoItem>
            <InfoItem>
              <ItemName>Equipment</ItemName>
              <ItemValue>{exercise.equipment}</ItemValue>
            </InfoItem>
          </InfoList>
        </InfoWrapper>
        <ButtonWrapper>
          <PrimaryButton
            text="Add to diary"
            sizes="small"
            type="primary"
            onclick={handleOk}
          />
        </ButtonWrapper>
      </InfoColumn>
    </StyledModal>
  );
};

export default AddExerciseModal;
