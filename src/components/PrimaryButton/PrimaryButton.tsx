import { CustomButton } from './PrimaryButton.styled';
import type { ButtonProps } from 'antd';

interface PrimaryButtonProps extends ButtonProps {
  text: string;
  sizes: 'large' | 'middle' | 'small' | 'extraSmall';
  padding?: string;
  fontSize?: number;
  htmlType?: 'submit' | 'reset' | 'button';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  text,
  sizes,
  padding,
  fontSize,
  onClick,
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
      onClick={onClick}
      disabled={disabled}
      htmlType={htmlType}
      loading={loading}
    >
      {text}
    </CustomButton>
  );
};

export default PrimaryButton;
