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

  background-color: transparent;
  border-color: ${({ bordercolor }) => validationStatuses[bordercolor]};

  &:hover,
  &:focus {
    border-color: #e6533c;
  }

  &::placeholder {
    color: #efede84d;
    transition-duration: 300ms;
  }

  @media screen and (min-width: 769px) {
    height: 52px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export { StyledInput };
