import { StyledInput } from './InputPrimary.styled';

interface InputPrimaryProps {
  placeholder: string;
  width: string;
  bordercolor: 'default' | 'success' | 'error';
}

const InputPrimary: React.FC<InputPrimaryProps> = ({
  placeholder,
  width,
  bordercolor,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      width={width}
      bordercolor={bordercolor}
    />
  );
};

export default InputPrimary;
