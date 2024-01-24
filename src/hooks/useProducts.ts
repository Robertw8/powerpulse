import { useSelector } from 'react-redux';
import {
  selectProducts,
  selectCategories,
  selectFilters,
  selectIsLoading,
  selectCalculatedCalories,
} from '../redux/products';

const useProducts = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const calculatedCalories = useSelector(selectCalculatedCalories);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);

  return {
    products,
    categories,
    calculatedCalories,
    filters,
    isLoading,
  };
};

export default useProducts;
