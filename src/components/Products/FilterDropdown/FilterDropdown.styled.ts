import styled from '@emotion/styled';
import { Select } from 'antd';
import { palette } from '../../../styles';

const StyledSelect = styled(Select)`
  height: 46px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 52px;
  }

  .ant-select-selector {
    color: ${palette.colors.white};
    font-size: 14px;
    line-height: calc(18 / 14);
    text-transform: capitalize;

    background-color: transparent !important;
    border-color: ${palette.colors.white30} !important;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    &:hover,
    :focus {
      border-color: ${palette.colors.orange} !important;
    }

    .ant-select-selection-placeholder {
      color: ${palette.colors.white};
    }

    .ant-select-selection-item {
      color: ${palette.colors.white};
      font-size: 14px;
      line-height: calc(18 / 14);

      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: calc(24 / 16);
      }
    }
  }
`;

const StyledPopupContent = styled.div`
  .ant-select-item {
    color: ${palette.colors.white};
    font-size: 14px;
    line-height: calc(18 / 14);
    text-transform: capitalize;

    @media screen and (min-width: 768px) {
      font-size: 16px !important;
      line-height: calc(24 / 16);
    }
  }

  [aria-selected='true'] {
    background-color: ${palette.colors.white5} !important;

    .ant-select-item-option-content {
      color: ${palette.colors.orange} !important;
    }
  }

  .ant-select-item-option-active {
    background-color: ${palette.colors.white5} !important;
  }

  .ant-empty-description {
    color: ${palette.colors.white} !important;
  }
`;

export { StyledSelect, StyledPopupContent };
