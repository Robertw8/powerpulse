import styled from '@emotion/styled';

const SearchInputWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
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

const FiltersWrapper = styled.div`
  max-width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 700px;
    margin-left: auto;
  }
`;

const SearchWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

export {
  SearchInputWrapper,
  SearchIconContainer,
  FiltersWrapper,
  SearchWrapper,
  DropdownWrapper,
};
