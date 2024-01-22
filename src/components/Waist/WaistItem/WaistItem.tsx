import {
  BtnLabel,
  BtnWrapper,
  CardLabel,
  ExercisesTitleBox,
  List,
  ListItem,
  ListItemValue,
  SpanExerciseRun,
  SvgExercise,
  SvgExerciseRun,
  Title,
  WaistItemLi,
} from './WaistItem.styled';
import sprite from '../../../assets/images/sprite.svg';

import React, { useState } from 'react';
import { Exercise } from '../../../redux/exercises/types';
import { AddExerciseModal } from '../AddExerciseModal';
import { ExerciseAddedModal } from '../ExerciseAddedMo.styled.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store.ts';
import getCurrentDate from '../../../helpers/getCurrentDate.ts';
import { addDiaryExercise } from '../../../redux/diary/operations.ts';

interface List {
  burnedCalories: string;
  bodyPart: string;
  target: string;
}

interface WaistProps {
  exercise: Exercise;
}
interface Texts {
  cardLabel: string;
  btnLabel: string;
  list: List;
}

const texts: Texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};
const WaistItem: React.FC<WaistProps> = ({ exercise }) => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleExerciseAdd = () => {
    dispatch(
      addDiaryExercise({
        id: exercise._id,
        calories: exercise.burnedCalories,
        date: getCurrentDate(),
        time: exercise.time,
      })
    );
    if (isFirstModalOpen) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  };

  return (
    <>
      <WaistItemLi>
        <BtnWrapper>
          <CardLabel>{texts.cardLabel}</CardLabel>
          <BtnLabel type="button" onClick={() => setIsFirstModalOpen(true)}>
            {texts.btnLabel}
            <span>
              <SvgExercise>
                <use href={`${sprite}#icon-arrow-right`}></use>
              </SvgExercise>
            </span>
          </BtnLabel>
        </BtnWrapper>
        <ExercisesTitleBox>
          <SpanExerciseRun>
            <SvgExerciseRun width={24} height={24}>
              <use href={`${sprite}#icon-running`}></use>
              <use href={`${sprite}#icon-running-figure`}></use>
            </SvgExerciseRun>
          </SpanExerciseRun>
          <Title>{exercise.name}</Title>
        </ExercisesTitleBox>
        <List>
          <ListItem>
            {texts.list.burnedCalories}
            <ListItemValue>{exercise.burnedCalories}</ListItemValue>
          </ListItem>
          <ListItem>
            {texts.list.bodyPart}
            <ListItemValue>{exercise.bodyPart}</ListItemValue>
          </ListItem>
          <ListItem>
            {texts.list.target}
            <ListItemValue>{exercise.target}</ListItemValue>
          </ListItem>
        </List>
      </WaistItemLi>
      <AddExerciseModal
        open={isFirstModalOpen}
        exercise={exercise}
        handleOk={handleExerciseAdd}
        handleCancel={() => setIsFirstModalOpen(false)}
      />
      <ExerciseAddedModal
        open={isSecondModalOpen}
        handleClose={() => setIsSecondModalOpen(false)}
        burnedCalories={exercise.burnedCalories}
        time={exercise.time}
      />
    </>
  );
};

export default WaistItem;
export type { WaistProps };
