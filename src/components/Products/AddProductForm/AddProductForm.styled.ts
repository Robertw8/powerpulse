import styled from '@emotion/styled';
import { InputNumber } from 'antd';
import { palette } from '../../../styles';

const InputsWrapper = styled.fieldset`
  border: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const StyledInputNumber = styled(InputNumber)`
  width: 100%;
  margin-top: 16px;

  .ant-input-number {
    background-color: transparent;
    border-color: ${palette.colors.white30};

    color: ${palette.colors.white};
    font-size: 14px;
    line-height: calc(18 / 14);

    .ant-input-number-input {
      color: ${palette.colors.white} !important;
      height: 40px;

      &::placeholder {
        color: ${palette.colors.white30};
      }
    }

    &:hover,
    &:focus,
    &:focus-within {
      background-color: transparent !important;
      border-color: ${palette.colors.orange} !important;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }

  .ant-input-number-group-addon {
    border-color: ${palette.colors.white30} !important;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 16px;
  }
`;

const InputAddon = styled.span`
  color: ${palette.colors.white40};
  font-size: 12px;
  line-height: calc(18 / 12);
`;

const Calories = styled.p`
  margin-top: 16px;
  color: ${palette.colors.white40};
  font-size: 12px;
  line-height: calc(18 / 12);
`;

const Value = styled.span`
  color: ${palette.colors.white};
  margin-left: 4px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 16px;
    margin-top: 64px;
  }
`;

export {
  InputsWrapper,
  StyledInputNumber,
  ButtonsWrapper,
  Calories,
  Value,
  InputAddon,
};
