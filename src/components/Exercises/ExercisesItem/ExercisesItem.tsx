// import { useNavigate } from "react-router-dom";

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
  
  // const navigate = useNavigate();

  // const onClick = () => {
  //   navigate(`/exercises/${name}`, { replace: true })
  // }

  return (
    <ExercisesListItem>
      <ItemTextWrapper>
        <ListItemTitle>{name}</ListItemTitle>
        <ListItemCategory>{filter}</ListItemCategory>
      </ItemTextWrapper>
      <ListItemImg src={img} alt={name} />
    </ExercisesListItem>
  );
};

export default ExercisesItem;
