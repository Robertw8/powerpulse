import { useDiary } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

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

import {
  calculateBurnedCalories,
  callToast,
  formatTime,
  getCurrentDate,
} from '../../../helpers';
import { Exercise } from '../../../redux/exercises/types';
import { AppDispatch } from '../../../redux';
import { addDiaryExercise } from '../../../redux/diary';
import { setBurnedCalories, setTime } from '../../../redux/exercises';
import { ModalProps } from 'antd';
import fallback from '../../../assets/images/fallback.jpg';

interface AddExerciseModalProps extends ModalProps {
  handleCancel: () => void;
  exercise: Exercise;
}

const AddExerciseModal: React.FC<AddExerciseModalProps> = ({
  exercise,
  open,
  handleCancel,
}) => {
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [timerValue, setTimerValue] = useState<number>(0);
  const [caloriesBurnedByTime, setCaloriesBurnedByTime] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useDiary();

  const handleOk = () => {
    if (timerValue < 11)
      return callToast(
        'error',
        'You need to do exercise for at least 10 seconds to add to the diary'
      );
    dispatch(setBurnedCalories(caloriesBurnedByTime));
    dispatch(
      addDiaryExercise({
        id: exercise._id,
        calories: calculateBurnedCalories(timerValue, exercise.burnedCalories),
        date: getCurrentDate(),
        time: timerValue,
      })
    );
  };

  const handleTimerChange = () => {
    setTimerValue(prevTimerValue => prevTimerValue + 1);
    dispatch(setTime(timerValue));
    setCaloriesBurnedByTime(
      calculateBurnedCalories(timerValue, exercise.burnedCalories)
    );
  };

  const handleTimerStart = () => {
    setIsTimerStarted(!isTimerStarted);
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
      destroyOnClose
    >
      <TimerColumn>
        <GifWrapper>
          <img src={exercise.gifUrl || fallback} alt="exercise" />
        </GifWrapper>
        <TimerWrapper>
          <TimerTitle>Time</TimerTitle>
          <CountdownCircleTimer
            colors={'#E6533C'}
            isPlaying={isTimerStarted}
            duration={exercise.time * 60}
            strokeWidth={4}
            trailColor="#EFEDE81A"
            trailStrokeWidth={2}
            rotation="counterclockwise"
            onUpdate={handleTimerChange}
            onComplete={() =>
              callToast(
                'success',
                `You've finished exercise with ${caloriesBurnedByTime} calories burned. Great work!`,
                10000
              )
            }
          >
            {({ remainingTime }) => (
              <TimeRemaining>{formatTime(remainingTime)}</TimeRemaining>
            )}
          </CountdownCircleTimer>
          <TimerButton type="primary" onClick={handleTimerStart}>
            {!isTimerStarted ? (
              <Icon
                iconWidth={{ mobile: '16px', tablet: '16px' }}
                iconHeight={{
                  mobile: '16px',
                  tablet: '16px',
                }}
                name="play"
              />
            ) : (
              <Icon
                iconWidth={{ mobile: '16px', tablet: '16px' }}
                iconHeight={{ mobile: '16px', tablet: '16px' }}
                name="pause"
              />
            )}
          </TimerButton>
          <BurnedCalories>
            Burned calories:
            <Value>{caloriesBurnedByTime}</Value>
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
            loading={isLoading}
          />
        </ButtonWrapper>
      </InfoColumn>
    </StyledModal>
  );
};

export default AddExerciseModal;
