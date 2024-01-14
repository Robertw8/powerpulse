import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { CategoryList } from './ExercisesCategories.styled';
import { Dispatch, SetStateAction } from 'react';

interface ExercisesCategoriesProps {
  currentCategory: string;
  changeCategory: Dispatch<SetStateAction<string>>;
}

const ExercisesCategories: React.FC<ExercisesCategoriesProps> = ({
  currentCategory,
  changeCategory,
}) => {
  const onChange = (key: string) => {
    changeCategory(key);
  };

  console.log(currentCategory);

  const items: TabsProps['items'] = [
    {
      key: 'bodyPart',
      label: 'Body parts',
      children: 'Content of Body parts',
    },
    {
      key: 'target',
      label: 'Muscles',
      children: 'Content of Muscles',
    },
    {
      key: 'equipment',
      label: 'Equipment',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <CategoryList>
      <Tabs defaultActiveKey="body-parts" items={items} onChange={onChange} />
    </CategoryList>
  );
};

export default ExercisesCategories;
