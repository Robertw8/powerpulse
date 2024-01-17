import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList';
import { Carousel } from 'antd';

import {NotFoundMessage} from '../../Products'

type Props = {
    exercisesList: Array<{
        _id: string;
        filter: string;
        name: string;
        imgURL: string;}>;
    currentCategory: string;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Slider: React.FC<Props> = ({ exercisesList, currentCategory, setPage }) => {
    
    const onChange = (currentSlide: number) => {
        if (currentCategory) console.log(currentCategory);
        setPage(currentSlide + 1);
    };
        
    return(
        <>{exercisesList.length ?
            <Carousel afterChange={onChange}>
                <div>
                    <ExercisesSubcategoriesList exercisesList={exercisesList} />
                </div>
                <div>
                    <ExercisesSubcategoriesList exercisesList={exercisesList} />
                </div>
                <div>
                    <ExercisesSubcategoriesList exercisesList={exercisesList} />
                </div>
                <div>
                    <ExercisesSubcategoriesList exercisesList={exercisesList} />
                </div>
            </Carousel> : <NotFoundMessage/>}
        </>
    )
};

export default Slider;