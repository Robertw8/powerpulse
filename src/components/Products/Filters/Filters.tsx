import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterDropdown } from '..';
import {
  selectCategories,
  selectProducts,
} from '../../../redux/products/selectors';
import { AppDispatch } from '../../../redux';
import { getProductsCategories } from '../../../redux/products';
import { SearchFilter } from '../SearchFilter';
import {
  DropdownWrapper,
  FiltersWrapper,
  SearchWrapper,
} from './Filters.styled';

const Filters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  console.log(products);

  useEffect(() => {
    dispatch(getProductsCategories({}));
  }, [dispatch]);

  return (
    <FiltersWrapper>
      <SearchWrapper>
        <SearchFilter />
      </SearchWrapper>
      <DropdownWrapper>
        <FilterDropdown items={categories} placeholder="Categories" />
        <FilterDropdown
          items={['All', 'Recommended', 'Not recommended']}
          placeholder="All"
        />
      </DropdownWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
