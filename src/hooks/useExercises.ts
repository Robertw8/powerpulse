import { useSelector } from 'react-redux';
import {
  selectBodyPart,
  selectIsLoading,
  selectFilters,
  selectExercises,
  selectBurnedCalories,
  selectTime,
} from '../redux/exercises';

const useExercises = () => {
  const bodyPart = useSelector(selectBodyPart);
  const isLoading = useSelector(selectIsLoading);
  const exercisesFilters = useSelector(selectFilters);
  const exercises = useSelector(selectExercises);
  const burnedCalories = useSelector(selectBurnedCalories);
  const time = useSelector(selectTime);
  const filters = useSelector(selectFilters);

  return {
    bodyPart,
    isLoading,
    exercisesFilters,
    exercises,
    burnedCalories,
    time,
    filters,
  };
};

export default useExercises;
