import styled from '@emotion/styled';

const ExerciseWrap=styled.li`
`

const TitleCol=styled.li`
color:#EF8964;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
margin-bottom:8px; `

const ValueCol=styled.li`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
padding:10px 0 10px 14px; 
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);
margin-bottom:16px;
`
const Row=styled.ul``

const TopRow=styled.li``

const BottomRow=styled.li``

const MobileRow=styled.ul`display:flex;
gap:16px;
justify-content:start;
align-items:center;

`
const MiniValueCol=styled(ValueCol)`
margin-bottom:0px;
width:80px;
`
const MiniTitleCol=styled(TitleCol)`width:80px;
overflow-x: auto;`

const IconWrap=styled.div`width:20px;
height:20px;

`


export{ExerciseWrap,TitleCol,ValueCol,Row,MobileRow,MiniValueCol,IconWrap,MiniTitleCol,TopRow,BottomRow}
