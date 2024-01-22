import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

interface GetExercises {
  filter: string;
  category: string;
}

const getExercises = operationWrapper(
  'exercises/getWaistExercises',
  async ({ filter, category }: GetExercises) => {
    console.log(filter, category);

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
