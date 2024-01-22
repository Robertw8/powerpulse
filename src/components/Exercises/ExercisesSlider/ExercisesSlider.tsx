import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList';
import { Carousel } from 'antd';

type Props = {
    exercisesList: Array<{
        _id: string;
        filter: string;
        name: string;
        imgURL: string;}>;
    total: number;
    limit: number;
    isLoading: boolean;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    category: string;
    toggleExercisesPage: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentExercise: React.Dispatch<React.SetStateAction<string>>;
}

const Slider: React.FC<Props> = ({ exercisesList, setPage, total, limit, category, toggleExercisesPage, setCurrentExercise }) => {

    const onChange = (currentSlide: number) => {
        setPage(currentSlide + 1);
    };

    const slidesCounter: number = Math.ceil(total / limit);

    const sliderBlocks = Array.from({ length: slidesCounter }, (_, index) => (
        <div key={index + 1}>
            <ExercisesSubcategoriesList
                exercisesList={exercisesList}
                category={category}
                togglePage={toggleExercisesPage}
                setCurrentExercise={setCurrentExercise} />
        </div>
    ));

    return (
        <>
            {exercisesList.length > 0 &&
                <Carousel afterChange={onChange}>
                    {sliderBlocks}
                </Carousel>}
        </>
    );
};

export default Slider;