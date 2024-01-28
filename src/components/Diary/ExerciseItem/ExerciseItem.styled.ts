import styled from '@emotion/styled';

const ExerciseWrap = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    white-space: nowrap;
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
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;

  padding: 8px 8px 8px 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  margin-bottom: 16px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    width: 90px;
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 115px;
  }
`;
const ValueColTitle = styled.li`
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;

  padding: 8px 0 8px 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  margin-bottom: 16px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    width: 132px;
    max-height: 40px;
    margin-bottom: 0px;

    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`;
const ValueColName = styled(ValueColTitle)`
  p {
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    width: 128px;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 0px;

    p {
      overflow: hidden;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 131px;
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
    justify-content: end;
  }
`;

const MobileRow = styled.ul`
  position: relative;
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 8px;
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
  overflow: hidden;
  text-transform: capitalize;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    width: 78px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 93px;
  }
`;
const MiniTitleCol = styled(TitleCol)`
  width: 80px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const IconWrap = styled.li`
  width: 20px;
  height: 20px;
`;

const TitlesRowDesktop = styled.ul``;

export {
  ExerciseWrap,
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
  ValueColName,
};
