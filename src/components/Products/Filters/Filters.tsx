import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useProducts } from '../../../hooks';

import { FilterDropdown } from '..';
import { SearchFilter } from '../SearchFilter';
import {
  DropdownWrapper,
  FiltersWrapper,
  SearchWrapper,
} from './Filters.styled';

import { AppDispatch } from '../../../redux';
import { getProductsCategories, setFilters } from '../../../redux/products';

const Filters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, filters } = useProducts();

  useEffect(() => {
    dispatch(getProductsCategories({}));
  }, [dispatch]);

  const handleCategoriesChange = value => {
    dispatch(
      setFilters({ ...filters, categories: value && value.toLowerCase() })
    );
  };

  const handleTypeChange = value => {
    dispatch(
      setFilters({
        ...filters,
        type: value && value.toLowerCase().replace(/\s/g, ''),
      })
    );
  };

  const setTypeValue = () => {
    switch (filters.type) {
      case 'recommended':
        return 'Recommended';
      case 'notrecommended':
        return 'Not recommended';
    }
  };

  return (
    <FiltersWrapper>
      <SearchWrapper>
        <SearchFilter />
      </SearchWrapper>
      <DropdownWrapper>
        <FilterDropdown
          items={['All', ...categories]}
          onChange={handleCategoriesChange}
          value={filters.categories || 'Categories'}
        />
        <FilterDropdown
          items={['All', 'Recommended', 'Not recommended']}
          onChange={handleTypeChange}
          value={setTypeValue() || 'All'}
        />
      </DropdownWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
