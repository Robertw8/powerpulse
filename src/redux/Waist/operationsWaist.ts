import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';
import { WaistExercises } from './types';

const getWaistExercises = operationWrapper(
  'exercises/getWaistExercises',
  async () => {
    const response = await apiService({
      method: 'get',
      url: 'exercises',
    });
    return response.data as WaistExercises[];
  }
);

export { getWaistExercises };
