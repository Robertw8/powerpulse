import styled from '@emotion/styled';
import { Button } from 'antd';
// import ImgForWelcomePageMob from '..//..//assets/images/ImgForWelcomePage/ImgForWelcomePageMob.png';

const TitleWelcomePage = styled.h1`
  position: relative;
  width: 335px;
  height: 120px;
  font-size: 38px;
  margin-top: 90px;

  @media screen and (min-width: 769px) {
    position: relative;
    width: 598px;
    height: 234px;
    font-size: 70px;
    margin-top: 140px;
  }

  @media screen and (min-width: 1140px) {
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 48px;
  left: -10px;

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

  @media screen and (min-width: 1441px) {
    display: flex;
  }
`;

const ImgWelcomePageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 215px;
  z-index: -1;
  overflow-x: hidden;

  @media screen and (min-width: 769px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 30px;
    left: 200px;
    overflow-x: hidden;
  }

  @media screen and (min-width: 1441px) {
    width: 700px;
    height: auto;
    position: absolute;
    top: -0px;
    left: 640px;
  }
`;

const StatisticsWrapper = styled.div`
  padding: 25px;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: max-content;
    height: auto;
    scale: 0.8;
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    position: absolute;
    top: 48%;
    left: 0;
    width: max-content;
    height: auto;
    scale: 1.2;
  }

  @media screen and (min-width: 1441px) {
    position: absolute;
    top: 25%;
    right: 0;
    width: max-content;
    height: auto;
    scale: 1.2;
  }
`;

const BlockTitleBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlockBtns = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 40px;

  @media screen and (min-width: 769px) {
    display: flex;
    gap: 20px;
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

  @media screen and (min-width: 769px) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    margin-top: 64px;
  }
`;

export {
  TitleWelcomePage,
  ContainerWelcomePage,
  ImgWelcomePageWrapper,
  StatisticsWrapper,
  BlockTitleBtn,
  BlockBtns,
  IconContainer,
  BtnSignInWelcome,
};
