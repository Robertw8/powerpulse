import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { List, DesktopTitleWrap,
  DesktopTitle,
  DesktopCategory,
  DesktopStyled,
  DesktopName} from './ExercisesList.styled'
import { Loader } from '../..';
import {selectExercises ,selectIsLoading} from '../../../redux/diary';
import { DiaryExercisesItem } from '../ExerciseItem';





const ExercisesList: React.FC = () => {

  const exercises= useSelector(selectExercises);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!exercises.length && !isLoading) {
      const timeoutId = setTimeout(() => {
       
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    } 
  }, [exercises, isLoading]);

  return (

      <List  >
            <DesktopTitleWrap>
  <DesktopTitle><p>Body Part</p></DesktopTitle>
  <DesktopCategory><p>Equipment</p></DesktopCategory>
  <  DesktopName><p>Name</p></  DesktopName>
  <  DesktopStyled><p>Target</p></  DesktopStyled>
  <  DesktopStyled><p>Burned Calor.</p></  DesktopStyled>
  <  DesktopStyled><p>Time</p></  DesktopStyled>
  </DesktopTitleWrap>
        {exercises.map((exercise,index) => (
          <DiaryExercisesItem
          exercise={exercise} key={index} id={exercise._id} />
        ))}
        {isLoading && <Loader />}
      </List>
 
  );
};
export default ExercisesList;
