import styled from '@emotion/styled';

const BlockWrap = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 13px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    justify-content: start;
    margin-bottom: 32px;

    li:nth-of-type(1) {
      order: 1;
    }
    li:nth-of-type(2) {
      order: 4;
    }
    li:nth-of-type(5) {
      order: 3;
    }
    li:nth-of-type(3) {
      order: 2;
    }
    li:nth-of-type(4) {
      order: 5;
    }
    li:nth-of-type(6) {
      order: 6;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

const TextBlockWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const NextTextBlockWrap = styled(TextBlockWrap)`
  justify-content: space-between;
`;

const TextWrap = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    order: 3;
    justify-content: start;
    margin-bottom: 64px;
    width: 561px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`;

const Text = styled.p`
  width: 310px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;
`;

const MainDiaryWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const DiaryWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const DesktopWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    order: 2;
  }
`;

export {
  Text,
  TextWrap,
  BlockWrap,
  TextBlockWrap,
  NextTextBlockWrap,
  MainDiaryWrap,
  DiaryWrapper,
  DesktopWrap,
};
