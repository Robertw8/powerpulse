import { useState } from 'react';

import { PageTitle } from '..';
import { ExercisesCategories } from './ExercisesCategories';
import { ExercisesSubcategoriesList } from './ExercisesSubcategoriesList';

import { ExercisesWrap, TopWrap } from './Exercises.styled';

const Exercises: React.FC = () => {
  const [currentCategory, setcurrentCategory] = useState('bodyPart');
  const [exercisesList] = useState([
    {
      _id: '650f35ece3f5522fc6396289',
      filter: 'Body parts',
      name: 'back',
      imgURL: 'https://ftp.goit.study/img/power-pulse/filters/back_wzzphw.jpg',
    },
    {
      _id: '650f35ece3f5522fc639628a',
      filter: 'Body parts',
      name: 'cardio',
      imgURL:
        'https://ftp.goit.study/img/power-pulse/filters/cardio_pkkceg.jpg',
    },
    {
      _id: '650f35ece3f5522fc639628b',
      filter: 'Body parts',
      name: 'chest',
      imgURL: 'https://ftp.goit.study/img/power-pulse/filters/chest_rqs6fw.jpg',
    },
    {
      _id: '650f35ece3f5522fc63962568b',
      filter: 'Body parts',
      name: 'chest',
      imgURL: 'https://ftp.goit.study/img/power-pulse/filters/chest_rqs6fw.jpg',
    },
    {
      _id: '650f35ece3f5522fc6396238b',
      filter: 'Body parts',
      name: 'chest',
      imgURL: 'https://ftp.goit.study/img/power-pulse/filters/chest_rqs6fw.jpg',
    },
    {
      _id: '650f35ece3f5522fc6239628b',
      filter: 'Body parts',
      name: 'chest',
      imgURL: 'https://ftp.goit.study/img/power-pulse/filters/chest_rqs6fw.jpg',
    },
  ]);

  return (
    <ExercisesWrap>
      <TopWrap>
        <PageTitle text={'Exercises'} />
        <ExercisesCategories
          currentCategory={currentCategory}
          changeCategory={setcurrentCategory}
        />
      </TopWrap>
      <ExercisesSubcategoriesList exercisesList={exercisesList} />
    </ExercisesWrap>
  );
};

export default Exercises;
