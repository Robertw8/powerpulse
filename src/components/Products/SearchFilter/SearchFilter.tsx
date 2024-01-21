import { SelectProps } from 'antd';
import { StyledSelect, StyledPopupContent } from '../FilterDropdown';
import { Icon } from '../../Icon';
import { apiService } from '../../../services';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux';
import { selectFilters, setFilters } from '../../../redux/products';

interface SearchFilterProps extends SelectProps {}

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

const SearchFilter: React.FC<SearchFilterProps> = () => {
  const [data, setData] = useState<SelectProps['options']>([]);
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilters);

  const handleSearch = (value: string) => {
    dispatch(setFilters({ ...filters, search: value && value.toLowerCase() }));
    getProductsNames(value.toLowerCase(), setData);
  };

  const handleClear = () => {
    dispatch(setFilters({ ...filters, search: '' }));
    setData([]);
  };

  const handleChange = value => {
    dispatch(setFilters({ ...filters, search: value && value.toLowerCase() }));
  };

  return (
    <StyledSelect
      showSearch
      value={filters.search || 'Search'}
      dropdownRender={menu => <StyledPopupContent>{menu}</StyledPopupContent>}
      dropdownStyle={{
        backgroundColor: '#1C1C1C',
        borderRadius: 12,
      }}
      suffixIcon={
        <Icon
          iconWidth={{ mobile: '18px', tablet: '18px' }}
          iconHeight={{ mobile: '18px', tablet: '18px' }}
          name="search"
          stroke="#EFEDE8"
        />
      }
      allowClear={{
        clearIcon: (
          <Icon
            iconWidth={{ mobile: '20px', tablet: '20px' }}
            iconHeight={{ mobile: '16px', tablet: '16px' }}
            name="x"
            stroke="#fff"
          />
        ),
      }}
      onSearch={handleSearch}
      onChange={handleChange}
      onClear={handleClear}
      defaultActiveFirstOption={false}
      filterOption={(input, option) => (option?.value ?? '').includes(input)}
      options={data?.map(item => ({
        value: item.title.toLowerCase(),
        label: item.title.toLowerCase(),
      }))}
      onDeselect={handleChange}
    />
  );
};

export default SearchFilter;
