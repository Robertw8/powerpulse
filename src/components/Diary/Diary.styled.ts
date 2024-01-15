import styled from '@emotion/styled';

const BlockWrap = styled.div`
margin: 40px 0 20px 0 ;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 13px;
`
const BlockData = styled.div`
width: 157px;
height: 96px;
padding: 13px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: #E6533C;

display: flex;
justify-content: space-between;
flex-direction: column;
`
const GrayBlock=styled(BlockData)`

border: 1px solid rgba(239, 237, 232, 0.20);
background: rgba(239, 237, 232, 0.05);
`
const NextGrayBlock=styled(GrayBlock)`
margin-top: 40px;
width: 335px;
height: 335px;`
const TextBlockWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`
const AddingTextBlockWrap= styled(TextBlockWrap)`justify-content:space-between`
const NextTextBlockWrap=styled(TextBlockWrap)`
justify-content:space-between;`
const TitleBlock = styled.p`
font-size: 12px;
color: rgba(239, 237, 232, 0.80);
line-height: 16px;
`
const GrayBlockTitle=styled(TitleBlock)`
font-size:14px;
color:rgba(239, 237, 232, 0.40);
line-height: 18px;
`
const RedBlockTitle=styled(GrayBlockTitle)`

color:rgba(230, 83, 60, 1);
`
const TextWrap = styled.div`
display: flex;
gap: 8px;
justify-content: center;
`

const TextValue = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 20px;
`

const Text = styled.p`
width: 310px;
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
font-style: normal;
line-height: 18px; 
`



export {  Text, TextWrap, BlockWrap, BlockData, GrayBlock, NextGrayBlock, TitleBlock, GrayBlockTitle,RedBlockTitle, TextBlockWrap,AddingTextBlockWrap ,NextTextBlockWrap, TextValue }