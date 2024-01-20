import styled from '@emotion/styled';
import { Select } from 'antd';

const StyledSelect = styled(Select)`
  height: 46px;
  width: 100%;

  @media screen and (min-width: 769px) {
    height: 52px;
  }

  .ant-select-selector {
    color: #efedee;
    font-size: 14px;
    line-height: calc(18 / 14);
    text-transform: capitalize;

    background-color: transparent !important;
    border-color: #efede84d !important;

    @media screen and (min-width: 769px) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    &:hover,
    :focus {
      border-color: #e6533c !important;
    }

    .ant-select-selection-placeholder {
      color: #efedee;
    }

    .ant-select-selection-item {
      color: #efedee;
      font-size: 14px;
      line-height: calc(18 / 14);

      @media screen and (min-width: 769px) {
        font-size: 16px;
        line-height: calc(24 / 16);
      }
    }
  }
`;

const StyledPopupContent = styled.div`
  .ant-select-item {
    color: #efede8;
    font-size: 14px;
    line-height: calc(18 / 14);
    text-transform: capitalize;

    @media screen and (min-width: 769px) {
      font-size: 16px !important;
      line-height: calc(24 / 16);
    }
  }

  [aria-selected='true'] {
    background-color: #1c1c1c !important;

    .ant-select-item-option-content {
      color: #e6533c !important;
    }
  }

  .ant-empty-description {
    color: #efede8 !important;
  }
`;

export { StyledSelect, StyledPopupContent };
