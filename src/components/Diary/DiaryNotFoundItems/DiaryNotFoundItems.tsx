import React from 'react';
import { NotFound } from './DiaryNotFoundItems.styled';

const DiaryNotFoundItems: React.FC<{ items: string }> = ({ items }) => {
  return <NotFound>You haven't added any {items} yet</NotFound>;
};
export default DiaryNotFoundItems;
