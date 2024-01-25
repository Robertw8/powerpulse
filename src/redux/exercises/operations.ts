import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';
import { createAction } from '@reduxjs/toolkit';

interface GetExercises {
  filter: string | (string | null)[] | null;
  category: string | (string | null)[] | null;
}

const getExercises = operationWrapper(
  'exercises/getWaistExercises',
  async ({ filter, category }: GetExercises) => {
    const response = await apiService({
      method: 'get',
      url: `exercises/${filter}/${category}`,
    });
    return response.data;
  }
);

const setFilters = createAction('exercises/setFilters', (filter, category) => {
  return {
    payload: {
      filter,
      category,
    },
  };
});

const setBurnedCalories = createAction<number>('exercises/setBurnedCalories');

const setTime = createAction<number>('exercises/setTime');

export { getExercises, setFilters, setBurnedCalories, setTime };
