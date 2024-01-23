import styled from '@emotion/styled';
import { palette } from '../../../styles/index';
export const WaistListContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  position: relative;

  @media screen and (min-width: 1441px) {
    max-width: 840px;
    margin-top: 10px;
  }
`;

export const ImgWaist = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
`;

export const WaistItemUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 12px;
  overflow-y: auto;

  @media screen and (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px 16px;

    max-height: 560px;
  }

  @media screen and (min-width: 1441px) {
    max-width: 840px;
  }
`;

export const NoExercisesTitle = styled.h2`
  color: ${palette.colors.white};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`;
