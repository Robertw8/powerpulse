import { RootState } from '../rootReducer';

export const selectProducts = (state: RootState) => state.products.products;
export const selectIsLoading = (state: RootState) => state.products.isLoading;
