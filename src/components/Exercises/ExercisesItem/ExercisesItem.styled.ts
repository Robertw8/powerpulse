import styled from '@emotion/styled';

const ExercisesListItem = styled.li`
  position: relative;
  overflow: hidden;

  display: flex;
  width: 335px;
  height: 206px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  border-radius: 12px;
  cursor: pointer;
  transition-duration: 300ms;

  :hover,
  :active {
    border-color: #e6533c;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    width: 224px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`;

const ItemTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
  background-color: rgba(4, 4, 4, 0.5);
`;

const ListItemTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: #efede8;
  text-transform: capitalize;
`;

const ListItemCategory = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`;

const ListItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export {
  ExercisesListItem,
  ItemTextWrapper,
  ListItemTitle,
  ListItemCategory,
  ListItemImg,
};
