import { ResponsiveContainer } from './Container.styled';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ResponsiveContainer>{children}</ResponsiveContainer>;
};

export default Container;
