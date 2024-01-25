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
import {  ConfigProvider, Popconfirm,Popover} from 'antd';
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
    <ConfigProvider
    theme={{
      components: {
        Popover: {
         colorText:'#EFEDE8',
        },
       
      },
    }}>
    <ExerciseWrap>
      <TopRow>
        {' '}
        <Row>
          <TitleCol>Body Part</TitleCol>
          <Popover placement="topLeft"  
          content={exercise.bodyPart}
          >
          <ValueCol>
            <p>{ucFirst(exercise.bodyPart)}</p>
          </ValueCol>
          </Popover>
        </Row>
        <Row>
          <TitleCol>Equipment</TitleCol>
          <Popover placement="topLeft" content={exercise.equipment} >
          <ValueColTitle>
            <p>{ucFirst(exercise.equipment)}</p>
          </ValueColTitle>
          </Popover>
        </Row>
        <Row>
          <TitleCol>Name</TitleCol>
          <Popover placement="topLeft" content={exercise.name} >
          <ValueColName>
            <p style={{width:'fit-content',height:"18px"}}>{ucFirst(exercise.name)}</p>
          </ValueColName>
          </Popover>
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
        <IconWrap  className='icon-delete' >
           <Popconfirm
            title="Delete a product"
            description="Are you sure to delete this product?"
            onConfirm={handleExerciseDelete}
          >
         
              <Icon
                name="delete"
                iconWidth={{ mobile: '20px', tablet: '20px' }}
                iconHeight={{ mobile: '20px', tablet: '20px' }}
                stroke="#EF8964"
              />
    
          </Popconfirm> 
        </IconWrap>
      </MobileRow>
      </BottomRow>
    </ExerciseWrap>
    </ConfigProvider>
  );
};

export default DiaryExercisesItem;
