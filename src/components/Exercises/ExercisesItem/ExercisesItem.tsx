import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

import {
  ExercisesListItem,
  ItemTextWrapper,
  ListItemTitle,
  ListItemCategory,
  ListItemImg,
} from './ExercisesItem.styled';


interface ExercisesItemProps {
  name: string;
  filter: string;
  img: string;
}

const ExercisesItem: React.FC<ExercisesItemProps> = ({ name, filter, img }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]);

  const onClick = () => {
    setSearchParams({ ...params, category: name });
  };

  return (
    <ExercisesListItem onClick={onClick}>
        <ItemTextWrapper>
          <ListItemTitle>{name}</ListItemTitle>
          <ListItemCategory>{filter}</ListItemCategory>
        </ItemTextWrapper>
          <ListItemImg src={img} alt={name} />
    </ExercisesListItem>
  );
};

export default ExercisesItem;
