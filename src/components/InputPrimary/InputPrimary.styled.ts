import styled from '@emotion/styled';
import { Input } from 'antd';

const checkValidationStatus = (status: 'default' | 'success' | 'error') => {
  switch (status) {
    case 'default':
      return '#EFEDE84D';
    case 'success':
      return '#3CBF61';
    case 'error':
      return '#D80027';
  }
};

const StyledInput = styled(Input)`
  width: ${({ width }) => width};
  height: 46px;
  padding: 14px;

  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  background-color: transparent;
  border-color: ${({ bordercolor }) => checkValidationStatus(bordercolor)};

  &:is(:hover, :focus) {
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
