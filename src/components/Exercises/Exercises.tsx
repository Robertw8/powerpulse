import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { selectFilters } from '../../redux/exercises';

import { ExercisesCategories } from './ExercisesCategories';
import { PageTitle } from '..';
import { ExercisesWrap, TopWrap, BackgroundImage } from './Exercises.styled';

import bg from '../../assets/images/ImgForWelcomePage/ImgForWelcomePageMob.webp';

export type Category = 'bodyPart' | 'muscles' | 'equipment';

const Exercises: React.FC = () => {
  const [backgound, setBackground] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {filter} = useSelector(selectFilters);

  useEffect(() => {
    if (
      location.pathname !== '/exercises' &&
      location.pathname !== '/exercises/bodyPart' &&
      location.pathname !== '/exercises/muscles' &&
      location.pathname !== '/exercises/equipment'
    ) {
      setBackground(true);
    } else {
      setBackground(false);
    }

    if (location.pathname === `/exercises`) navigate(`/exercises/${filter}`);
  }, [filter, location.pathname, navigate]);

  return (
    <ExercisesWrap>
      <TopWrap>
        <PageTitle text={'Exercises'} />
        <ExercisesCategories />
      </TopWrap>
      {backgound && (
        <BackgroundImage>
          <img src={bg} alt="woman" />
        </BackgroundImage>
      )}
      <Outlet />
    </ExercisesWrap>
  );
};
export default Exercises;
