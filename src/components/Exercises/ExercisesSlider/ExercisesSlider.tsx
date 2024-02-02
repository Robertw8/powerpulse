import { useEffect, useState } from 'react';
import { useExercises } from '../../../hooks';

import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList';
import { Carousel } from 'antd';
import NotFoundPage from '../../../pages/NotFoundPage';
import { Loader } from '../..';

import { apiService } from '../../../services';
import currentFilter from './setCurrentFilter';

const Slider: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(1);
  const [exercisesList, setExercisesList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const { exercisesFilters } = useExercises();

  useEffect(() => {
    setIsLoading(true);
    window.screen.width >= 768 && window.screen.width < 1440
      ? setLimit(9)
      : setLimit(10);

    const filter = exercisesFilters.filter
      ? currentFilter(exercisesFilters.filter)
      : currentFilter('bodyPart');

    const responce = apiService({
      method: 'get',
      url: `/exercises/${filter}?page=${page}&limit=${limit}`,
    });

    responce
      .then(({ data, totalItems }) => {
        if (!data.length) return setErrorPage(true);
        if (!data.length) return;
        setExercisesList(data);
        setTotal(totalItems);
      })
      .catch(() => {
        setErrorPage(true);
      })
      .finally(() => setIsLoading(false));
  }, [exercisesFilters.filter, limit, page]);

  const onChange = (currentSlide: number) => {
    setPage(currentSlide + 1);
  };

  const slidesCounter: number = Math.ceil(total / limit);

  const sliderBlocks = Array.from({ length: slidesCounter }, (_, index) => (
    <div key={index + 1}>
      <ExercisesSubcategoriesList exercisesList={exercisesList} />
    </div>
  ));

  return (
    <>
      {isLoading && <Loader />}
      {exercisesList.length > 0 && (
        <Carousel afterChange={onChange}>{sliderBlocks}</Carousel>
      )}
      {errorPage && <NotFoundPage />}
    </>
  );
};

export default Slider;
