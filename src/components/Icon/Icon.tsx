import { StyledIcon } from './Icon.styled';
import sprite from '../../assets/images/sprite.svg';

interface IconProps {
  name: string;
  width: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = '20px',
  height = '20px',
  fill,
  stroke,
}) => {
  return (
    <StyledIcon width={width} height={height} fill={fill} stroke={stroke}>
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </StyledIcon>
  );
};

export default Icon;
