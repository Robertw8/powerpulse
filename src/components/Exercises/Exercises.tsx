import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/exercises';

import { ExercisesCategories } from './ExercisesCategories';
import { PageTitle } from '..';
import { ExercisesWrap, TopWrap, BackgroundImage} from './Exercises.styled';
import { setFilters } from '../../redux/exercises';

import bg from '../../assets/images/ImgForWelcomePage/ImgForWelcomePageMob.webp';


export type Category = 'bodyPart' | 'muscles' | 'equipment';

const Exercises: React.FC = () => {
  const [backgound, setBackground] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (location.pathname !== '/exercises' &&
      location.pathname !== '/exercises/bodyPart' &&
      location.pathname !== '/exercises/muscles' &&
      location.pathname !== '/exercises/equipment') {
      setBackground(true)
    } else {
      setBackground(false)
    }
        
    dispatch(setFilters(filters.filter ? filters.filter : 'bodyPart', ""))
    
    if (location.pathname === `/exercises`)
      navigate("/exercises/bodyPart");

      return () => {
      dispatch(setFilters("bodyPart",""))
    };

  }, [dispatch, filters.category, filters.filter, location.pathname, navigate])

  return (
    <ExercisesWrap>
      <TopWrap>
        <PageTitle text={"Exercises"} />
      <ExercisesCategories/>
      </TopWrap>
      {backgound && <BackgroundImage>
        <img src={bg} alt="woman" />
      </BackgroundImage>}
      <Outlet />
    </ExercisesWrap>
  )
}
export default Exercises;