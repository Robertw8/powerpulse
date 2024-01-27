import React from 'react';

import { Icon } from '../../Icon';
import { Exercise } from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';

import {
  ExerciseWrap,
  TitleCol,
  ValueCol,
  ValueColTitle,
  ValueColName,
  Row,
  MobileRow,
  MobileTitleRow,
  MiniValueCol,
  IconWrap,
  MiniTitleCol,
  TopRow,
  BottomRow,
} from './ExerciseItem.styled';
import { deleteDiaryExercise } from '../../../redux/diary';
import { useDispatch } from 'react-redux';
import { Button, ConfigProvider, Popconfirm, Popover } from 'antd';

const ucFirst = str => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};
interface ExerciseItemProps {
  exercise: Exercise;
  id: string;
}
const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise, id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleExerciseDelete = () => {
    dispatch(deleteDiaryExercise(id));
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            colorText: '#EFEDE8',
          },
        },
      }}
    >
      <ExerciseWrap>
        <TopRow>
          <Row>
            <TitleCol>Body Part</TitleCol>
            <Popover placement="topLeft" content={exercise.bodyPart}>
              <ValueCol>
                <p>{ucFirst(exercise.bodyPart)}</p>
              </ValueCol>
            </Popover>
          </Row>
          <Row>
            <TitleCol>Equipment</TitleCol>
            <Popover placement="topLeft" content={exercise.equipment}>
              <ValueColTitle>
                <p>{ucFirst(exercise.equipment)}</p>
              </ValueColTitle>
            </Popover>
          </Row>
          <Row>
            <TitleCol>Name</TitleCol>
            <Popover placement="topLeft" content={exercise.name}>
              <ValueColName>
                <p>{ucFirst(exercise.name)}</p>
              </ValueColName>
            </Popover>
          </Row>
        </TopRow>
        <BottomRow>
          <MobileTitleRow>
            <MiniTitleCol>Target</MiniTitleCol>
            <MiniTitleCol>Burned Calories</MiniTitleCol>
            <MiniTitleCol>Time</MiniTitleCol>
          </MobileTitleRow>
          <MobileRow>
            <MiniValueCol>
              <Popover placement="topLeft" content={exercise.target}>
                <p>{exercise.target}</p>
              </Popover>
            </MiniValueCol>
            <MiniValueCol>
              <p>{exercise.calories || 0}</p>
            </MiniValueCol>
            <MiniValueCol>{exercise.time}</MiniValueCol>
            <IconWrap className="icon-delete">
              <Popconfirm
                title="Delete a product"
                description="Are you sure to delete this product?"
                onConfirm={handleExerciseDelete}
              >
                <Button
                  type="text"
                  style={{ padding: 0, height: 0, margin: 0 }}
                >
                  <Icon
                    name="delete"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                    stroke="#EF8964"
                  />
                </Button>
              </Popconfirm>
            </IconWrap>
          </MobileRow>
        </BottomRow>
      </ExerciseWrap>
    </ConfigProvider>
  );
};

export default ExerciseItem;
