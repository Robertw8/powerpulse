import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getExercises } from '../../../redux/exercises';
import {
  NoExercisesTitle,
  WaistItemUl,
  WaistListContainer,
} from './WaistList.styled';
import { selectExercises, selectFilters } from '../../../redux/exercises';

const WaistList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const exercises = useSelector(selectExercises);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      getExercises({
        filter: filters.filter,
        category: filters.category,
      })
    );
  }, [dispatch, filters.category, filters.filter]);

  const visibleExercises =
    exercises &&
    exercises.filter(
      exercise =>
        exercise.name ||
        exercise.target ||
        exercise.equipment === exercise.bodyPart
    );

  return (
    <WaistListContainer>
      <WaistItemUl className="scrollbar-outer">
        {visibleExercises && visibleExercises.length ? (
          visibleExercises
            .slice(0, 50)
            .map((waistItem, key) => (
              <WaistItem key={key} exercise={waistItem} />
            ))
        ) : (
          <NoExercisesTitle>
            {/* There is not exercises downloaded else, plaese try choose this
            categorie later!!! */}
          </NoExercisesTitle>
        )}
      </WaistItemUl>
    </WaistListContainer>
  );
};

export default WaistList;
