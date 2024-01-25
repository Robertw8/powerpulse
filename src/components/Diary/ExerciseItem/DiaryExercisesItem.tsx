import React from 'react';

import { Icon } from '../../Icon';
import { Exercise } from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';

import {
  ExerciseWrap,
  TitleCol,
  ValueCol,
  ValueColTitle,ValueColName,
  Row,
  MobileRow,
  MobileTitleRow,
  MiniValueCol,
  IconWrap,
  MiniTitleCol,
  TopRow,
  BottomRow
} from './DiaryExercisesItem.styled';
import { deleteDiaryExercise } from '../../../redux/diary';
import { useDispatch } from 'react-redux';
// import { Button, Popconfirm } from 'antd';
const ucFirst=(str)=> {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
interface ExerciseItemProps {
  exercise: Exercise;
  id: string;
}
const DiaryExercisesItem: React.FC<ExerciseItemProps> = ({ exercise, id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleExerciseDelete = () => {
    dispatch(deleteDiaryExercise(id));
  };
  return (
    <ExerciseWrap>
      <TopRow>
        {' '}
        <Row>
          <TitleCol>Body Part</TitleCol>
          <ValueCol>
            <p>{ucFirst(exercise.bodyPart)}</p>
          </ValueCol>
        </Row>
        <Row>
          <TitleCol>Equipment</TitleCol>
          <ValueColTitle>
            <p>{ucFirst(exercise.equipment)}</p>
          </ValueColTitle>
        </Row>
        <Row>
          <TitleCol>Name</TitleCol>
          <ValueColName>
            <p style={{width:'fit-content',height:"18px"}}>{ucFirst(exercise.name)}</p>
          </ValueColName>
        </Row>
      </TopRow>
      <BottomRow >
      <MobileTitleRow>
        <MiniTitleCol>Target</MiniTitleCol>
        <MiniTitleCol style={{ fontSize: '11px' }}>
          Burned Calories
        </MiniTitleCol>
        <MiniTitleCol>Time</MiniTitleCol>
      </MobileTitleRow>
      <MobileRow>
        <MiniValueCol>
          <p>{exercise.target}</p>
        </MiniValueCol>
        <MiniValueCol>
          <p>{exercise.calories ||0}</p>
        </MiniValueCol>
        <MiniValueCol>{exercise.time}</MiniValueCol>
        <IconWrap  className='icon-delete' onClick={handleExerciseDelete}>
          {/* <Popconfirm
            title="Delete a product"
            description="Are you sure to delete this product?"
            onConfirm={handleExerciseDelete}
          >
            <Button type="text"> */}
              <Icon
                name="delete"
                iconWidth={{ mobile: '20px', tablet: '20px' }}
                iconHeight={{ mobile: '20px', tablet: '20px' }}
                stroke="#EF8964"
              />
            {/* </Button>
          </Popconfirm> */}
        </IconWrap>
      </MobileRow>
      </BottomRow>
    </ExerciseWrap>
  );
};

export default DiaryExercisesItem;
