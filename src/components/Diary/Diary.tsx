import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux';
import {
  getDiary,
  selectCaloriesBurned,
  selectCaloriesConsumed,
  selectExercises,
  selectProducts,
  selectSportsTime,
  selectCaloriesRemaining,
} from '../../redux/diary';
import dayjs from 'dayjs';
import {
  Text,
  TextWrap,
  BlockWrap,
  MainDiaryWrap,
  DesktopWrap,
} from './Diary.styled';
import { Icon } from '../Icon';
import { DailyStatusBlock } from './DailyStatusBlock';
import { InfoBoxes } from './InfoBoxes';
import { useAuth } from '../../hooks';

const Diary = () => {
  const { user } = useAuth();
  const caloriesBurned = useSelector(selectCaloriesBurned);
  const caloriesConsumed = useSelector(selectCaloriesConsumed);
  const diaryExercises = useSelector(selectExercises);
  const diaryProducts = useSelector(selectProducts);
  const sportsRemaining = useSelector(selectSportsTime);
  const caloriesRemaining = useSelector(selectCaloriesRemaining);
 
  const sportsComplete = sportsRemaining > user.dailyActivity;
  const resultCalories=Math.sign(caloriesRemaining)===1?true:false
console.log(resultCalories);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDiary(dayjs().format('DD/MM/YYYY')));
  }, [dispatch]);

  return (
    <>
      <MainDiaryWrap>
        <DesktopWrap>
          <BlockWrap>
            <DailyStatusBlock
              text={'Daily calorie intake'}
              backgroundColor="#E6533C"
              textColor="rgba(239, 237, 232, 0.80)"
              borderColor={'rgba(239, 237, 232, 0.20)'}
              children={
                <Icon
                  name="food"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              value={user.dailyCalories || 0}
            ></DailyStatusBlock>
            <DailyStatusBlock
              text={'Daily physical activity'}
              backgroundColor="#E6533C"
              borderColor={'rgba(239, 237, 232, 0.20)'}
              textColor="rgba(239, 237, 232, 0.80)"
              children={
                <Icon
                  name="dumbbell"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              whiteSpace="none"
              value={(user.dailyActivity || 0) + ' min'}
            ></DailyStatusBlock>
            <DailyStatusBlock
              borderColor={'rgba(239, 237, 232, 0.20)'}
              text={'Сalories consumed'}
              children={
                <Icon
                  name="apple"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              value={caloriesConsumed}
            ></DailyStatusBlock>
            <DailyStatusBlock
              borderColor={'rgba(239, 237, 232, 0.20)'}
              text={'Сalories burned'}
              children={
                <Icon
                  name="fire"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              value={caloriesBurned}
            ></DailyStatusBlock>
            <DailyStatusBlock
              borderColor={resultCalories ? '#3CBF61' : '#E9101D'}
              text={'Сalories remaining'}
              children={
                <Icon
                  name="bubble"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              value={caloriesRemaining}
            ></DailyStatusBlock>
            <DailyStatusBlock
              borderColor={sportsComplete ? '#3CBF61' : '#E9101D'}
              text={'Sports remaining'}
              children={
                <Icon
                  name="running-figure"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                  fill="#EF8964"
                />
              }
              value={sportsRemaining}
            ></DailyStatusBlock>
          </BlockWrap>
          <TextWrap>
            <Icon
              name="warning"
              iconWidth={{ mobile: '24px', tablet: '24px' }}
              iconHeight={{ mobile: '24px', tablet: '24px' }}
            />
            <Text>
              Record all your meals in the calorie diary every day. This will
              help you be aware of your nutrition and make informed choices.
            </Text>
          </TextWrap>
        </DesktopWrap>
        <InfoBoxes
          exercises={diaryExercises.length}
          products={diaryProducts.length}
        />
      </MainDiaryWrap>
    </>
  );
};

export default Diary;
