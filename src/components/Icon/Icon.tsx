import { StyledIcon } from './Icon.styled';
import sprite from '../../assets/images/sprite.svg';

interface IconProps {
  name: string;
  iconWidth: {
    mobile: string;
    tablet: string;
  };
  iconHeight?: {
    mobile: string;
    tablet: string;
  };
  fill?: string;
  stroke?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  iconWidth,
  iconHeight,
  fill,
  stroke,
}) => {
  return (
    <StyledIcon
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </StyledIcon>
  );
};

export default Icon;
