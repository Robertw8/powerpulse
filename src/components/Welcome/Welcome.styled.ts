import styled from '@emotion/styled';
import { Button } from 'antd';
import photoMob from '..//..//assets/images/ImgForWelcomePage/ImgForWelcomePageMob.webp';
import photoTablet from '..//..//assets/images/ImgForWelcomePage/imgWelcomePageTablet.png';
import photoDesktop from '..//..//assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';

const TitleWelcomePage = styled.h1`
 position: relative;
  @media screen and (max-width: 768px) {
  max-width: 335px; 
  width: 100%;
  height: 120px;
  margin-top: 90px;
  font-size: 38px;
  }
 
  @media screen and (min-width: 768px) {
    position: relative;
    max-width: 598px;
    width: 100%;
    height: 234px;
    margin-top: 140px;
    font-size: 70px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  @media screen and (max-width: 768px) {
  top: 48px;
  left: -10px;
  z-index: -1;
    }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 85px;
    left: -30px;
  }
`;

const ContainerWelcomePage = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
  display: flex;
  max-width: 767px; 
  width: 100%; 
  flex-direction: column;
    }
  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 1200px;
    width: 100%; 
  }
`;

const ImgWelcomePage = styled.div`
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
    top: 125px;
    max-width: 1200px;
    width: 100%;
    background-image: url(${photoTablet});
    background-size: cover;
    background-position:   center right;
    background-size: auto 100%;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    max-width: 800px;
     width: 100%;
    background-size: cover;
    background-position:   center right;
    background-size: auto 100%;
    background-image: url(${photoDesktop});
    top: -0px;
    left: 550px;
  }
`;

const StatisticsWrapper = styled.div`
  position: absolute;

  @media screen and (max-width: 768px) {
    bottom: -10%;
    left: 0;
    scale: 0.7;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 40%;
    scale: 0.7;
    left: 450px;
  }

  @media screen and (min-width: 1440px) {
    top: 35%;
    left: 220px;
    scale: 0.9;
  }
`;

const BlockTitleBtn = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
     position: relative;
    width: 100%; 
  
  }
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