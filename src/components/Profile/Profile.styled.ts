import styled from '@emotion/styled';
import {  Button  } from 'antd';


const Title = styled.h2`
margin: 40px 0;
text-align: center;
`
const ImgWrap = styled.div`
width: 90px;
height: 90px;
border: 2px solid #E6533C;
border-radius: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto ;
`
const BlockWrap = styled.div`
margin: 40px 0 ;
display: flex;
justify-content: center;
gap: 14px;
`
const BlockData = styled.div`
width: 157px;
height: 96px;
padding: 14px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);

background: #E6533C;
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

const Btn = styled(Button)`
width: 115px;
height: 42px;
border: none;
background-color: #e6533c;
color: #EFEDE8;
margin-top: 64px;
// padding: 12px 40px;

  &:hover,
  &:focus {
    background-color:#EF8964;
  }
`

export { Btn, Title, ImgWrap, Text, TextWrap, BlockWrap, BlockData }