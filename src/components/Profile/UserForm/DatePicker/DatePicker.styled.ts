import styled from '@emotion/styled';
import { DatePicker } from 'antd';
import { palette } from '../../../../styles';

const WrapDatePicker = styled.div`
  margin-top: 5px;

  @media screen and (min-width: 769px) {
    margin-top: 8px;
  }
`;

const DatePickerCustom = styled(DatePicker)`
  .ant-picker-input > input {
    font-size: ${palette.fontSizes.tiny}px;
    padding: 6px;

    @media screen and (min-width: 769px) {
      font-size: ${palette.fontSizes.default}px;
      padding: 8px;
    }
  }

  .anticon > * {
    color: ${palette.colors.white};
  }

  &:hover,
  &:focus,
  &:focus-within {
    border-color: ${palette.colors.orange} !important;
  }
`;

export { DatePickerCustom, WrapDatePicker };
