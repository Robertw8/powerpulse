import { ExercisesList } from "./ExercisesSubcategoriesList.styled";

import { ExercisesItem } from "../ExercisesItem";

const ExercisesSubcategoriesList: React.FC = ({ exercisesList }) => {

    return (
        <ExercisesList>
            {exercisesList.map(({ _id, filter, name, imgURL }) =>
                <ExercisesItem
                    key={_id}
                    filter={filter}
                    name={name}
                    img={imgURL}
                />
            )}
        </ExercisesList>
    )
}

export default ExercisesSubcategoriesList;