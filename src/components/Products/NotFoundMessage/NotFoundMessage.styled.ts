import styled from '@emotion/styled';
import { palette } from '../../../styles';

const Message = styled.p`
  max-width: 100%;
  color: ${palette.colors.white30};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    max-width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

const OrangeText = styled.span`
  display: inline-block;
  color: ${palette.colors.orange};
  font-size: 14px;
  line-height: calc(18 / 14);

  &:nth-of-type(2) {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export { Message, OrangeText };
