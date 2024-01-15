import styled from '@emotion/styled';

const Message = styled.p`
  max-width: 100%;
  color: #efede84d;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 769px) {
    max-width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

const OrangeText = styled.span`
  display: inline-block;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  &:nth-of-type(2) {
    margin-top: 16px;
  }

  @media screen and (min-width: 769px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export { Message, OrangeText };
