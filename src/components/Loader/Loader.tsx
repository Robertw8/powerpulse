import { StyledLoader } from './Loader.styled';
import { StyledLoaderProps } from './Loader.styled';

const Loader: React.FC<StyledLoaderProps> = ({
  position = { top: '50%', left: '50%' },
}) => {
  return <StyledLoader position={position} />;
};

export default Loader;
