import styled from '@emotion/styled';

const StyledStatusBlock = styled.li<{
  backgroundColor?: string;
  borderColor?: string;
}>`
  width: 157px;
  height: 96px;
  padding: 14px;
  border: 1px solid ${({ borderColor }) => borderColor};

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 12px;
  background: ${({ backgroundColor }) =>
    backgroundColor || 'rgba(239, 237, 232, 0.05);'};

  @media screen and (min-width: 768px) {
    flex: 0 0 187px;
  }
`;
const TitleBlock = styled.p<{ textColor?: string }>`
  color: ${({ textColor }) => textColor || 'rgba(239, 237, 232, 0.40)'};
  font-size: 12px;
  line-height: 16px;
`;
const IconTextWrap = styled.div<{ whiteSpace?: string }>`
  display: flex;
  align-items: center;
  white-space: ${({ whiteSpace }) => whiteSpace || 'nowrap'};
  gap: 8px;
`;

const StatusValue = styled.p`
  color: #efede8;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`;
export { StyledStatusBlock, TitleBlock, IconTextWrap, StatusValue };
