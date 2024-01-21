import styled from '@emotion/styled';

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
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;

  @media screen and (min-width: 769px) {
    font-size: 14px;
    margin: 0 0 8px;
  }
`;

const ErrorText = styled.div`
  color: #d80027;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
  margin: 5px 0 0;
`;

export { BlockWrapInput, LabelWrapBlock, LabelWrap, Label, ErrorText };
