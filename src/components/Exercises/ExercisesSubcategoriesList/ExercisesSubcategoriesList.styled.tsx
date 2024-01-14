import styled from '@emotion/styled';

const ExercisesList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 769px) {
        flex-direction: row;
        gap: 32px 16px;
    }
`

export { ExercisesList };