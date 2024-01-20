import styled from '@emotion/styled';
import {  Button, Input  } from 'antd';
import { Link } from 'react-router-dom';
import InputPrimary from '../InputPrimary/InputPrimary.tsx';
import { Title } from '../PageTitle/PageTitle.styled.ts';
import { StyledInputProps } from '../InputPrimary/InputPrimary.styled.ts';
import {validationStatuses} from '../InputPrimary/InputPrimary.styled.ts';


const FormContainer = styled.form`
width: 335px;
display: flex;
flex-direction: column;

@media screen and (min-width: 769px) {
width: 364px;
display: flex;
flex-direction: column;
gap: 15px;

margin-bottom: 10px;
 }

`
const TitleSignUp = styled(Title)`

margin-top: 90px ;
margin-bottom: 14px;

 @media screen and (min-width: 769px) {
margin-top: 140px;
margin-bottom: 16px;
 }

   @media screen and (min-width: 1441px) {
 margin-top: 151px;

  }
`
const ParagraphAuth = styled.p`
width: 335px;
height:54px;

margin-bottom: 28px;
font-size: 14px;
 color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 769px) {
width: 496px;

margin-bottom: 32px;
font-size: 16px;
 color: rgba(239, 237, 232, 0.3);
 }
`
const ParagraphAfterBtn = styled.p`
width: 176px;
height: 18px;
font-size: 12px;
 color: rgba(239, 237, 232, 0.3);
`

const LinkAuth = styled(Link)`
color: rgba(239, 237, 232, 0.6);
`

const InputAuth = styled(InputPrimary)`
  width: 100%;
  height:46px; 

`

const InputPassword = styled(Input.Password)<StyledInputProps>`
    width: 100%;
  height: 46px;
  padding: 14px;

  color: #fff;
  font-size: 14px;
  line-height: calc(18 / 14);

 
 border-color: ${({ bordercolor }) => validationStatuses[bordercolor]};
  background-color: transparent !important;
  box-shadow: 0;

  
  
  &:hover,
  &:focus,
  &:focus-within {
    background-color: transparent !important;
    border-color: #e6533c !important;

  };    



.ant-input{

  &::placeholder {
    color: #efede84d !important;
    /* transition-duration: 300ms; */
  }
}

.ant-input-password-icon{
  color: #fff !important;
}
 
`

const ContainerSignUp = styled.div`
display: flex;
flex-direction:column;
position: relative;
width: 100%;
height: auto;

 @media screen and (min-width: 769px) {
 display: flex;
 
 }
`



const ImgSignUp = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 180px;
  z-index: -1;

 @media screen and (min-width: 769px) {
  width: 670px;
  height: auto;
  position: absolute;
  top: -50px;
  left: 50px;
 
  }
  @media screen and (min-width: 1441px) {
  width: 700px;
  height: auto;
  position: absolute;
  top: -0px;
  left: 550px;
  }
`


const BlockSignUp = styled.div`
display: flex;
flex-direction: column;
`

const WidthInput = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
 @media screen and (min-width: 769px) {
gap: 20px;
 }

`
const BtnSignUp = styled(Button)`
width: 136px;
height: 42px;
font-size:16px;

 @media screen and (min-width: 769px) {
  width: 190px;
  height: 56px;
  font-size: 20px;
  color: #fff !important;
  margin-top: 64px;


  &:hover,
  &:focus {
    background-color: #EF8964 !important;
  }
}
`
const BtnSignPage = styled(BtnSignUp)`
  width: 136px ;
  height: 42px;
  font-size: 16px;
  color: #fff !important;
  margin-top: 28px;
  margin-bottom:16px;
  &:hover,
  &:focus {
    background-color: #EF8964 !important;
  }
`


export  {InputPassword,BtnSignPage, InputAuth, LinkAuth, ParagraphAfterBtn, BtnSignUp, ContainerSignUp,BlockSignUp, ImgSignUp, ParagraphAuth, FormContainer, TitleSignUp, WidthInput };
