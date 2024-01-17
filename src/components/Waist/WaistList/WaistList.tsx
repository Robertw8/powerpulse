import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getWaistExercises, selectWaist } from '../../../redux/Waist';
import {
  ImgWaist,
  NoExercisesTitle,
  WaistItemUl,
  WaistListContainer,
} from './WaistList.styled';
import { WaistExercises } from '../../../redux/Waist/sliceExercises';
import images from '../../../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
export interface WaistProps {
  data: WaistExercises;
}

const WaistList: React.FC<WaistProps> = data => {
  // const { data } = props || {};

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWaistExercises({}));
  }, [dispatch]);

  const exercises = useSelector(selectWaist);
  console.log(exercises);
  const visibleExercises =
    exercises &&
    exercises.filter(
      exercise =>
        exercise.bodyPart ||
        exercise.target ||
        exercise.equipment === data.data.name
    );

  return (
    <WaistListContainer>
      <WaistItemUl>
        {visibleExercises && visibleExercises.length ? (
          visibleExercises
            .slice(0, 50)
            .map(el => <WaistItem key={el._id} waistItem={{ date: el }} />)
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
