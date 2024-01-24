import styled from '@emotion/styled';

const StyledDateControl=styled.div`
display: flex;
align-items:center;`

const ArrowControl=styled.div`
display:flex;
gap:8px;
margin-left:20px;
@media screen and (min-width: 768px) {margin-left:40px; }`

const ReverseIcon=styled.div`
transform: rotate(180deg);
width:16px;
height:16px`

const SelectedDate=styled.div`
color: #EFEDE8;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 20px; 
margin-right:8px;

@media screen and (min-width: 768px) { 
color: #EFEDE8;

font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px; }
`



export {StyledDateControl,ArrowControl,ReverseIcon,SelectedDate
}