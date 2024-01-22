import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Category } from '../Exercises';

import { CategoryList } from './ExercisesCategories.styled';
import { Dispatch, SetStateAction } from 'react';

interface ExercisesCategoriesProps {
  changeCategory: Dispatch<SetStateAction<Category>>;
  setPage: Dispatch<SetStateAction<number>>;
  exercisesPage:boolean
}

const ExercisesCategories: React.FC<ExercisesCategoriesProps> = ({ changeCategory, setPage, exercisesPage }) => {
  
  const [tabs, toggleTabs] = useState<boolean>(false);

  useEffect(() => {
    exercisesPage ? toggleTabs(true) : toggleTabs(false)
  }, [exercisesPage])
  
  const navigate = useNavigate();

  const onChange = (key:Category) => {
    navigate(`/exercises/${key}`);
    changeCategory(key);
    setPage(1);
    };

    const items: TabsProps['items'] = [
      {
        key: 'bodyPart',
        label: 'Body parts',
        children: 'Content of Body parts',
        disabled: tabs,
      },
      {
        key: 'muscles',
        label: 'Muscles',
        children: 'Content of Muscles',
        disabled: tabs,
      },
      {
        key: 'equipment',
        label: 'Equipment',
        children: 'Content of Equipment',
        disabled: tabs,
      },
    ];
    return (
      <CategoryList>
        <Tabs defaultActiveKey='Body parts' items={items} onChange={onChange} />
      </CategoryList>
    );
  };

export default ExercisesCategories;
