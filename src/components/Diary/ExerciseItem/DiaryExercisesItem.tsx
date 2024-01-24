import React from 'react';

import { Icon } from '../../Icon';
import { Exercise} from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';

import { TitleCol,ValueCol,Row,MobileRow,MiniValueCol,IconWrap, MiniTitleCol, ExerciseWrap ,TopRow} from './DiaryExercisesItem.styled'
import { deleteDiaryExercise } from '../../../redux/diary';
import { useDispatch } from 'react-redux';

interface ExerciseItemProps {
  exercise: Exercise;
  id:string
}
const DiaryExercisesItem: React.FC<ExerciseItemProps> = ({ exercise,id }) => {


 

 
  
  const dispatch = useDispatch<AppDispatch>();
  const handleExerciseDelete=() => {

   dispatch(
     deleteDiaryExercise(id)
   );
 };
  return (
    <ExerciseWrap>
     <TopRow> <Row>
        <TitleCol>Body Part</TitleCol>
        <ValueCol><p>{exercise.bodyPart}</p></ValueCol>
      </Row>
      <Row>
        <TitleCol>Equipment</TitleCol>
        <ValueCol ><p>{exercise.equipment}</p></ValueCol>
      </Row>
      <Row>
        <TitleCol>Name</TitleCol>
        <ValueCol ><p>{exercise.name}</p></ValueCol>
      </Row>
      </TopRow>

      <MobileRow >
        <MiniTitleCol>Target</MiniTitleCol>
        <MiniTitleCol style={{fontSize: '11px'}}>Burned Calories</MiniTitleCol>
        <MiniTitleCol>Time</MiniTitleCol>
      </MobileRow>
      <MobileRow>
        <MiniValueCol><p>{exercise.target}</p></MiniValueCol>
        <MiniValueCol><p>{exercise.burnedCalories}</p></MiniValueCol>
        <MiniValueCol>
        {exercise.time}
        </MiniValueCol>
    <IconWrap>    <Icon 
    onClick={handleExerciseDelete}
    name="delete"
    iconWidth={{ mobile: '20px', tablet: '20px' }}
    stroke="#EF8964"
          />
          </IconWrap>
      </MobileRow>
    </ExerciseWrap>
  );
};

export default DiaryExercisesItem;
