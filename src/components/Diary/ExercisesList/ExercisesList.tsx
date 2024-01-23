import { useEffect } from 'react';
import { List, ListWrapper } from './ExercisesList.styled';
import { Loader } from '../..';
import { ExercisesGrid } from '../ExercisesGrid';
import { useDiary } from '../../../hooks';

// import { ProductsItem } from '../ProductsItem';

const ExercisesList: React.FC = () => {
  const { diaryExercises, isLoading } = useDiary();

  useEffect(() => {
    if (!diaryExercises.length && !isLoading) {
      const timeoutId = setTimeout(() => {}, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [diaryExercises, isLoading]);

  return (
    <ListWrapper>
      <List className="scrollbar-outer">
        {diaryExercises.map((exercise, index) => (
          <ExercisesGrid exercise={exercise} key={index} id={exercise._id} />
        ))}
        {isLoading && <Loader />}
      </List>
    </ListWrapper>
  );
};
export default ExercisesList;
