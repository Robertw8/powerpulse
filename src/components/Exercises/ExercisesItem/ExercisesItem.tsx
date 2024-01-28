import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useExercises } from '../../../hooks';
import { setFilters } from '../../../redux/exercises';

import {
  ExercisesListItem,
  ItemTextWrapper,
  ListItemTitle,
  ListItemCategory,
  ListItemImg,
} from './ExercisesItem.styled';

interface ExercisesItemProps {
  name: string;
  img: string;
  filter: string;
}

const ExercisesItem: React.FC<ExercisesItemProps> = ({ name, img, filter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exercisesFilters } = useExercises();

  const onClick = () => {
    navigate(`/exercises/${exercisesFilters.filter}/${name}`);
    dispatch(setFilters(exercisesFilters.filter, name));
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
