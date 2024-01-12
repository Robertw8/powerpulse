import styled from '@emotion/styled';
import {  Button  } from 'antd';



const FormContainer = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 10px;
margin-bottom: 10px;
`
const TitleSignUp = styled.h2`
font-size: 32px;
margin-top: 151px;
`
const ParagraphSignUp = styled.p`
width: 496px;
margin-top: 16px;
margin-bottom: 32px;
font-size: 16px;
 color: rgba(239, 237, 232, 0.3);
`

const ImgSignUp = styled.img`
width: 670px;
height: 800px;
margin-left: 178px;
`

const ContainerSignUp = styled.div`
display: flex;
`

const BlockSignUp = styled.div`
display: flex;
flex-direction: column;
`

const WidthInput = styled.div`
width: 364px;
height: 52px;
`
const BtnSignUp = styled(Button)`
width: 190px;
height: 56px;
border: none;
background-color: #e6533c;
color: #EFEDE8;
margin-top: 64px;

  &:hover,
  &:focus {
    background-color:#EF8964;
  }
`


export  {BtnSignUp, ContainerSignUp,BlockSignUp, ImgSignUp, ParagraphSignUp, FormContainer, TitleSignUp, WidthInput };
