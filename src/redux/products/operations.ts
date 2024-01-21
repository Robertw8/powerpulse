import { createAction } from '@reduxjs/toolkit';
import { operationWrapper } from '../../helpers';
import { apiService } from '../../services';

interface GetProducts {
  page?: number;
  limit?: number;
  search?: string;
  categories?: string;
  type?: string;
}

const getProducts = operationWrapper(
  'products/getProducts',
  async ({ page, search, categories, type }: GetProducts) => {
    const response = await apiService({
      method: 'get',
      url: `products`,
      config: {
        params: {
          search,
          categories,
          type,
          limit: 20,
          page,
        },
      },
    });

    return response.data;
  }
);

interface GetProductsByPage {
  page: number;
  limit?: number;
  search?: string;
  categories?: string;
  type?: string;
}

const getProductsByPage = operationWrapper(
  'products/getProductsByPage',
  async ({ page, limit = 10, search, categories, type }: GetProductsByPage) => {
    const response = await apiService({
      method: 'get',
      url: `products`,
      config: {
        params: {
          search,
          categories,
          type,
          limit,
          page,
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

const setFilters = createAction<{ [key: string]: string }>(
  'products/setFilters'
);

export {
  getProducts,
  setCalculatedCalories,
  getProductsCategories,
  getProductsByPage,
  setFilters,
};
