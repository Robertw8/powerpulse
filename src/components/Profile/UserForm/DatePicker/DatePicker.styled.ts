import styled from '@emotion/styled';
import { DatePicker } from 'antd';

const DatePickerCustom = styled(DatePicker)`
  :where(.css-dev-only-do-not-override-1rsgabu).ant-picker-outlined {
    border-radius: 12px;
    background-color: #040404;
    height: 52px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    font-size: 18px;
    color: white;
    padding: 14px;
  }

  :where(.css-dev-only-do-not-override-1rsgabu).ant-picker-large
    .ant-picker-input
    > input {
    font-size: 16px;
  }

  .anticon > * {
    color: white;
  }
`;

export { DatePickerCustom };
