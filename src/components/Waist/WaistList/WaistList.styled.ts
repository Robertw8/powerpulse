import styled from '@emotion/styled';
import { palette } from '../../../styles/index';
export const WaistListContainer = styled.div`
  display: flex;
`;

export const ImgWaist = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 530px;
    height: 902px;
    /* margin-top: -100px; */
    z-index: -2;
  }
`;

export const WaistItemUl = styled.ul`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  &::-webkit-scrollbar-thumb {
    background-color: ${palette.colors.lightOrange};
    border-radius: ${palette.radiuses.primary};
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: ${palette.radiuses.primary};
  }

  @media screen and (min-width: 768px) {
    overflow-y: auto;
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;
    max-height: 900px;
    padding-right: 16px;
    width: 850px;
  }
`;

export const NoExercisesTitle = styled.h2`
  color: ${palette.colors.white};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`;