import styled from '@emotion/styled';

const BlockWrap = styled.div`
margin: 40px 0 20px 0 ;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 13px;
`
const NextGrayBlock = styled.div`
margin-top: 40px;
width: 335px;
height: 335px;
padding: 13px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: rgba(239, 237, 232, 0.05);

display: flex;
justify-content: space-between;
flex-direction: column;
`


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

const GrayBlockTitle=styled.p`
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




const Text = styled.p`
width: 310px;
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
font-style: normal;
line-height: 18px; 
`



export {  Text, TextWrap, BlockWrap,  NextGrayBlock,  GrayBlockTitle,RedBlockTitle, TextBlockWrap,AddingTextBlockWrap ,NextTextBlockWrap }