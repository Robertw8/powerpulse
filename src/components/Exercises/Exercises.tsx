import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { apiService } from '../../services';

import { PageTitle } from '..';
import { ExercisesSlider } from './ExercisesSlider';
import { ExercisesCategories } from './ExercisesCategories';
import { NotFoundMessage } from '../Products';
import { BackgroundImage } from '../Products/Products.styled';
import { ExercisesWrap, TopWrap, LoaderWrap } from './Exercises.styled';
import { WaistList } from '../Waist';
import { BackButton } from './BackButton';

import bg from '../../assets/images/ImgForWelcomePage/imgAuthPageMob.png';
// import bg from '../../assets/images/ImgForWelcomePage/ImgForWelcomePageMob.png';

export type Category = 'bodyPart' | 'muscles' | 'equipment';

const Exercises: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>('bodyPart');
  const [currentExercise, setCurrentExercise] = useState<string>('');
  const [exercisesList, setExercisesList] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [exercisesPage, toggleExercisesPage] = useState<boolean>(false);

  const currentfilter = (category: string) => {
    if (category === 'bodyPart') {
      return 'Body parts';
    } else if (category === 'muscles') {
      return 'Muscles';
    } else {
      return 'Equipment';
    }
  };

  useEffect(() => {
    window.screen.width >= 768 && window.screen.width < 1440
      ? setLimit(9)
      : setLimit(10);

    const filter = currentfilter(currentCategory);

    const responce = apiService({
      method: 'get',
      url: `/exercises/${filter}?page=${page}&limit=${limit}`,
    });
    setIsLoading(true);
    responce
      .then(({ data, totalItems }) => {
        if (!data.length) return setErrorPage(true);
        setExercisesList(data);
        setTotal(totalItems);
      })
      .catch(() => {
        setErrorPage(true);
      })
      .finally(() => setIsLoading(false));
  }, [currentCategory, limit, page]);

  return (
    <ExercisesWrap>
      {exercisesPage && (
        <BackButton
          toggle={toggleExercisesPage}
          filter={currentCategory}
          setCurrentExercise={setCurrentExercise}
        />
      )}
      <TopWrap>
        {isLoading && (
          <LoaderWrap>
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 34 }} spin />}
            />
          </LoaderWrap>
        )}
        <PageTitle text={currentExercise ? currentExercise : 'Exercises'} />
        <ExercisesCategories
          changeCategory={setCurrentCategory}
          setPage={setPage}
          exercisesPage={exercisesPage}
        />
      </TopWrap>
      {errorPage && <NotFoundMessage />}
      {!exercisesPage ? (
        <ExercisesSlider
          setCurrentExercise={setCurrentExercise}
          exercisesList={exercisesList}
          setPage={setPage}
          total={total}
          limit={limit}
          isLoading={isLoading}
          category={currentCategory}
          toggleExercisesPage={toggleExercisesPage}
        />
      ) : (
        <WaistList />
      )}
      {exercisesPage && (
        <BackgroundImage>
          <img src={bg} alt="woman" />
        </BackgroundImage>
      )}
    </ExercisesWrap>
  );
};

export default Exercises;
