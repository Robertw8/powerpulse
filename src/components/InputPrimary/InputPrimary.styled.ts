import styled from '@emotion/styled';
import { Input, InputProps } from 'antd';

interface StyledInputProps extends InputProps {
  bordercolor: 'default' | 'success' | 'error';
}

const validationStatuses: { [key: string]: string } = {
  default: '#EFEDE84D',
  success: '#3CBF61',
  error: '#D80027',
};

const StyledInput = styled(Input)<StyledInputProps>`
  width: 100%;
  height: 46px;
  padding: 14px;

  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  background-color: transparent !important;
  border-color: ${({ bordercolor }) => validationStatuses[bordercolor]};
  box-shadow: 0;

  &:disabled {
    border-color: ${validationStatuses.default};
  }

  &:hover,
  &:focus,
  &:focus-within {
    background-color: transparent !important;
    border-color: #e6533c !important;
  }

  &::placeholder {
    color: #efede84d;
    transition-duration: 300ms;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus input:-webkit-autofill {
    -webkit-text-fill-color: #efede8;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 174, 255, 0.04) 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(0, 174, 255, 0.03) 100%
    );
  }
`;

export type { StyledInputProps };
export { StyledInput, validationStatuses };
