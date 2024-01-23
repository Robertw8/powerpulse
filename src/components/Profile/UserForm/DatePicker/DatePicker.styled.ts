import styled from '@emotion/styled';
import { DatePicker } from 'antd';

const WraoDatePicker = styled.div`
  margin-top: 8px;
`;

const DatePickerCustom = styled(DatePicker)`
  .ant-picker-input > input {
    font-size: 16px;
  }

  .anticon > * {
    color: white;
  }

  & .ant-picker-cell-inner {
    border-radius: 50% !important;
  }
`;

export { DatePickerCustom, WraoDatePicker };
