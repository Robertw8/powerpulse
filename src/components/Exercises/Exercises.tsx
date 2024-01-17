import { useState, useEffect } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { apiService } from '../../services';

import { PageTitle } from '..';
import { ExercisesSlider } from './ExercisesSlider';
import { ExercisesCategories } from './ExercisesCategories';

import { ExercisesWrap, TopWrap, LoaderWrap } from './Exercises.styled';

export type Category = 'Body parts' | 'Muscles' | 'Equipment';

const Exercises: React.FC = () => {
  
  const [currentCategory, setCurrentCategory] = useState<Category>('Body parts');
  const [exercisesList, setExercisesList] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  

  useEffect(() => {

    window.screen.width >= 768 && window.screen.width < 1440 ? setLimit(9) : setLimit(10);

    const responce = apiService({
      method: 'get', url: `/exercises/${currentCategory}?page=${page}&limit=${limit}`
    });
    setIsLoading(true);
    responce
      .then(({ data }) => setExercisesList(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  },[currentCategory, limit, page])

  return (
    <ExercisesWrap>
      
      <TopWrap>
          {isLoading &&
        <LoaderWrap>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 34 }} spin />} />
        </LoaderWrap>}
        <PageTitle text={'Exercises'} />
        <ExercisesCategories
          changeCategory={setCurrentCategory}
          setPage={setPage}
        />
      </TopWrap>
      <ExercisesSlider
        exercisesList={exercisesList}
        currentCategory={currentCategory}
        setPage={setPage} />
    </ExercisesWrap>
  );
};

export default Exercises;
