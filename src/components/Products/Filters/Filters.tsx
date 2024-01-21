import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterDropdown } from '..';
import {
  selectCategories,
  selectFilters,
} from '../../../redux/products/selectors';
import { AppDispatch } from '../../../redux';
import { getProductsCategories, setFilters } from '../../../redux/products';
import { SearchFilter } from '../SearchFilter';
import {
  DropdownWrapper,
  FiltersWrapper,
  SearchWrapper,
} from './Filters.styled';

const Filters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);
  const filters = useSelector(selectFilters);

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
      case 'all':
        return 'All';
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
          items={categories}
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
