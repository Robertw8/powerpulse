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

import React from 'react';
import { WaistExercises } from '../../../redux/Waist/types';

interface List {
  burnedCalories: string;
  bodyPart: string;
  target: string;
}

export interface WaistProps {
  waistItem: WaistExercises;
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
const WaistItem: React.FC<WaistProps> = ({ waistItem }) => {
  const { name, burnedCalories, target, bodyPart } = waistItem;
  return (
    <>
      <WaistItemLi>
        <BtnWrapper>
          <CardLabel>{texts.cardLabel}</CardLabel>
          <BtnLabel type="button">
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
          <Title>{name}</Title>
        </ExercisesTitleBox>
        <List>
          <ListItem>
            {texts.list.burnedCalories}
            <ListItemValue>{burnedCalories}</ListItemValue>
          </ListItem>
          <ListItem>
            {texts.list.bodyPart}
            <ListItemValue>{bodyPart}</ListItemValue>
          </ListItem>
          <ListItem>
            {texts.list.target}
            <ListItemValue>{target}</ListItemValue>
          </ListItem>
        </List>
      </WaistItemLi>
    </>
  );
};

export default WaistItem;
