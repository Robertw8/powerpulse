import styled from '@emotion/styled';
import { AutoComplete } from 'antd';
import { palette } from '../../../styles';

const StyledSearchInput = styled(AutoComplete)`
  height: 46px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 52px;
  }

  .ant-select-selector {
    height: 50px;
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

    .ant-select-selection-search {
      position: relative;
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

    .ant-select-selection-placeholder {
      color: ${palette.colors.white};
      position: absolute;
      left: 22px;
    }
  }
`;

const StyledSearchContent = styled.div`
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

  .ant-select-item-option-active {
    color: ${palette.colors.orange} !important;
    font-weight: 600;
    background-color: ${palette.colors.white5} !important;
  }

  .ant-empty-description {
    color: ${palette.colors.white} !important;
  }
`;

export { StyledSearchInput, StyledSearchContent };
