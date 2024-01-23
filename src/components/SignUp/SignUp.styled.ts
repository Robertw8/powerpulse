import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import InputPrimary from '../InputPrimary/InputPrimary.tsx';
import { StyledInputProps, validationStatuses  } from '../InputPrimary/InputPrimary.styled.ts';

import { Title } from '../PageTitle/PageTitle.styled.ts';


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
  &:hover,
  &:focus,
  &:focus-within {
    color:#E6533C;
  };
`

const InputAuth = styled(InputPrimary)`
  width: 100%;
  height:46px; 
`

const InputPassword = styled(Input.Password)<StyledInputProps>`
  width: 100%;
  color: #fff;
  line-height: calc(18 / 14);

  .ant-input-affix-wrapper{
  height: 46px !important;
  }
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
  }
}

.ant-input-password-icon{
  color: #fff !important;
  padding: 14px;
  &:hover,
  &:focus,
  &:focus-within{
     color: #E6533C !important;
  }
}
 
`

const ContainerSignUp = styled.div`
display: flex;
flex-direction:column;
position: relative;
width: 355px;
height: auto;

 @media screen and (min-width: 769px) {
 display: flex;
 width: 769px;
 }
`


const ImgSignUp = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 180px;
  z-index: -1;
  @media screen and (min-width: 769px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: -80px;
    left: 60px;
    overflow-x: hidden !important;

 
  }
  @media screen and (min-width: 1441px) {
  width: 670px;
  height: auto;
  position: absolute;
  top: -0px;
  left: 700px;
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
const ColorErrorInput =styled.div`
color: #D80027;
font-size: 16px;
 @media screen and (min-width: 769px) {
font-size: 14px;
 }
  `

export  {ColorErrorInput,InputPassword,BtnSignPage, InputAuth, LinkAuth, ParagraphAfterBtn, BtnSignUp, ContainerSignUp,BlockSignUp, ImgSignUp, ParagraphAuth, FormContainer, TitleSignUp, WidthInput };
