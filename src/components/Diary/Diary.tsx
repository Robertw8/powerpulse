import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { useEffect } from 'react';
import { AppDispatch } from '../../redux';
import {

  getDiary,
  selectCaloriesBurned,
  selectCaloriesConsumed,
  selectExercises,
  selectSportsTime
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
import { selectProducts } from '../../redux/products';

// import { MyCalendar } from './Calendar';

const Diary = () => {
  const userData = useSelector((state: RootState) => state.auth.user);
  const caloriesBured=useSelector(selectCaloriesBurned)
const caloriesConsumed=useSelector(selectCaloriesConsumed)
const sportsTime=useSelector(selectSportsTime)
const diaryExercises=useSelector(selectExercises)
const diaryProducts=useSelector(selectProducts)
const sportsRemaining:number=sportsTime-userData.dailyActivity
const caloriesRemaining:number=userData.dailyCalories-caloriesConsumed

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    dispatch(getDiary(dayjs().format('DD/MM/YYYY')));
  }, [dispatch]);



  return (
    <>
      {/* <MyCalendar></MyCalendar> */}
      <MainDiaryWrap>
        <DesktopWrap>
          <BlockWrap>
            <DailyStatusBlock
              text={'Daily calorie intake'}
              backgroundColor="#E6533C"
              textColor="rgba(239, 237, 232, 0.80)"
              children={
                <Icon
                  name="food"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              value={userData.dailyCalories || 0}
            ></DailyStatusBlock>
            <DailyStatusBlock
              text={'Daily physical activity'}
              backgroundColor="#E6533C"
              textColor="rgba(239, 237, 232, 0.80)"
              children={
                <Icon
                  name="dumbbell"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              whiteSpace="none"
              value={(userData.dailyActivity || 0) + ' min'}
            ></DailyStatusBlock>
            <DailyStatusBlock
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
              text={'Сalories burned'}
              children={
                <Icon
                  name="fire"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
              }
              value={caloriesBured}
            ></DailyStatusBlock>
            <DailyStatusBlock
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
      <InfoBoxes exercises={diaryExercises.length} products={diaryProducts.length}/>
      </MainDiaryWrap>
    </>
  );
};

export default Diary;
