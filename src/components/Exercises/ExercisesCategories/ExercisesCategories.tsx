import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Category } from '../Exercises';
import { CategoryList } from './ExercisesCategories.styled';
import { Tabs } from 'antd';

import type { TabsProps } from 'antd';
import { setFilters } from '../../../redux/exercises';
import { AppDispatch } from '../../../redux';

const ExercisesCategories: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (key: Category) => {
    dispatch(setFilters(key, ''));
    navigate(`/exercises/${key}`);
  };

  const items: TabsProps['items'] = [
    {
      key: 'bodyPart',
      label: 'Body parts',
      children: 'Content of Body parts',
    },
    {
      key: 'muscles',
      label: 'Muscles',
      children: 'Content of Muscles',
    },
    {
      key: 'equipment',
      label: 'Equipment',
      children: 'Content of Equipment',
    },
  ];

  return (
    <CategoryList>
      <Tabs
        defaultActiveKey={'bodyPart'}
        items={items}
        onChange={value => {
          onChange?.(value as Category);
        }}
      />
    </CategoryList>
  );
};

export default ExercisesCategories;
