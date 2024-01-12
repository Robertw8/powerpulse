import { StyledInput } from './InputPrimary.styled';

interface InputPrimaryProps {
  placeholder: string;
  bordercolor: 'default' | 'success' | 'error';
}

const InputPrimary: React.FC<InputPrimaryProps> = ({
  placeholder,

  bordercolor,
}) => {
  return <StyledInput placeholder={placeholder} bordercolor={bordercolor} />;
};

export default InputPrimary;
