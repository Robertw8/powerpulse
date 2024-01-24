import styled from '@emotion/styled';
import { AutoComplete } from 'antd';

const StyledSearchInput = styled(AutoComplete)`
  height: 46px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 52px;
  }

  .ant-select-selector {
    color: #efedee;
    font-size: 14px;
    line-height: calc(18 / 14);
    text-transform: capitalize;
    height: 50px;

    background-color: transparent !important;
    border-color: #efede84d !important;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    &:hover,
    :focus {
      border-color: #e6533c !important;
    }

    .ant-select-selection-search {
      position: relative;
    }

    .ant-select-selection-item {
      color: #efedee;
      font-size: 14px;
      line-height: calc(18 / 14);

      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: calc(24 / 16);
      }
    }

    .ant-select-selection-placeholder {
      color: #efedee;
      position: absolute;
      left: 22px;
    }
  }
`;

const StyledSearchContent = styled.div`
  .ant-select-item {
    color: #efede8;
    font-size: 14px;
    line-height: calc(18 / 14);
    text-transform: capitalize;

    @media screen and (min-width: 768px) {
      font-size: 16px !important;
      line-height: calc(24 / 16);
    }
  }

  .ant-select-item-option-active {
    color: #e6533c !important;
    font-weight: 600;
    background-color: #efede80d !important;
  }

  .ant-empty-description {
    color: #efede8 !important;
  }
`;

export { StyledSearchInput, StyledSearchContent };
