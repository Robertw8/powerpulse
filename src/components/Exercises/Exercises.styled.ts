import styled from '@emotion/styled';

const ExercisesWrap = styled.div`
    padding-bottom: 80px;
    width: 100%;
    
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
        border: 5px solid #E6533C;
        background: #040404;
    }
`;

const LoaderWrap = styled.div`
    position: absolute;
    top: 76px;
    left: 150px;

    @media screen and (max-width: 767px) {
    top: 35px;
    left: 130px;
    }
    `

const TopWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    position: relative;

    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
  }
`

export { ExercisesWrap, TopWrap, LoaderWrap };