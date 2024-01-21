import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { apiService } from '../../services';

import { BackButton } from './BackButton';
import { PageTitle } from '..';
import { ExercisesSlider } from './ExercisesSlider';
import { ExercisesCategories } from './ExercisesCategories';
import { NotFoundMessage } from '../Products';
// import { WaistList } from '../Waist';

import { ExercisesWrap, TopWrap, LoaderWrap } from './Exercises.styled';

export type Category = 'Body parts' | 'Muscles' | 'Equipment';

const Exercises: React.FC = () => {
  
  const [currentCategory, setCurrentCategory] = useState<Category>('Body parts');
  const [exercisesList, setExercisesList] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(1);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ filter: currentCategory });

    window.screen.width >= 768 && window.screen.width < 1440 ? setLimit(9) : setLimit(10);

    const responce = apiService({
      method: 'get', url: `/exercises/${currentCategory}?page=${page}&limit=${limit}`
    });
    setIsLoading(true);
    responce
      .then(({ data, totalItems }) => {
        if (!data.length)
          return setErrorPage(true);
        setExercisesList(data);
        setTotal(totalItems);
      })
      .catch(() => {
        setErrorPage(true);
      })
      .finally(() => setIsLoading(false));
  },[currentCategory, limit, page, total])

  return (
    <ExercisesWrap>
      {searchParams.has("category") && <BackButton/>}
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
      {errorPage && <NotFoundMessage />}
      {!searchParams.has("category") ?
            <ExercisesSlider
        exercisesList={exercisesList}
        currentCategory={currentCategory}
        setPage={setPage}
        total={total}
        limit={limit}
          isLoading={isLoading} /> : 
        <div>waist</div>
    }
      {/* <WaistList waistItem={} /> */}
    </ExercisesWrap>
  );
};

export default Exercises;
