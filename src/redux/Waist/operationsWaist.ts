// import { createAction } from '@reduxjs/toolkit';
import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';
// import { WaistExercises } from './types';

interface GetWaistExercises {
  query: string;
  page: number;
  limit: number;
}

const getWaistExercises = operationWrapper(
  'exercises/getWaistExercises',
  async ({ query, page, limit }: GetWaistExercises) => {
    const response = await apiService({
      method: 'get',
      url: `exercises/bodyPart`,
      config: {
        params: {
          query,
          page,
          limit,
        }
      }
    });
    return response.data ;
  }
);

// const setFilters = createAction<{ [key: string]: string }>(
//   'exercises/setFilters'
// );

export { getWaistExercises};
