import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  filter: string;
  img: string;
  category: string
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentExercise: React.Dispatch<React.SetStateAction<string>>;
}

const ExercisesItem: React.FC<ExercisesItemProps> = ({ name, filter, img, category, toggle, setCurrentExercise }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onClick = () => {
    navigate(`/exercises/${category}/${name}`);
    toggle(true);
    setCurrentExercise(name);
    dispatch(setFilters('choice', name));
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
