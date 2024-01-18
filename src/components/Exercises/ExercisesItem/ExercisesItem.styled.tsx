import styled from '@emotion/styled';

const ExercisesListItem = styled.li`
    display: flex;
    width:335px;
    height: 206px;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid rgba(239, 237, 232, 0.2);
    transition-duration: 300ms;
    :hover,
    :active {
      border-color: #e6533c;
    }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 224px;
  }
  @media screen and (min-width: 1441px) {
    width: 237px;
  }
`

const ItemTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:50%;
    left:50%;
    width: 100%;
    height: 100%;
    transform:translate(-50%, -50%);
        background-color: rgba(4, 4, 4, 0.5);

`;

const ListItemTitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: #EFEDE8;
    ::first-letter {
      text-transform: uppercase;
    }
`

const ListItemCategory = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color:rgba(239, 237, 232, 0.4);
`

const ListItemImg = styled.img`
    width: 100%;
    object-fit: cover;
`

export { ExercisesListItem, ItemTextWrapper, ListItemTitle, ListItemCategory, ListItemImg };