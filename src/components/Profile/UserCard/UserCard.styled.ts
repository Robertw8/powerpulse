import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgWrap = styled.div`
  width: 90px;
  height: 90px;
  border: 2px solid #e6533c;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;

  @media screen and (min-width: 769px) {
    width: 150px;
    height: 150px;
    margin: 0 auto 30px;
    justify-content: flex-start;
  }
`;

const ImgUserAvatar = styled.div`
  position: relative;
  top: 15px;
`;

const UserAvatarImg = styled.div`
  position: relative;
  top: 10px;

  @media screen and (min-width: 769px) {
    top: 22px;
  }
`;

const BtnAvatar = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

const UserWrap = styled.div`
  text-align: center;
`;
const UserName = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 4px;

  @media screen and (min-width: 769px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
const UserStatus = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;
`;

const BlockWrap = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 14px;
`;
const BlockData = styled.div`
  width: 157px;
  height: 96px;
  padding: 13px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #e6533c;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

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
  font-size: 12px;
  color: rgba(239, 237, 232, 0.8);
  line-height: 16px;
`;

const TextWrap = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const TextValue = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 769px) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  width: 310px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    line-height: 24px;
    width: 410px;
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
  BtnAvatar,
  TextValue,
  UserName,
  UserWrap,
  UserStatus,
  ImgUserAvatar,
};
