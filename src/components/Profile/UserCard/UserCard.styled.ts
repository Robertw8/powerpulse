import styled from '@emotion/styled';
import { palette } from '../../../styles';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

const ImgUserAvatar = styled.div`
  position: relative;
`;

const WrapIcon = styled.div`
  width: 90px;
  height: 90px;
  border: 2px solid ${palette.colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media screen and (min-width: 769px) {
    width: 150px;
    height: 150px;
  }
`;

const Img = styled.img`
  border-radius: 50%;

  @media screen and (min-width: 769px) {
  }
`;

const UserAvatarImg = styled.div`
  position: relative;
  top: -15px;

  @media screen and (min-width: 769px) {
    top: -19px;
  }
`;

const InputFile = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const UserWrap = styled.div`
  text-align: center;
`;

const UserName = styled.h3`
  margin: 0 0 4px;
  font-size: ${palette.fontSizes.small}px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 769px) {
    font-size: ${palette.fontSizes.medium}px;
    line-height: 28px;
    margin: 0 0 8px;
  }
`;

const UserStatus = styled.p`
  color: ${palette.colors.white30};
  font-size: ${palette.fontSizes.tiny}px;
  line-height: 18px;
`;

const BlockWrap = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: center;
  gap: 14px;
`;

const BlockData = styled.div`
  width: 157px;
  height: 96px;
  padding: 13px;
  border: 1px solid ${palette.colors.white20};

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  border-radius: 12px;
  background: ${palette.colors.orange};

  @media screen and (min-width: 769px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
  }
`;

const TextBlockWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const TitleBlock = styled.p`
  font-size: ${palette.fontSizes.caption}px;
  color: ${palette.colors.white40};
  line-height: 16px;
`;

const TextWrap = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const TextValue = styled.p`
  font-size: ${palette.fontSizes.small}px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 769px) {
    font-size: ${palette.fontSizes.large}px;
  }
`;

const Text = styled.p`
  width: 310px;
  color: ${palette.colors.white30};
  font-size: ${palette.fontSizes.tiny}px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: ${palette.fontSizes.default}px;
    line-height: 24px;
    width: 410px;
  }
`;

const WrapLogOut = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 769px) {
    margin: 32px 0;
  }
`;

export {
  ImgWrap,
  Text,
  TextWrap,
  BlockWrap,
  BlockData,
  Wrap,
  TitleBlock,
  TextBlockWrap,
  UserAvatarImg,
  TextValue,
  UserName,
  UserWrap,
  UserStatus,
  ImgUserAvatar,
  InputFile,
  WrapLogOut,
  Img,
  WrapIcon,
};
