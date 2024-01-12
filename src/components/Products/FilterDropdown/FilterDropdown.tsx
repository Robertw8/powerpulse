import { useState } from 'react';
import { Dropdown, DropdownList, DropdownItem } from './FilterDropdown.styled';
import { Icon } from '../../Icon';

interface FilterDropdownProps {
  children: React.ReactNode;
  items: string[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ children, items }) => {
  const [dropdownHover, setDropdownHover] = useState(false);

  return (
    <Dropdown
      onMouseEnter={() => setDropdownHover(true)}
      onMouseLeave={() => setDropdownHover(false)}
    >
      {children}
      <Icon
        name="chevron"
        width="18px"
        stroke={dropdownHover ? '#E6533C' : '#EFEDE8'}
      />
      <DropdownList visible={dropdownHover}>
        {items.map((item, idx) => (
          <DropdownItem key={idx}>{item}</DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export default FilterDropdown;
