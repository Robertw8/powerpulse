import {
  StyledStatusBlock,
  TitleBlock,
  IconTextWrap,
  StatusValue,
} from './DailyStatusBlock.styled';

interface DailyProps {
  text: string;
  backgroundColor?: string;
  value: number | string;
  textColor?: string;
  whiteSpace?: string;
  children?: React.ReactElement;
  borderColor?: string;
}

const DailyStatusBlock: React.FC<DailyProps> = ({
  text,
  backgroundColor,
  textColor,
  whiteSpace,
  children,
  value,
  borderColor,
}) => {
  return (
    <StyledStatusBlock
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <IconTextWrap whiteSpace={whiteSpace}>
        {children}
        <TitleBlock textColor={textColor}>{text}</TitleBlock>
      </IconTextWrap>
      <StatusValue>{value}</StatusValue>
    </StyledStatusBlock>
  );
};
export default DailyStatusBlock;
