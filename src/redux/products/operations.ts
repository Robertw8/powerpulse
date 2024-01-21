import { createAction } from '@reduxjs/toolkit';
import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

interface GetProductsParams {
  page: number;
  query?: string;
  categories?: string;
  type?: string;
}

const getProducts = operationWrapper(
  'products/getProducts',
  async ({ page, query, categories, type }: GetProductsParams) => {
    const queryString = `${query && `search=${query}`}&${
      categories && `categories=${categories}`
    }&${type && `type=${type}`}`;

    const response = await apiService({
      method: 'get',
      url: `products?${queryString}`,
      config: {
        params: {
          page,
          limit: 5,
        },
      },
    });
    return response.data;
  }
);

const getProductsCategories = operationWrapper(
  'products/getProductsCategories',
  async () => {
    const response = await apiService({
      method: 'get',
      url: 'products/category',
    });

    return response;
  }
);

// ! temp
const setCalculatedCalories = createAction<number>(
  'products/setCalculatedCalories'
);

export { getProducts, setCalculatedCalories, getProductsCategories };
