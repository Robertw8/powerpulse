import styled from '@emotion/styled';
import { Spin, SpinProps } from 'antd';

interface StyledLoaderProps extends SpinProps {
  position?: {
    top: string;
    left: string;
  };
}

const StyledLoader = styled(Spin)<StyledLoaderProps>`
  position: absolute;
  top: ${({ position }) => position?.top};
  left: ${({ position }) => position?.left};
  transform: translate(-50%, -50%);

  span {
    font-size: 0 !important;
  }

  i {
    width: 20px !important;
    height: 20px !important;
  }

  @media screen and (min-width: 1440px) {
    font-size: 50px !important;

    span {
      font-size: 50px !important;
    }

    i {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;

export { StyledLoader };
export type { StyledLoaderProps };
