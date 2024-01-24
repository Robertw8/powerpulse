import styled from '@emotion/styled';
import { DatePicker } from 'antd';

const WraoDatePicker = styled.div`
  margin-top: 5px;

  @media screen and (min-width: 769px) {
    margin-top: 8px;
  }
`;

const DatePickerCustom = styled(DatePicker)`
  .ant-picker-input > input {
    font-size: 14px;
    padding: 6px;

    @media screen and (min-width: 769px) {
      font-size: 16px;
      padding: 8px;
    }
  }

  .anticon > * {
    color: white;
  }

  &:hover,
  &:focus,
  &:focus-within {
    border-color: #e6533c !important;
  }
`;

export { DatePickerCustom, WraoDatePicker };
