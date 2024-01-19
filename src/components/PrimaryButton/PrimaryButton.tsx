import { CustomButton } from './PrimaryButton.styled';
import { ButtonProps } from 'antd';

interface PrimaryButtonProps extends ButtonProps {
  type: 'default' | 'primary' | 'dashed';
  text: string;
  sizes: 'large' | 'middle' | 'small' | 'extraSmall';
  padding?: string;
  fontSize?: number;
  onclick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  text,
  sizes,
  padding,
  fontSize,
  onclick = () => null,
}) => {
  return (
    <CustomButton
      type={type}
      sizes={sizes}
      fontSize={fontSize}
      padding={padding}
      onClick={onclick}
    >
      {text}
    </CustomButton>
  );
};

export default PrimaryButton;
