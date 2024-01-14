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
