import styled from '@emotion/styled';
import {  Button  } from 'antd';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
margin: 40px 0;
// text-align: center;
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
padding: 6px 0 0
`

const UserAvatar = styled.div`
position: relative;
top: 15px;
` 

const BtnAvatar = styled.button`
 padding: 0;
  border: none;
  background-color: transparent;

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
padding: 13px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: #E6533C;

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

const TitleBlock = styled.p`
font-size: 12px;
color: rgba(239, 237, 232, 0.80);
line-height: 16px;
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

const Btn = styled(Button)`
width: 115px;
height: 42px;
border: none;
background-color: #e6533c;
color: #EFEDE8;
// margin-top: 64px;
// padding: 12px 40px;

  &:hover,
  &:focus {
    background-color:#EF8964;
  }
`

export { Btn, Title, ImgWrap, Text, TextWrap, BlockWrap, BlockData, Wrap, TitleBlock, TextBlockWrap, UserAvatar, BtnAvatar, TextValue }