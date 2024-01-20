// import { useFormik } from 'formik';
// import { PrimaryButton } from '..';

import {
    Text,
    TextWrap,
    BlockWrap,
   NextGrayBlock,
    GrayBlockTitle,
    RedBlockTitle,

    AddingTextBlockWrap,
    
  } from './Diary.styled';
  import { Icon } from '../Icon';
import { DiaryNotFoundItems } from './DiaryNotFoundItems';
import { DailyStatusBlock } from './DailyStatusBlock';
import { MyCalendar } from './Calendar';

  
//   import { useState } from 'react';
  
  const Diary = () => {

    // const [buttonFocus, setButtonFocus] = useState(false); через те що ніде не використовується, не проходить деплой, тому поки прибрав щоб змерджити
    return (
      <>
      <MyCalendar></MyCalendar>
      <BlockWrap>
          <DailyStatusBlock text={'Daily calorie intake'} backgroundColor='#E6533C' textColor='rgba(239, 237, 232, 0.80)' children={   <Icon
                    name="food"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} value='0'></DailyStatusBlock>
      <DailyStatusBlock text={'Daily physical activity'} backgroundColor='#E6533C' textColor='rgba(239, 237, 232, 0.80)' children={      <Icon
                    name="dumbbell"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />} whiteSpace='none'  value='0'></DailyStatusBlock>
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
      </>
    );
  };
  
  export default Diary;
  
