//? Контейнером просто огортаєте ваш компонент/сторінку

import { ResponsiveContainer } from './Container.styled';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ResponsiveContainer>{children}</ResponsiveContainer>;
};

export default Container;
