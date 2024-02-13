import { useDiary } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Icon, PrimaryButton } from '../..';
import { Timer } from '../Timer';
import {
  StyledModal,
  GifWrapper,
  InfoWrapper,
  ButtonWrapper,
  InfoList,
  InfoItem,
  ItemName,
  ItemValue,
  TimerColumn,
  InfoColumn,
} from './AddExerciseModal.styled';

import {
  calculateBurnedCalories,
  callToast,
  getCurrentDate,
} from '../../../helpers';
import { addDiaryExercise } from '../../../redux/diary';
import {
  setBurnedCalories,
  setTime,
  type Exercise,
} from '../../../redux/exercises';
import fallback from '../../../assets/images/fallback.jpg';

import type { ModalProps } from 'antd';
import type { AppDispatch } from '../../../redux';

interface AddExerciseModalProps extends ModalProps {
  exercise: Exercise;
}

const AddExerciseModal: React.FC<AddExerciseModalProps> = ({
  exercise,
  open,
  onCancel,
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
    setCaloriesBurnedByTime(
      calculateBurnedCalories(timerValue, exercise.burnedCalories)
    );

    dispatch(setTime(timerValue));
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
      onCancel={onCancel}
      focusTriggerAfterClose={false}
      destroyOnClose
    >
      <TimerColumn>
        <GifWrapper>
          <img src={exercise.gifUrl || fallback} alt="exercise" />
        </GifWrapper>
        <Timer
          exercise={exercise}
          isStarted={isTimerStarted}
          handleChange={handleTimerChange}
          handleStart={handleTimerStart}
          burnedCalories={caloriesBurnedByTime}
        />
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
            onClick={handleOk}
            loading={isLoading}
          />
        </ButtonWrapper>
      </InfoColumn>
    </StyledModal>
  );
};

export default AddExerciseModal;
