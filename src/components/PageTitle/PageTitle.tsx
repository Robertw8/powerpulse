import { Title } from './PageTitle.styled';
import React from 'react';
const PageTitle: React.FC<{ text: string }> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default PageTitle;
