import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { Button, Input } from 'antd';

import { InputPrimary } from '../InputPrimary';
import {
  StyledInputProps,
  validationStatuses,
} from '../InputPrimary/InputPrimary.styled';

import { Title } from '../PageTitle/PageTitle.styled';

import photoMob from '..//..//assets/images/ImgForWelcomePage/imgAuthPageMob.webp';
import photoTablet from '..//..//assets/images/ImgForWelcomePage/imgWelcomePageTablet.png';
import photoDesktop from '..//..//assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';

const FormContainer = styled.form`
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 364px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
const TitleSignUp = styled(Title)`
  margin-top: 90px;
  margin-bottom: 14px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`;
const ParagraphAuth = styled.p`
 width: 100%;
  max-width: 335px;
  height: 54px;
  margin-bottom: 28px;

  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 496px;
    margin-bottom: 32px;

    font-size: 16px;
    color: rgba(239, 237, 232, 0.3);
  }
`;
const ParagraphAfterBtn = styled.p`
  width: 176px;
  height: 18px;

  font-size: 12px;
  color: rgba(239, 237, 232, 0.3);
`;

const LinkAuth = styled(Link)`
  color: rgba(239, 237, 232, 0.6);
  transition-duration: 150ms;

  &:hover,
  &:focus,
  &:focus-within {
    color: #e6533c;
  }
`;

const InputAuth = styled(InputPrimary)`
  width: 100%;
  height: 46px;
`;

const InputPassword = styled(Input.Password)<StyledInputProps>`
  width: 100%;
  color: #fff;
  line-height: calc(18 / 14);
  height: 46px;

  @media screen and (min-width: 768px) {
    height: 52px;
  }

  border-color: ${({ bordercolor }) => validationStatuses[bordercolor]};
  background-color: transparent !important;
  box-shadow: 0;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: transparent !important;
    border-color: #e6533c !important;
  }

  .ant-input {
    &::placeholder {
      color: #efede84d !important;
      background-color: transparent !important;
    }
  }

  .ant-input-password-icon {
    color: #fff !important;
    padding: 12px;

    &:hover,
    &:focus,
    &:focus-within {
      color: #e6533c !important;
    }
  }
`;

const ContainerSignUp = styled.div`
 position: relative;
  @media screen and (max-width: 768px) {
  display: flex;
  max-width: 767px; 
  width: 100%; 
  flex-direction: column;
    }
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%; 
  }
`;


const ImgSignUp = styled.div`
position: absolute;
 max-width: 768px; 
  width: 100%;
  left: 10px;
  top: 150px;
  z-index: -100;
  height: 700px;
  background-image: url(${photoMob});
  background-size: cover;
  background-position: right  bottom; 
  background-size: auto 90%;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    z-index: -100;
    top: 0px;
    height: 1150px;
    max-width: 1400px;
    width: 100%;
  background-image: url(${photoTablet}); 
    background-size: cover;
    background-position:   center right;
    background-size: auto 100%;
  }

  @media screen and (min-width: 1440px) {
    z-index: -100;
    max-width: 1500px;
    height: 900px;
    background-image: url(${photoDesktop });
    background-size: cover;
    background-position:   center right;
    background-size: auto 100%;
    left: 80px;
  }
`;

const StatisticsWrapper = styled.div`
  position: absolute;
  @media screen and (max-width: 768px) {
    bottom: -10%;
    left: 67%;
    transform: translateX(-50%) scale(0.6); 
  }

  @media screen and (min-width: 768px) {
    bottom: 60%;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%) scale(0.9); 
  }
  @media screen and (min-width: 1440px) {
    top: 50%;   
    left: 60%;
    transform: translate(-50%, -50%) scale(0.9); 
  }
`;




const BlockSignUp = styled.div`
  display: flex;
  flex-direction: column;
`;

const WidthInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
const BtnSignUp = styled(Button)`
  width: 136px;
  height: 42px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    margin-top: 64px;

    font-size: 20px;
    color: #fff !important;

    &:hover,
    &:focus {
      background-color: #ef8964 !important;
    }
  }
`;

const BtnSignPage = styled(BtnSignUp)`
  width: 136px;
  height: 42px;
  margin-top: 28px;
  margin-bottom: 16px;

  font-size: 16px;
  color: #fff !important;

  &:hover,
  &:focus {
    background-color: #ef8964 !important;
  }
`;

const ColorErrorInput = styled.div`
  color: #d80027;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;



export {
  ColorErrorInput,
  InputPassword,
  BtnSignPage,
  InputAuth,
  LinkAuth,
  ParagraphAfterBtn,
  BtnSignUp,
  ContainerSignUp,
  BlockSignUp,
  ImgSignUp,
  ParagraphAuth,
  FormContainer,
  TitleSignUp,
  WidthInput,
  StatisticsWrapper,
};
