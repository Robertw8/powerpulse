import styled from '@emotion/styled';
import { DatePicker } from 'antd';
import { palette } from '../../../styles';

const WrapDatePicker = styled.div``;

const DatePickerCustom = styled(DatePicker)`
  .ant-picker-input > input {
    font-size: ${palette.fontSizes.tiny}px;
    color: ${palette.colors.white};
    padding: 6px;

    .ant-picker-clear {
      display: none !important;
    }

    @media screen and (min-width: 769px) {
      font-size: ${palette.fontSizes.default}px;
      padding: 8px;
    }

    @media screen and (max-width: 375px) {
      width: 100% !important;
      max-width: 330px !important;
    }
  }

  .anticon > * {
    color: ${palette.colors.orange};
  }

  &:hover,
  &:focus,
  &:focus-within {
    border-color: transparent !important;
  }
`;

export { DatePickerCustom, WrapDatePicker };
