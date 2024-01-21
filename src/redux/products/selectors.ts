import { RootState } from '../rootReducer';

export const selectProducts = (state: RootState) => state.products.products;
export const selectIsLoading = (state: RootState) => state.products.isLoading;
export const selectCalculatedCalories = (state: RootState) =>
  state.products.calculatedCalories;
export const selectCategories = (state: RootState) => state.products.categories;
export const selectFilters = (state: RootState) => state.products.filters;
