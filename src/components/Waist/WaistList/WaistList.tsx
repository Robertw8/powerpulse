import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getExercises, selectIsLoading } from '../../../redux/exercises';
import { WaistItemUl, WaistListContainer } from './WaistList.styled';
import { selectExercises, selectFilters } from '../../../redux/exercises';

import NotFoundExercises from './NotFoundExercises';
import { Loader } from '../..';
import { BackgroundImage } from '../../Products/Products.styled';
import { BackButton } from '../../Exercises/BackButton';
import bg from '../../../assets/images/ImgForWelcomePage/imgAuthPageMob.png';

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
      }, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowNotFound(false);
    }
  }, [exercises, isLoading]);

  return (
    <WaistListContainer>
      <BackgroundImage>
        <img src={bg} alt="woman" />
      </BackgroundImage>
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
