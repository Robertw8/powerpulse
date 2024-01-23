import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation} from "react-router-dom";
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
  const [title, setTitle] = useState<string>('Exercises')
  
  const navigate = useNavigate();
  const location = useLocation();
  const filters = useSelector(selectFilters);
  
  useEffect(() => {
    if (filters.filter !== "") {
      setTitle(filters.filter)
    } else {
      setTitle('Exercises')
    }

    if (location.pathname === `/exercises`)
      navigate("/exercises/bodyPart");
  }, [filters.filter, location.pathname, navigate])

  return (
    <ExercisesWrap>
      <BackButton />
      <TopWrap>
        <PageTitle text={title} />
      <ExercisesCategories/>
      </TopWrap>
      <Outlet />
      <BackgroundImage>
        <img src={bg} alt="woman" />
      </BackgroundImage>
    </ExercisesWrap>
  )
}
export default Exercises;

    

