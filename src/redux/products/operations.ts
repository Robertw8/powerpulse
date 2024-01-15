import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

const getProducts = operationWrapper({
  path: 'products/getProducts',
  handler: async () => {
    const response = await apiService({ method: 'get', url: 'products' });

    return response.data;
  },
});

export { getProducts };
