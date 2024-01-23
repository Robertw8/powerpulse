import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getExercises } from '../../../redux/exercises';
import { WaistItemUl, WaistListContainer } from './WaistList.styled';
import { selectExercises, selectFilters } from '../../../redux/exercises';
import {
  Message,
  OrangeText,
} from '../../Products/NotFoundMessage/NotFoundMessage.styled';

const WaistList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const exercises = useSelector(selectExercises);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      getExercises({
        filter: 'choice',
        category: filters.category,
      })
    );
  }, [dispatch, filters.category, filters.filter]);

  return (
    <WaistListContainer>
      <WaistItemUl className="scrollbar-outer">
        {exercises.length ? (
          exercises.map((waistItem, key) => (
            <WaistItem key={key} exercise={waistItem} />
          ))
        ) : (
          <Message>
            There is <OrangeText>not exercises</OrangeText>
            downloaded else, plaese try choose this categorie later
          </Message>
        )}
      </WaistItemUl>
    </WaistListContainer>
  );
};

export default WaistList;
