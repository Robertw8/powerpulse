import styled from '@emotion/styled';
import { palette } from '../../../styles';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 48px;
  }
`;

const WrapForm = styled.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid ${palette.colors.white30};
    padding: 0 54px 0;
  }
`;

export { Wrap, WrapForm };
