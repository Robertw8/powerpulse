import styled from '@emotion/styled';

interface StyledStatusBlockProps {
  backgroundColor?: string;
  borderColor?: string;
}

const StyledStatusBlock = styled.li<StyledStatusBlockProps>`
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

interface TitleBlockProps {
  textColor?: string;
  whiteSpace?: string;
}

const TitleBlock = styled.p<TitleBlockProps>`
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
