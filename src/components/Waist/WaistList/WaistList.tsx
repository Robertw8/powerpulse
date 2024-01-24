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
import { BackButton } from '../../Exercises/BackButton';
import { BackgroundImage } from '../../Products/Products.styled';
import bg from '../../../assets/images/ImgForWelcomePage/imgAuthPageMob.png';


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
      <BackgroundImage>
        <img src={bg} alt="woman" />
      </BackgroundImage>
      <BackButton/>
      <WaistItemUl className="scrollbar-outer">
        {exercises.length ? (
          exercises.map((waistItem, key) => (
            <WaistItem key={key} exercise={waistItem} />
          ))
        ) : (
          <NoExercisesTitle>
            {/* There is not exercises downloaded else, plaese try choose this
            categorie later */}
          </NoExercisesTitle>
        )}
      </WaistItemUl>
    </WaistListContainer>
  );
};

export default WaistList;
