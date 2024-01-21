import styled from '@emotion/styled';

const StyledStatusBlock=styled.div<{backgroundColor?: string; }>`
width: 157px;
height: 96px;
padding: 14px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background:${({backgroundColor})=>backgroundColor ||'rgba(239, 237, 232, 0.05);'} ;
display: flex;
justify-content: space-between;
flex-direction: column;
@media screen and (min-width: 768px) { 
   flex: 0 0 187px;
 
   }

`
const TitleBlock = styled.p<{textColor?:string}>`
color:${({textColor})=>textColor || 'rgba(239, 237, 232, 0.40)'};

font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */


`
const IconTextWrap = styled.div<{whiteSpace?:string}>`
display: flex;
align-items:center;
white-space: ${({whiteSpace})=>whiteSpace||'nowrap'};
gap:8px
`

const StatusValue = styled.p`
color: #EFEDE8;
font-size: 18px;
font-weight: 700;
line-height: 20px;
`
export {StyledStatusBlock,TitleBlock,IconTextWrap,StatusValue}