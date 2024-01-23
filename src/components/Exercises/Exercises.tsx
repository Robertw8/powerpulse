import { useEffect } from 'react';
import { Outlet, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/exercises';

import { ExercisesCategories } from './ExercisesCategories';
import { PageTitle } from '..';
import { BackgroundImage } from '../Products/Products.styled';
import { ExercisesWrap, TopWrap} from './Exercises.styled';
import { BackButton } from './BackButton';

export type Category = 'bodyPart' | 'muscles' | 'equipment';
import bg from '../../assets/images/ImgForWelcomePage/imgAuthPageMob.png';

const Exercises: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/exercises/bodyPart")
  }, [])
  
  const filters = useSelector(selectFilters); 

  return (
    <ExercisesWrap>
      {filters.category && <BackButton />}
      <TopWrap>
        <PageTitle text={
        !filters.category ? 'Exercises' : filters.category} />
      <ExercisesCategories/>
      </TopWrap>
      <Outlet />
      {filters.category && <BackgroundImage>
        <img src={bg} alt="woman" />
      </BackgroundImage>}
    </ExercisesWrap>
  )
}
export default Exercises;

    

