import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import {
  getWaistExercises,
  selectFilter,
  
} from '../../../redux/Waist';
import {
  NoExercisesTitle,
  WaistItemUl,
  WaistListContainer,
} from './WaistList.styled';
import { selectWaistExercises } from '../../../redux/Waist/selectorWaist';

const WaistList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const exercises = useSelector(selectWaistExercises);
  const filters = useSelector(selectFilter);
  useEffect(() => {
    dispatch(
      getWaistExercises({
        query: filters.query,
        page: filters.page,
        limit: filters.limit,
      })
    );
  }, [dispatch, filters.limit, filters.page, filters.query]);

  console.log(filters);

  // if (!Array.isArray(exercises)) {
  //   return (
  //     <WaistListContainer>
  //       <NoExercisesTitle>
  //         Loading exercises...
  //       </NoExercisesTitle>
  //     </WaistListContainer>
  //   );
  // }
  const visibleExercises =
    exercises &&
    exercises.filter(
      exercise =>
        exercise.name ||
        exercise.target ||
        exercise.equipment === exercise.bodyPart
    );
    console.log(exercises)
  console.log(visibleExercises);

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
