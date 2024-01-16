import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux';
import WaistItem from '../WaistItem/WaistItem';
import { getWaistExercises, selectWaist } from '../../../redux/auth/Waist';
import {
  ImgWaist,
  NoExercisesTitle,
  WaistItemUl,
  WaistListContainer,
} from './WaistList.styled';
import { WaistExercises } from '../../../redux/auth/Waist/sliceExercises';
import images from "../../../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg"
// import { List, ListWrapper } from '../../Products/ProductsList/ProductsList.styled';
export interface WaistProps {
  // waistItem: {
  //   data: {
  //     name: string;
  //     burnedCalories: number;
  //     target: string;
  //     bodyPart: string;
  //   };
  // };
  
  // name, burnedCalories, target, bodyPart

  data: WaistExercises;
}

const WaistList: React.FC<WaistProps> = (props) => {
  
  const { data  } = props || {};

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWaistExercises({}));
  }, [dispatch]);

  const exercises = useSelector(selectWaist);
  console.log(exercises)
  const visibleExercises = exercises && exercises.filter(
    exercise =>
      exercise.bodyPart || exercise.target || exercise.equipment === data.name
  );

  return (
    
     <WaistListContainer>
      <WaistItemUl> 
        {/* <ListWrapper> <List className='scrollbar-outer'> */}
        {visibleExercises && visibleExercises.length ? (
          visibleExercises
            .slice(0, 50)
            .map(el => 
            <WaistItem key={el._id} waistItem={{ date: el }} 
   
            />)
        ) : (
          <NoExercisesTitle>
            There is not exercises downloaded else, plaese try choose this
            categorie later!!!
          </NoExercisesTitle>
        )}
        {/* </List> */}
      </WaistItemUl>
      <ImgWaist src={images} alt="image" />
   {/* </ListWrapper> */}
     </WaistListContainer>
 
  );
};

export default WaistList;
