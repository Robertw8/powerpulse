import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { selectFilters, setFilters } from '../../../redux/exercises';
import { AppDispatch } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { Category } from '../Exercises';
import { CategoryList } from './ExercisesCategories.styled';

const ExercisesCategories: React.FC = () => {

  const [tabs, toggleTabs] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilters);
  const location = useLocation();

  useEffect(() => {
    filters.category ? toggleTabs(true) : toggleTabs(false);
  },[dispatch, filters.category, location.pathname])

  const onChange = (key: Category) => {
    dispatch(setFilters(key, ""));
    navigate(`/exercises/${key}`);
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
      <Tabs
        defaultActiveKey={"bodyPart"}
        items={items}
        onChange={value => {
          onChange?.(value as Category);
        }}
      />
    </CategoryList>
  );
};

export default ExercisesCategories;
