import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getExercises, selectFilters } from '../../../redux/exercises';
import {
  NoExercisesTitle,
  WaistItemUl,
  WaistListContainer,
} from './WaistList.styled';
import { selectExercises } from '../../../redux/exercises';

const WaistList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const exercises = useSelector(selectExercises);
  const filters = useSelector(selectFilters);
  useEffect(() => {
    dispatch(
      getExercises({
        filter: '',
        category: '',
      })
    );
  }, [dispatch, filters.limit, filters.page, filters.query]);

  console.log(filters);

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
      <WaistItemUl>
        {visibleExercises && visibleExercises.length ? (
          visibleExercises
            .slice(0, 50)
            .map((waistItem, key) => (
              <WaistItem key={key} waistItem={waistItem} />
            ))
        ) : (
          <NoExercisesTitle>
            There is not exercises downloaded else, plaese try choose this
            categorie later!!!
          </NoExercisesTitle>
        )}
      </WaistItemUl>
    </WaistListContainer>
  );
};

export default WaistList;
