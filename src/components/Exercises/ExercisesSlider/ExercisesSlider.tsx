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
    total: number;
    limit: number;
    isLoading: boolean;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Slider: React.FC<Props> = ({ exercisesList, currentCategory, setPage, total, limit }) => {

    const onChange = (currentSlide: number) => {
        if (currentCategory) console.log(currentCategory);
        setPage(currentSlide + 1);
    };

    const slidesCounter: number = Math.ceil(total / limit);

    const sliderBlocks = Array.from({ length: slidesCounter }, (_, index) => (
        <div key={index + 1}>
            <ExercisesSubcategoriesList exercisesList={exercisesList} />
        </div>
    ));

    return (
        <>
            {exercisesList.length ?
                <Carousel afterChange={onChange}>
                    {sliderBlocks}
                </Carousel> : <NotFoundMessage />}
        </>
    );
};

export default Slider;