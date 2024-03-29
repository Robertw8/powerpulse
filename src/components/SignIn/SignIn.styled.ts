import styled from '@emotion/styled';
import { Title } from '../PageTitle/PageTitle.styled';
import {
  ParagraphAfterBtn,
  ParagraphAuth,
  WidthInput,
} from '../SignUp/SignUp.styled';

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


export {
  TitleSignIn,
  ParagraphSignIn,
  BlockInput,
  ParagraphAfterBtnUp,
};
