import styled from '@emotion/styled';

const ExercisesWrap = styled.div`
    padding-top: 40px;
    padding-bottom: 80px;
    width: 100%;
`;

const TopWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
  }
`

export { ExercisesWrap, TopWrap };