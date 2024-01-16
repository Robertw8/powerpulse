import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

const getProducts = operationWrapper('products/getProducts', async () => {
  const response = await apiService({ method: 'get', url: 'products' });

  return response.data;
});

export { getProducts };
