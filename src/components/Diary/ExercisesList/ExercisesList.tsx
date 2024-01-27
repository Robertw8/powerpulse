import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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
import { selectExercises, selectIsLoading } from '../../../redux/diary';

const ExercisesList: React.FC = () => {
  const exercises = useSelector(selectExercises);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!exercises.length && !isLoading) {
      const timeoutId = setTimeout(() => {
        return <DiaryNotFoundItems items="products" />;
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [exercises, isLoading]);

  return (
    exercises && (
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
        {exercises.map((exercise, index) => (
          <ExerciseItem exercise={exercise} key={index} id={exercise._id} />
        ))}
      </List>
    )
  );
};
export default ExercisesList;
