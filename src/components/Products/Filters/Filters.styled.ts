import styled from '@emotion/styled';

const SearchInputWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 376px) {
    width: 335px;
  }

  @media screen and (min-width: 769px) {
    width: 236px;
  }
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  right: 14px;
  z-index: -1;
`;

export { SearchInputWrapper, SearchIconContainer };
