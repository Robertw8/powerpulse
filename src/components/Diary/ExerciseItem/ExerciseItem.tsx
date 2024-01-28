import { useDispatch } from 'react-redux';

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
import { Icon } from '../../Icon';
import { ConfigProvider, Popconfirm, Popover } from 'antd';

import { deleteDiaryExercise } from '../../../redux/diary';
import { Exercise } from '../../../redux/diary/types';
import { AppDispatch } from '../../../redux';

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
                <p>{exercise.bodyPart}</p>
              </ValueCol>
            </Popover>
          </Row>
          <Row>
            <TitleCol>Equipment</TitleCol>
            <Popover placement="topLeft" content={exercise.equipment}>
              <ValueColTitle>
                <p>{exercise.equipment}</p>
              </ValueColTitle>
            </Popover>
          </Row>
          <Row>
            <TitleCol>Name</TitleCol>
            <Popover placement="topLeft" content={exercise.name}>
              <ValueColName>
                <p>{exercise.name}</p>
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
            <IconWrap>
              <Popconfirm
                title="Delete a product"
                description="Are you sure to delete this product?"
                onConfirm={handleExerciseDelete}
              >
                <button
                  type="button"
                  style={{
                    padding: 0,
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  aria-label="delete exercise"
                >
                  <Icon
                    name="delete"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                    stroke="#EF8964"
                  />
                </button>
              </Popconfirm>
            </IconWrap>
          </MobileRow>
        </BottomRow>
      </ExerciseWrap>
    </ConfigProvider>
  );
};

export default ExerciseItem;
