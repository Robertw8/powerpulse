import { CustomButton } from './PrimaryButton.styled';
import { ButtonProps } from 'antd';

interface PrimaryButtonProps extends ButtonProps {
  type: 'default' | 'primary' | 'dashed';
  text: string;
  sizes: 'large' | 'middle' | 'small' | 'extraSmall';
  padding?: string;
  fontSize?: number;
  onclick?: () => void;
  disabled?: boolean;
  htmlType?: 'submit' | 'reset' | 'button';
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  text,
  sizes,
  padding,
  fontSize,
  onclick,
  disabled,
  htmlType,
  loading,
}) => {
  return (
    <CustomButton
      type={type}
      sizes={sizes}
      fontSize={fontSize}
      padding={padding}
      onClick={onclick}
      disabled={disabled}
      htmlType={htmlType}
      loading={loading}
    >
      {text}
    </CustomButton>
  );
};

export default PrimaryButton;
