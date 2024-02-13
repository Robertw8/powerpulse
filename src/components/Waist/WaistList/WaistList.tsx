import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useExercises, useNotFoundTimeout } from '../../../hooks';

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

  useEffect(() => {
    dispatch(
      getExercises({
        filter: 'choice',
        category: filters.category,
      })
    );
  }, [dispatch, filters.category, filters.filter]);

  const notFound = useNotFoundTimeout(exercises, isLoading);

  return (
    <WaistListContainer>
      <BackButton />
      {notFound && <NotFoundExercises />}
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
