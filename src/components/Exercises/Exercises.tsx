import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/exercises';

import { ExercisesCategories } from './ExercisesCategories';
import { PageTitle } from '..';
import { ExercisesWrap, TopWrap} from './Exercises.styled';

export type Category = 'bodyPart' | 'muscles' | 'equipment';

const Exercises: React.FC = () => {
  const [title, setTitle] = useState<string>('Exercises')
  
  const navigate = useNavigate();
  const location = useLocation();
  const filters = useSelector(selectFilters);
  
  useEffect(() => {
    if (filters.category !== "") {
      setTitle(filters.category)
    } else {
      setTitle('Exercises')
    }

    if (location.pathname === `/exercises`)
      navigate("/exercises/bodyPart");

  }, [filters.category, location.pathname, navigate])

  return (
    <ExercisesWrap>
      <TopWrap>
        <PageTitle text={title} />
      <ExercisesCategories/>
      </TopWrap>
      <Outlet />
    </ExercisesWrap>
  )
}
export default Exercises;

