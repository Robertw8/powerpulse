import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

const getProducts = operationWrapper(
  'products/getProducts',
  async (page: number) => {
    const response = await apiService({
      method: 'get',
      url: 'products',
      config: {
        params: {
          page,
          limit: 10,
        },
      },
    });
    return response.data;
  }
);

export { getProducts };
