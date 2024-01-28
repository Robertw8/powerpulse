import styled from '@emotion/styled';
import { Button } from 'antd';

const TitleWelcomePage = styled.h1`
  position: relative;
  width: 320px;
  height: 120px;
  margin-top: 90px;
  font-size: 38px;

  @media screen and (min-width: 769px) {
    position: relative;

    width: 598px;
    height: 234px;
    margin-top: 140px;
    font-size: 70px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 48px;
  left: -10px;
  z-index: -1;

  @media screen and (min-width: 769px) {
    position: absolute;
    top: 85px;
    left: -30px;
  }
`;

const ContainerWelcomePage = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

const ImgWelcomePage = styled.img`
  position: absolute;
  top: 215px;
  left: 0px;
  z-index: -1;

  width: 325px;
  height: 750px;

  @media screen and (min-width: 768px) {
    position: absolute;
    z-index: -100;
    top: 30px;

    width: 670px;
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 670px;
    height: auto;

    position: absolute;
    top: -0px;
    left: 550px;
  }
`;

const StatisticsWrapper = styled.div`
  position: absolute;

  @media screen and (max-width: 768px) {
    bottom: -233%;
    left: 0;
    scale: 0.9;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 135%;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    top: 35%;
    right: 41px;
    scale: 0.95;
  }
`;

const BlockTitleBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlockBtns = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 100px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    margin-top: 40px;
  }
`;

const BtnSignInWelcome = styled(Button)`
  width: 136px;
  height: 42px;

  font-size: 16px;
  color: #fff !important;
  border-color: rgba(239, 237, 232, 0.3) !important;

  &:hover,
  &:focus {
    border-color: #e6533c !important;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    margin-top: 64px;
    font-size: 20px;
  }
`;

export {
  TitleWelcomePage,
  ContainerWelcomePage,
  ImgWelcomePage,
  StatisticsWrapper,
  BlockTitleBtn,
  BlockBtns,
  IconContainer,
  BtnSignInWelcome,
};
