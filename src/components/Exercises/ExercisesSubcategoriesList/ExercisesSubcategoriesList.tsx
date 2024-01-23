import { ExercisesList } from './ExercisesSubcategoriesList.styled';

import { ExercisesItem } from '../ExercisesItem';

interface ExercisesSubcategoriesListProps {
  setCurrentExercise: React.Dispatch<React.SetStateAction<string>>;
  togglePage: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  exercisesList: {
    _id: string;
    filter: string;
    name: string;
    imgURL: string;
  }[];
}

const ExercisesSubcategoriesList: React.FC<ExercisesSubcategoriesListProps> = ({
  exercisesList, category, togglePage, setCurrentExercise
}) => {
  return (
    <ExercisesList>
      {exercisesList.length && exercisesList.map(({ _id, filter, name, imgURL}) => (
        <ExercisesItem
          key={_id} filter={filter} name={name} img={imgURL} category={category}
          toggle={togglePage} setCurrentExercise={setCurrentExercise} />
      ))}
    </ExercisesList >
  );
};

export default ExercisesSubcategoriesList;
