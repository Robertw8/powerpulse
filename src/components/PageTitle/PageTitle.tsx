import { Title } from './PageTitle.styled';

const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
