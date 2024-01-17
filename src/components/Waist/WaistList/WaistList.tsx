import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getWaistExercises } from '../../../redux/Waist';
import {
  ImgWaist,
  NoExercisesTitle,
  WaistItemUl,
  WaistListContainer,
} from './WaistList.styled';
import images from '../../../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import { WaistExercises } from '../../../redux/Waist/types';
import { RootState } from '../../../redux/rootReducer';
export interface WaistProps {
  waistItem: WaistExercises;
}

const WaistList: React.FC<WaistProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWaistExercises({}));
  }, [dispatch]);

  const exercises = useSelector(
    (state: RootState) => state.exercises.exercises
  );
  console.log(exercises);
  const visibleExercises =
    exercises &&
    exercises.filter(
      exercise =>
        exercise.bodyPart ||
        exercise.target ||
        exercise.equipment === exercise.name
    );

  return (
    <WaistListContainer>
      <WaistItemUl>
        {visibleExercises && visibleExercises.length ? (
          visibleExercises
            .slice(0, 50)
            .map(el => <WaistItem key={el._id} waistItem={el} />)
        ) : (
          <NoExercisesTitle>
            There is not exercises downloaded else, plaese try choose this
            categorie later!!!
          </NoExercisesTitle>
        )}
      </WaistItemUl>
      <ImgWaist src={images} alt="image" />
    </WaistListContainer>
  );
};

export default WaistList;
