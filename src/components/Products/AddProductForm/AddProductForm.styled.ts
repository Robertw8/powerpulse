import styled from '@emotion/styled';
import { InputNumber } from 'antd';

const InputsWrapper = styled.fieldset`
  border: none;

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

const StyledInputNumber = styled(InputNumber)`
  width: 100%;
  margin-top: 16px;

  .ant-input-number {
    background-color: transparent;
    border-color: #efede84d;

    color: #efede8;
    font-size: 14px;
    line-height: calc(18 / 14);

    .ant-input-number-input {
      color: #efede8 !important;
      height: 40px;

      &::placeholder {
        color: #efede84d;
      }
    }

    &:hover,
    &:focus,
    &:focus-within {
      background-color: transparent !important;
      border-color: #e6533c !important;
    }

    @media screen and (min-width: 769px) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }

  .ant-input-number-group-addon {
    border-color: #efede84d !important;
  }

  @media screen and (min-width: 769px) {
    margin-top: 0;
    margin-left: 16px;
  }
`;

const InputAddon = styled.span`
  color: #efede866;
  font-size: 12px;
  line-height: calc(18 / 12);
`;

const Calories = styled.p`
  margin-top: 16px;
  color: #efede866;
  font-size: 12px;
  line-height: calc(18 / 12);
`;

const Value = styled.span`
  color: #efede8;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  @media screen and (min-width: 769px) {
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
