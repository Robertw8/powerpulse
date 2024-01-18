import { ExercisesList } from './ExercisesSubcategoriesList.styled';

import { ExercisesItem } from '../ExercisesItem';

interface ExercisesSubcategoriesListProps {
  exercisesList: {
    _id: string;
    filter: string;
    name: string;
    imgURL: string;
  }[];
}

const ExercisesSubcategoriesList: React.FC<ExercisesSubcategoriesListProps> = ({
  exercisesList
}) => {
  return (
    <ExercisesList>
      {exercisesList.map(({ _id, filter, name, imgURL }) => (
        <ExercisesItem key={_id} filter={filter} name={name} img={imgURL} />
      ))}
    </ExercisesList >
  );
};

export default ExercisesSubcategoriesList;
