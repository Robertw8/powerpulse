import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useExercises } from '../../../hooks';

import NotFoundExercises from './NotFoundExercises';
import { WaistItem } from '..';
import { BackButton } from '../../Exercises/BackButton';
import { Loader } from '../..';
import { WaistItemUl, WaistListContainer } from './WaistList.styled';

import { getExercises } from '../../../redux/exercises';
import type { AppDispatch } from '../../../redux';

const WaistList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { exercises, filters, isLoading } = useExercises();
  const [showNotFound, setShowNotFound] = useState<boolean>(false);

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
