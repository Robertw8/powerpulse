import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

const getWaistExercises = operationWrapper(
  'exercises/getWaistExercises',
  async () => {
    const response = await apiService({
      method: 'get',
      url: 'exercises',
    });
    return response.data;
  }
);

export { getWaistExercises };
