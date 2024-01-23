import { useSelector } from 'react-redux';
import {
  selectProducts,
  selectExercises,
  selectCaloriesBurned,
  selectCaloriesConsumed,
  selectCaloriesRemaining,
  selectSportsTime,
 
  selectIsLoading,
  selectError,
} from '../redux/diary';

const useDiary = () => {
  const diaryProducts = useSelector(selectProducts);
  const diaryExercises = useSelector(selectExercises);
  const caloriesBurned = useSelector(selectCaloriesBurned);
  const caloriesConsumed = useSelector(selectCaloriesConsumed);
  const caloriesRemaining = useSelector(selectCaloriesRemaining);
  const sportsTime = useSelector(selectSportsTime);

  const isLoading = useSelector(selectIsLoading);
  const diaryError = useSelector(selectError);

  return {
    diaryProducts,
    diaryExercises,
    caloriesBurned,
    caloriesConsumed,
    caloriesRemaining,
    sportsTime,

    isLoading,
    diaryError,
  };
};

export default useDiary;
