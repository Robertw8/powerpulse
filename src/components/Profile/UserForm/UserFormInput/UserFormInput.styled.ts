import styled from '@emotion/styled';
import { palette } from '../../../../styles';

const BlockWrapInput = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const LabelWrapBlock = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 769px) {
    gap: 0;
    width: calc(100% / 2);
  }
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 14px;
  width: 100%;

  @media screen and (min-width: 769px) {
    margin: 0 14px 14px 0;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin: 0 0 5px;

  color: ${palette.colors.white40};
  font-size: ${palette.fontSizes.caption}px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: 14px;
    margin: 0 0 8px;
  }
`;

const ErrorText = styled.div`
  margin: 5px 0 0;

  color: ${palette.colors.red};
  font-size: ${palette.fontSizes.caption}px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
`;

export { BlockWrapInput, LabelWrapBlock, LabelWrap, Label, ErrorText };
