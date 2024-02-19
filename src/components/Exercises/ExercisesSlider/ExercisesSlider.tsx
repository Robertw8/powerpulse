import { useEffect, useState } from 'react';
import { useExercises } from '../../../hooks';

import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList';
import { Carousel } from 'antd';

import { apiService } from '../../../services';
import { setCurrentFilter } from '../../../helpers';

const Slider: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(1);
  const [exercisesList, setExercisesList] = useState<[]>([]);
  const { exercisesFilters } = useExercises();

  useEffect(() => {
    window.screen.width >= 768 && window.screen.width < 1440
      ? setLimit(9)
      : setLimit(10);

    const filter = exercisesFilters.filter
      ? setCurrentFilter(exercisesFilters.filter)
      : setCurrentFilter('bodyPart');

    const response = apiService({
      method: 'get',
      url: `/exercises/${filter}?page=${page}&limit=${limit}`,
    });

    response.then(({ data, totalItems }) => {
      if (!data.length) return;
      setExercisesList(data);
      setTotal(totalItems);
    });
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
    exercisesList.length > 0 && (
      <Carousel afterChange={onChange}>{sliderBlocks}</Carousel>
    )
  );
};

export default Slider;
