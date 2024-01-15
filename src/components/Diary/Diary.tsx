// import { useFormik } from 'formik';
// import { PrimaryButton } from '..';
import {
    Text,
    TextWrap,
    BlockWrap,
    BlockData,
   GrayBlock,
   NextGrayBlock,
    TitleBlock,
    GrayBlockTitle,
    RedBlockTitle,
    TextBlockWrap,
    AddingTextBlockWrap,
    TextValue,
  } from './Diary.styled';
  import { Icon } from '../Icon';
import { DiaryNotFoundItems } from '../DiaryNotFoundItems';
  
//   import { useState } from 'react';
  
  const Diary = () => {

    // const [buttonFocus, setButtonFocus] = useState(false); через те що ніде не використовується, не проходить деплой, тому поки прибрав щоб змерджити
    return (
      <>
            <BlockWrap>
              <BlockData>
                <TextBlockWrap>
                  <Icon
                    name="food"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />
                  <TitleBlock>Daily calorie intake</TitleBlock>
                </TextBlockWrap>
                <TextValue>0</TextValue>
              </BlockData>
              <BlockData>
                <TextBlockWrap>
                  <Icon
                    name="dumbbell"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />
                  <TitleBlock>Daily physical activity</TitleBlock>
                </TextBlockWrap>
                <TextValue>0 min</TextValue>
              </BlockData>
              <GrayBlock>
                <TextBlockWrap>
                  <Icon
                    name="apple"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />
                  <GrayBlockTitle>Calories consumed</GrayBlockTitle>
                </TextBlockWrap>
                <TextValue>0</TextValue>
              </GrayBlock>
              <GrayBlock>
                <TextBlockWrap>
                  <Icon
                    name="fire"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />
                  <GrayBlockTitle>Calories burned</GrayBlockTitle>
                </TextBlockWrap>
                <TextValue>0</TextValue>
              </GrayBlock>
              <GrayBlock>
                <TextBlockWrap>
                  <Icon
                    name="bubble"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                  />
                  <GrayBlockTitle>Calories remaining</GrayBlockTitle>
                </TextBlockWrap>
                <TextValue>1493</TextValue>
              </GrayBlock>
              <GrayBlock>
                <TextBlockWrap>
                  <Icon
                    name="running-figure"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}
                    fill='#EF8964'
                    stroke='#EF8964'
                  />
                  <GrayBlockTitle>Calories remaining</GrayBlockTitle>
                </TextBlockWrap>
                <TextValue>85 min</TextValue>
              </GrayBlock>
            </BlockWrap>
  
            <TextWrap>
              <Icon
                name="warning"
                iconWidth={{ mobile: '24px', tablet: '24px' }}
                iconHeight={{ mobile: '24px', tablet: '24px' }}
              />
              <Text>
                We understand that each individual is unique, so the entire
                approach to diet is relative and tailored to your unique body and
                goals.
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
  
