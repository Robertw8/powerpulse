import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

export const getStatistics = operationWrapper(
  'statistics/getStatistics',
  async () => {
    const response = await apiService({
      method: 'get',
      url: `statistics`,
    });

    return response.data;
  }
);
