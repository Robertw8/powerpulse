import styled from '@emotion/styled';

const BackgroundImage = styled.div`
  @media screen and (max-width: 1440px) {
    display: none;
  }

  position: absolute;
  top: 11%;
  right: 0;
  z-index: -9999;

  width: 35%;
  height: 726px;
`;

const ExercisesWrap = styled.div`
  padding-bottom: 80px;
  width: 100%;
  position: relative;

  & .ant-carousel .slick-dots button {
    width: 14px;
    height: 14px;
    border-radius: 50px;
    border: 5px solid rgba(239, 237, 232, 0.1);
  }
  & .ant-carousel .slick-dots {
    margin-bottom: -64px;
  }
  & .ant-carousel .slick-dots li.slick-active button {
    border: 5px solid #e6533c;
    background: #040404;
  }
`;

const LoaderWrap = styled.div`
  position: absolute;
  top: 76px;
  left: 150px;

  @media screen and (max-width: 768px) {
    top: 35px;
    left: 130px;
  }
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export { ExercisesWrap, TopWrap, LoaderWrap, BackgroundImage };
