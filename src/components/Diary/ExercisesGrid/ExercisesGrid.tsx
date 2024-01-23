import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import { AppDispatch } from '../../../redux'
import { deleteDiaryExercise} from '../../../redux/diary'
import { Icon } from '../../Icon';
import { Exercise } from '../../../redux/diary/types';
import { TitleCol,ValueCol } from './ExercisesGrid.styled';

interface ProductsItemProps {
  exercise: Exercise;
}


const ExercisesGrid: React.FC<ProductsItemProps> = ({ exercise }) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleExerciseDelete=() => {
        // dispatch(addDiaryProduct(product));
     dispatch(
       deleteDiaryExercise('65adae565fda1b9b34886ba2')
     );
   };
  return (
    <>
      <Row>
        <TitleCol>Body Part</TitleCol>
      </Row>
      <Row>
        <ValueCol >{exercise.bodyPart}</ValueCol>
      </Row>
      <Row>
        <TitleCol>Equipment</TitleCol>
      </Row>
      <Row>
        <ValueCol>{exercise.equipment}</ValueCol>
      </Row>
      <Row>
        <TitleCol>Name</TitleCol>
      </Row>
      <Row>
        <ValueCol>{exercise.name}</ValueCol>
      </Row>

      <Row justify="start" gutter={40}>
        <TitleCol>Target</TitleCol>
        <TitleCol>Burned Calories</TitleCol>
        <TitleCol>Time</TitleCol>
      </Row>
      <Row justify="start" gutter={[80, 40]}>
        <ValueCol>{exercise.target}</ValueCol>
        <ValueCol>{exercise.burnedCalories}</ValueCol>
        <ValueCol>
       {exercise.time}
        </ValueCol>
        <Col onClick={handleExerciseDelete}>
          {' '}
          <Icon
            name="delete"
            iconWidth={{ mobile: '40px', tablet: '40px' }}
            fill="#EFEDE8"
            stroke="#EFEDE8"
          />
        </Col>
      </Row>
    </>
  );
};

export default ExercisesGrid;
