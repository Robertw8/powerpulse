import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../../../redux/exercises';

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

const ExercisesItem: React.FC<ExercisesItemProps> = ({ name, img, filter}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filters = useSelector(selectFilters);
  
  const onClick = () => {
    navigate(`/exercises/${filters.filter}/${name}`);
    dispatch(setFilters(filters.filter, name));
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
