import { useDiary } from '../../../hooks';

import {
  List,
  DesktopTitleWrap,
  DesktopTitle,
  DesktopCategory,
  DesktopStyled,
  DesktopName,
} from './ExercisesList.styled';
import { ExerciseItem } from '../ExerciseItem';
import { DiaryNotFoundItems } from '../DiaryNotFoundItems';

const ExercisesList: React.FC = () => {
  const { diaryExercises } = useDiary();

  return diaryExercises.length ? (
    <List className="scrollbar-inner">
      <DesktopTitleWrap>
        <DesktopTitle>
          <p>Body Part</p>
        </DesktopTitle>
        <DesktopCategory>
          <p>Equipment</p>
        </DesktopCategory>
        <DesktopName>
          <p>Name</p>
        </DesktopName>
        <DesktopStyled>
          <p>Target</p>
        </DesktopStyled>
        <DesktopStyled>
          <p>Burned Calor.</p>
        </DesktopStyled>
        <DesktopStyled>
          <p>Time</p>
        </DesktopStyled>
      </DesktopTitleWrap>
      {diaryExercises.map((exercise, index) => (
        <ExerciseItem exercise={exercise} key={index} id={exercise._id} />
      ))}
    </List>
  ) : (
    <DiaryNotFoundItems items="exercises" />
  );
};
export default ExercisesList;
