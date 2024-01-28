import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import InputPrimary from '../InputPrimary/InputPrimary.tsx';
import {
  StyledInputProps,
  validationStatuses,
} from '../InputPrimary/InputPrimary.styled.ts';
import { Title } from '../PageTitle/PageTitle.styled.ts';

const FormContainer = styled.form`
  width: 320px;
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
  width: 335px;
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
  width: 335px;
  height: auto;

  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ImgSignUp = styled.img`
  position: absolute;
  top: 180px;
  z-index: -1;

  width: 350px;
  height: auto;

  @media screen and (min-width: 769px) {
    position: absolute;
    top: -30px;
    left: 40px;
    overflow-x: hidden !important;

    width: 670px;
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -0px;
    left: 550px;

    width: 670px;
    height: auto;
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

const StatisticsWrapper = styled.div`
  position: absolute;

  @media screen and (max-width: 768px) {
    bottom: -83%;
    left: 0%;
    transform: translate(-20%) scale(0.6);
  }

  @media screen and (min-width: 769px) and (max-width: 1439px) {
    top: 110%;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    top: 28%;
    right: -872px;
    scale: 0.95;
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
