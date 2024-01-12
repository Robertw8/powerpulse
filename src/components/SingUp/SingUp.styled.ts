import styled from '@emotion/styled';
import { Input, InputProps, Button  } from 'antd';
interface StyledInputProps extends InputProps {
  bordercolor: 'default' | 'success' | 'error';
}

const checkValidationStatus = (status: 'default' | 'success' | 'error') => {
  switch (status) {
    case 'default':
      return '#EFEDE84D';
    case 'success':
      return '#3CBF61';
    case 'error':
      return '#D80027';
  }
};

const InputSingUp = styled(Input)<StyledInputProps>`

  width: 364px;
  height: 52px;
  padding: 14px;
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
  background-color: transparent;
  border-color: ${({ bordercolor }) => checkValidationStatus(bordercolor)};

  &:hover,
  &:focus {
    border-color: #e6533c;
  }

  &::placeholder {
    color: #efede84d;
    transition-duration: 300ms;
  }
`

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

const ImgSingUp = styled.img`
width: 670px;
height: 800px;
float: right;
margin-left: 178px;
`

const ContainerSingUp = styled.div`
display: flex;
`

const BlockSingUp = styled.div`
display: flex;
flex-direction: column;
`

const BtnSingUp = styled(Button)`
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


export  {BtnSingUp, ContainerSingUp,BlockSingUp, ImgSingUp, ParagraphSignUp, FormContainer, InputSingUp, TitleSignUp };
