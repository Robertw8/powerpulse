import styled from '@emotion/styled';

const Product = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    white-space: nowrap;
    margin-right: 10px;
  }
`;

const TitleCol = styled.li`
  color: #ef8964;
  font-size: 12px;
  line-height: 18px;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ValueCol = styled.li`
  padding: 10px 0 10px 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  margin-bottom: 16px;
  overflow: hidden;

  font-size: 14px;
  line-height: 18px;
  border-radius: 12px;
  text-transform: capitalize;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 128px;

    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 166px;
  }
`;

const ValueColTitle = styled.li`
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  border-radius: 12px;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    max-height: 40px;
    margin-bottom: 0px;

    font-size: 16px;
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

const Row = styled.ul``;

const TopRow = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

const BottomRow = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

const MobileRow = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  &:nth-of-type(1) {
    display: none;
  }
`;

const MobileTitleRow = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MiniValueCol = styled(ValueCol)`
  margin-bottom: 0px;
  width: 80px;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    width: 90px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 110px;
  }
`;

const MiniTitleCol = styled(TitleCol)`
  width: 80px;
`;

const DesktopTitleWrap = styled.ul`
  display: flex;
`;
const DesktopTitle = styled.li``;

const IconWrap = styled.li`
  width: 20px;
  height: 20px;
`;

const TitlesRowDesktop = styled.ul``;

const Status = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
`;

const StatusRound = styled.span<{ recommended: boolean }>`
  display: inline-block;
  width: 14px;
  height: 14px;

  background-color: ${({ recommended }) =>
    recommended ? '#419B09' : '#E9101D'};
  border-radius: 50%;
`;

export {
  Product,
  TitleCol,
  ValueCol,
  Row,
  MobileRow,
  MobileTitleRow,
  MiniValueCol,
  IconWrap,
  MiniTitleCol,
  TopRow,
  BottomRow,
  TitlesRowDesktop,
  ValueColTitle,
  Status,
  StatusRound,
  DesktopTitle,
  DesktopTitleWrap,
};
