import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

interface GetExercises {
  filter: string | (string | null)[] | null;
  category: string | (string | null)[] | null;
}

const getExercises = operationWrapper(
  'exercises/getWaistExercises',
  async ({ filter, category }: GetExercises) => {
    const response = await apiService({
      method: 'get',
      url: `exercises/bodyPart/${category}`,
      config: {
        params: {
          filter,
        },
      },
    });
    return response.data;
  }
);

export { getExercises };
