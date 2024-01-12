import { StyledInput } from './InputPrimary.styled';

interface InputPrimaryProps {
  placeholder: string;
  bordercolor: 'default' | 'success' | 'error';
  [key: string]: unknown;
}

const InputPrimary: React.FC<InputPrimaryProps> = ({
  placeholder,
  bordercolor,
  ...rest
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      bordercolor={bordercolor}
      {...rest}
    />
  );
};

export default InputPrimary;