import { Title } from './PageTitle.styled';

const PageTitle: React.FC<{ text: string }> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default PageTitle;
