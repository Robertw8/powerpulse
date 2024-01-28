import styled from '@emotion/styled';
import { Title } from '../PageTitle/PageTitle.styled.ts';
import {
  ParagraphAfterBtn,
  ParagraphAuth,
  WidthInput,
} from '../SignUp/SignUp.styled.ts';

const TitleSignIn = styled(Title)`
  margin-top: 90px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`;
const ParagraphSignIn = styled(ParagraphAuth)`
  height: 36px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 496px;
    margin-bottom: 32px;
    font-size: 16px;
    color: rgba(239, 237, 232, 0.3);
  }
`;
const BlockInput = styled(WidthInput)`
  gap: 14px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 0px;
  }
`;
const ParagraphAfterBtnUp = styled(ParagraphAfterBtn)`
  margin-top: 12px;
`;

const StatisticsWrapper = styled.div`
  position: absolute;

  @media screen and (max-width: 768px) {
    bottom: -103%;
    transform: translate(-20%) scale(0.6);
  }

  @media screen and (min-width: 769px) and (max-width: 1439px) {
    top: 110%;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    top: 31.7%;
    right: -872px;
    scale: 0.95;
  }
`;

export {
  TitleSignIn,
  ParagraphSignIn,
  BlockInput,
  ParagraphAfterBtnUp,
  StatisticsWrapper,
};
