import styled from '@emotion/styled';
import { Button } from 'antd';

interface ButtonStyleProps {
  sizes: 'large' | 'middle' | 'small' | 'extraSmall';
  padding?: string;
  fontSize?: number;
}

interface Sizes {
  mobile: {
    large: string;
    middle: string;
    small: string;
    extraSmall: string;
  };
  tablet: {
    large: string;
    middle: string;
    small: string;
    extraSmall: string;
  };
}

const buttonWidth: Sizes = {
  mobile: {
    large: '140px',
    middle: '130px',
    small: '105px',
    extraSmall: '80px',
  },
  tablet: {
    large: '180px',
    middle: '140px',
    small: '130px',
    extraSmall: '80px',
  },
};

const buttonHeight: Sizes = {
  mobile: {
    large: '40px',
    middle: '40px',
    small: '35px',
    extraSmall: '30px',
  },
  tablet: {
    large: '50px',
    middle: '45px',
    small: '35px',
    extraSmall: '30px',
  },
};

const CustomButton = styled(Button)<ButtonStyleProps>`
  box-sizing: content-box;
  min-width: ${({ sizes }) => buttonWidth.mobile[sizes]} !important;
  min-height: ${({ sizes }) => buttonHeight.mobile[sizes]} !important;

  padding: ${({ padding }) => padding} !important;
  background-color: ${({ type }) =>
    type === 'default' ? 'transparent' : '#e6533c'};
  border-color: ${({ type }) =>
    type === 'default' ? '#EFEDE84D' : 'transparent'};

  display: flex;
  justify-content: center;
  align-items: center;

  color: #efede8;
  font-size: ${({ fontSize }) => `${fontSize}px`} !important;
  line-height: ${({ fontSize }) => `calc(18 / ${fontSize})`};

  @media screen and (min-width: 768px) {
    min-width: ${({ sizes }) => buttonWidth.tablet[sizes]} !important;
    min-height: ${({ sizes }) => buttonHeight.tablet[sizes]} !important;
    line-height: ${({ fontSize }) => `calc(24 / ${fontSize})`};
  }

  &:disabled {
    border-color: #e6533c;
    color: #efede899;
    background-color: #e6533c;
  }
  &:hover,
  &:focus {
    color: #efede8 !important;
  }
`;

export { CustomButton };
