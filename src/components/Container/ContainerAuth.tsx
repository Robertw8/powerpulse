import { ResponsiveContainerAuth } from './Container.styled';

interface ContainerAuthProps {
  children: React.ReactNode;
}

const ContainerAuth: React.FC<ContainerAuthProps> = ({ children }) => {
  return <ResponsiveContainerAuth>{children}</ResponsiveContainerAuth>;
};

export default ContainerAuth;
