import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { Category } from '../Exercises';

import { CategoryList } from './ExercisesCategories.styled';
import { Dispatch, SetStateAction } from 'react';

interface ExercisesCategoriesProps {
  changeCategory: Dispatch<SetStateAction<Category>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const ExercisesCategories: React.FC<ExercisesCategoriesProps> = ({changeCategory, setPage}) =>
  {
  const onChange = (key) => {
      changeCategory(key);
      setPage(1);
    };

    const items: TabsProps['items'] = [
      {
        key: 'Body parts',
        label: 'Body parts',
        children: 'Content of Body parts',
      },
      {
        key: 'Muscles',
        label: 'Muscles',
        children: 'Content of Muscles',
      },
      {
        key: 'Equipment',
        label: 'Equipment',
        children: 'Content of Equipment',
      },
    ];
    return (
      <CategoryList>
        <Tabs defaultActiveKey="Body parts" items={items} onChange={onChange} />
      </CategoryList>
    );
  };

export default ExercisesCategories;
