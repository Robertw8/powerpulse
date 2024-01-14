import { useState } from 'react';
import { InputPrimary } from '../../InputPrimary';
import { Icon } from '../../Icon';
import { FilterDropdown } from '..';
import { Container } from '../..';

import { SearchInputWrapper, SearchIconContainer } from './Filters.styled';

const Filters: React.FC = () => {
  const [inputHover, setInputHover] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);

  return (
    // <div style={{ width: 800, margin: '0 auto' }}>
    <Container>
      <div className="filters wrapper" style={{ gap: '20px' }}>
        <SearchInputWrapper
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onMouseEnter={() => setInputHover(true)}
          onMouseLeave={() => setInputHover(false)}
          style={{ marginBottom: 40 }}
        >
          <InputPrimary placeholder="Search" bordercolor="default" />
          <SearchIconContainer>
            <Icon
              name="search"
              iconWidth={{ mobile: '18px', tablet: '18px' }}
              iconHeight={{ mobile: '18px', tablet: '18px' }}
              stroke={inputHover || inputFocus ? '#E6533C' : '#EFEDE8'}
            />
          </SearchIconContainer>
        </SearchInputWrapper>

        <div
          className="dropdowns wrapper"
          style={{ display: 'flex', gap: '16px' }}
        >
          <FilterDropdown items={['Option 1', 'Option 2', 'Option 3']}>
            <p>Categories</p>
          </FilterDropdown>
          <FilterDropdown items={['Option 1', 'Option 2', 'Option 3']}>
            <p>All</p>
          </FilterDropdown>
        </div>
      </div>
    </Container>
    // </div>
  );
};

export default Filters;
