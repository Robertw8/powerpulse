import styled from '@emotion/styled';

const WaistListContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: 1440px) {
    max-width: 840px;
    margin-top: 10px;
  }
`;

const ImgWaist = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
`;

const WaistItemUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  border-radius: 12px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px 16px;
    max-height: 560px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 840px;
  }
`;

const Message = styled.h2`
  max-width: 100%;
  color: #efede84d;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    max-width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

const OrangeText = styled.span`
  display: inline-block;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  &:nth-of-type(2) {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export { WaistListContainer, ImgWaist, WaistItemUl, Message, OrangeText };
