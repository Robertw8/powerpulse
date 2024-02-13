import { Title } from './PageTitle.styled';

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default PageTitle;
