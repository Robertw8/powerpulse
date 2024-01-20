import { SelectProps } from 'antd';
import { StyledSelect, StyledPopupContent } from '../FilterDropdown';
import { Icon } from '../../Icon';

interface SearchFilterProps extends SelectProps {
  // items: unknown;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ items }) => {
  return (
    <StyledSelect
      showSearch
      placeholder="Search"
      options={items}
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
    />
  );
};

export default SearchFilter;
