import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NotFoundExercises from './NotFoundExercises';
import WaistItem from '../WaistItem/WaistItem';
import { BackButton } from '../../Exercises/BackButton';
import { Loader } from '../..';
import { WaistItemUl, WaistListContainer } from './WaistList.styled';

import { getExercises, selectIsLoading } from '../../../redux/exercises';
import { selectExercises, selectFilters } from '../../../redux/exercises';
import { AppDispatch } from '../../../redux';

const WaistList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const exercises = useSelector(selectExercises);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    dispatch(
      getExercises({
        filter: 'choice',
        category: filters.category,
      })
    );
  }, [dispatch, filters.category, filters.filter]);

  useEffect(() => {
    if (!exercises.length && !isLoading) {
      const timeoutId = setTimeout(() => {
        setShowNotFound(true);
      }, 100);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowNotFound(false);
    }
  }, [exercises, isLoading]);

  return (
    <WaistListContainer>
      <BackButton />
      {showNotFound && <NotFoundExercises />}
      <WaistItemUl className="scrollbar-outer">
        {exercises.map((waistItem, key) => (
          <WaistItem key={key} exercise={waistItem} />
        ))}
        {isLoading && <Loader />}
      </WaistItemUl>
    </WaistListContainer>
  );
};

export default WaistList;
