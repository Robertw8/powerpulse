import { SelectProps } from 'antd';
import { StyledSelect, StyledPopupContent } from './FilterDropdown.styled';
import { Icon } from '../../Icon';
import { DefaultOptionType } from 'antd/es/select';

interface FilterDropdownProps extends SelectProps {
  items: string[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  items,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <StyledSelect
      value={value}
      onChange={(value, option) => {
        onChange?.(value, option as DefaultOptionType);
      }}
      options={items.map(item => ({
        value: item,
        label: item,
      }))}
      placeholder={placeholder}
      dropdownRender={menu => <StyledPopupContent>{menu}</StyledPopupContent>}
      dropdownStyle={{
        backgroundColor: '#1C1C1C',
        borderRadius: 12,
      }}
      suffixIcon={
        <Icon
          iconWidth={{ mobile: '16px', tablet: '16px' }}
          name="chevron-down"
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

export default FilterDropdown;
