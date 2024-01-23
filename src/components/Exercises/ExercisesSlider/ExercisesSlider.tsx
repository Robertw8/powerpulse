import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/exercises';
import { apiService } from '../../../services';

import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList';
import { Carousel } from 'antd';

const Slider: React.FC = () => {

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [total, setTotal] = useState<number>(1);
    const [exercisesList, setExercisesList] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorPage, setErrorPage] = useState<boolean>(false);

    const currentfilter = (category: string) => {
    if (category === 'bodyPart') {
      return 'Body parts';
    } else if (category === 'muscles') {
      return 'Muscles';
    } else {
      return 'Equipment';
    }};
    
    const filters = useSelector(selectFilters);

    useEffect(() => {
        window.screen.width >= 768 && window.screen.width < 1440 ?
            setLimit(9) : setLimit(10);
        
        const filter = filters.filter ? currentfilter(filters.filter) : currentfilter('bodyPart');
        const responce = apiService({method: 'get',
            url: `/exercises/${filter}?page=${page}&limit=${limit}`});
        setIsLoading(true);

        responce.then(({ data, totalItems }) => {
            if (!data.length) return setErrorPage(true);
            setExercisesList(data);
            setTotal(totalItems);
        })
        .catch(() => {
            setErrorPage(true);
        })
        .finally(() => setIsLoading(false));
    },[filters.filter, limit, page])

    const onChange = (currentSlide: number) => {
        setPage(currentSlide + 1);
    };

    const slidesCounter: number = Math.ceil(total / limit);

    const sliderBlocks = Array.from({ length: slidesCounter }, (_, index) => (
        <div key={index + 1}>
            <ExercisesSubcategoriesList exercisesList={exercisesList}/>
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