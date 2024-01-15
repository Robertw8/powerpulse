import styled from '@emotion/styled';


const TitleWelcomePage = styled.h1`
width: 598px;
height: 234px;
font-size: 70px;
margin-top: 151px;

@media screen and (min-width: 376px) and (max-width: 768px)  {
 
width: 335px;
height: 120px;
font-size: 38px;
margin-top: 90px;
}
  @media screen and (min-width: 769px) and (max-width: 1440px) {   
margin-top: 140px;
}
`;

const ContainerWelcomePage = styled.div`
display: flex;

@media screen and (min-width: 376px) and (max-width: 768px)  {
 display: flex;
 flex-direction: column;
}

 @media screen and (min-width: 769px) and (max-width: 1440px) {
width: 598px;
margin-top: 140px;
  }

`


const ImgWelcomePage = styled.img`
width:670px;
height: 800px;


@media screen and (min-width: 376px) and (max-width: 768px)  {
 
width:446px;
height: 669px;
margin-left: 30px;
 background: linear-gradient(to top, rgba(4, 4, 4, 1) 0%, rgbargba(4, 4, 4, 1) 100%);
}


 @media screen and (min-width: 769px) and (max-width: 1440px) {
width: 598px;
margin-top: 140px;
  }

`
const BlockTitleBtn = styled.div`
display: flex; 
flex-direction: column;
`

const BlockBtns = styled.div`
display: flex;
 gap: 20px;
 margin-top: 64px;
`

export  {TitleWelcomePage, ContainerWelcomePage, ImgWelcomePage, BlockTitleBtn, BlockBtns}; 