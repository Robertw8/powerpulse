import { apiService } from '../services';

const getProductsNames = async (query: string, callback) => {
  const response = await apiService({
    method: 'get',
    url: `products?search=${query}`,
    config: {
      params: {
        limit: 200,
      },
    },
  });

  callback(response.data);
};

export default getProductsNames;
