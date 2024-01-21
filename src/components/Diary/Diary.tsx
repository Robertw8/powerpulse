import {
    Text,
    TextWrap,
    BlockWrap,
   NextGrayBlock,
    GrayBlockTitle,
    RedBlockTitle,
    AddingTextBlockWrap,
    AddingBlocksWrap,
    MainDiaryWrap
  } from './Diary.styled';
  import { Icon } from '../Icon';
import { DiaryNotFoundItems } from './DiaryNotFoundItems';
import { DailyStatusBlock } from './DailyStatusBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer'
// import { useEffect } from 'react';
// import { AppDispatch } from '../../redux'
// import { getDiary } from '../../redux/dairy';


// import { MyCalendar } from './Calendar';

  const Diary = () => {
  
    // const dispatch = useDispatch<AppDispatch>();
    const userData = useSelector((state: RootState) => state.auth.user);
    // useEffect(() => {
    //   dispatch(getDiary('21/01/2024'));
     
    // }, [dispatch]);
    return (
      <>
      {/* <MyCalendar></MyCalendar> */}
      <MainDiaryWrap>
      <BlockWrap>
          <DailyStatusBlock text={'Daily calorie intake'} backgroundColor='#E6533C' textColor='rgba(239, 237, 232, 0.80)' children={   <Icon
                    name="food"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} value={userData.dailyCalories || 0 }></DailyStatusBlock>
      <DailyStatusBlock text={'Daily physical activity'} backgroundColor='#E6533C' textColor='rgba(239, 237, 232, 0.80)' children={      <Icon
                    name="dumbbell"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} whiteSpace='none'  value={(userData.dailyActivity || 0)+ ' min'}></DailyStatusBlock>
      <DailyStatusBlock text={'Сalories consumed'} children={ <Icon
                    name="apple"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} value='0'></DailyStatusBlock>
      <DailyStatusBlock text={'Сalories burned'} children={       <Icon
                    name="fire"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} value='0'></DailyStatusBlock>
      <DailyStatusBlock text={'Сalories remaining'} children={<Icon
                    name="bubble"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} value='0'></DailyStatusBlock>
      <DailyStatusBlock text={'Sports remaining'} children={ <Icon
                    name="running-figure"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                    fill='#EF8964'
                  />} value='0'></DailyStatusBlock>
      </BlockWrap>
            <TextWrap>
              <Icon
                name="warning"
                iconWidth={{ mobile: '24px', tablet: '24px' }}
                iconHeight={{ mobile: '24px', tablet: '24px' }}
              />
              <Text>
              Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
              </Text>
            </TextWrap>
            <AddingBlocksWrap>
            <NextGrayBlock>
                <AddingTextBlockWrap>
         <GrayBlockTitle>Products</GrayBlockTitle>  
                  <RedBlockTitle>Add product
                  <Icon name='arrow-right'      
                     iconWidth={{ mobile: '16px', tablet: '16px' }}
                iconHeight={{ mobile: '16px', tablet: '16px' }}
               
                  /></RedBlockTitle>           
                    </AddingTextBlockWrap>
                    <DiaryNotFoundItems items='products'/>
              </NextGrayBlock>
              <NextGrayBlock>  
              <AddingTextBlockWrap> 
                 <GrayBlockTitle>Exercises</GrayBlockTitle> 
                 <RedBlockTitle>Add exercise 
                 <Icon name='arrow-right'      
                     iconWidth={{ mobile: '16px', tablet: '16px' }}
                iconHeight={{ mobile: '16px', tablet: '16px' }}
                  />
                </RedBlockTitle>                
               </AddingTextBlockWrap>
               <DiaryNotFoundItems items='exercises'/>
</NextGrayBlock>
</AddingBlocksWrap>
</MainDiaryWrap>
      </>
    );
  };
  
  export default Diary;
  
