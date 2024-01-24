import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { List } from './ExercisesList.styled'
import { Loader } from '../..';
import {selectExercises ,selectIsLoading} from '../../../redux/diary';
import { DiaryExercisesItem } from '../ExerciseItem';

// import { ProductsItem } from '../ProductsItem';


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

     
      <List  className="scrollbar-outer">
        {exercises.map((exercise,index) => (
          <DiaryExercisesItem
          exercise={exercise} key={index} id={exercise._id} />
        ))}
        {isLoading && <Loader />}
      </List>
 
  );
};
export default ExercisesList;
