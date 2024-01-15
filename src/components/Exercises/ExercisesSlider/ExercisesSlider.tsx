import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList';
import { Carousel } from 'antd';

type Props = {
    exercisesList: Array<{
        _id: string;
        filter: string;
        name: string;
        imgURL: string;}>;
    currentCategory: string;
}

const Slider: React.FC<Props> = ({ exercisesList, currentCategory }) => {
    
    const onChange = (currentSlide: number) => {
        console.log(currentSlide + 1);
    };

    if (currentCategory)
        
    return(
    <Carousel afterChange={onChange}>
        <div>
            <ExercisesSubcategoriesList exercisesList={exercisesList} />
        </div>
        <div>
            <ExercisesSubcategoriesList exercisesList={exercisesList} />
        </div>
        </Carousel>
    )
};

export default Slider;