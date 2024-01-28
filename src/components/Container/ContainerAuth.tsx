import { ResponsiveContainerAuth } from './Container.styled';

const ContainerAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ResponsiveContainerAuth>{children}</ResponsiveContainerAuth>;
};

export default ContainerAuth;
