import styled from 'styled-components'; 
 
export const Modal = styled.div` 
  position: fixed; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  width: 100%; 
  height: 100%; 
  flex-shrink: 0; 
  border-radius: 12px; 
  border: 1px solid rgba(239, 237, 232, 0.2); 
  background: rgba(4, 4, 4, 0.4); 
  overflow: hidden; 
  overflow-y: auto; 
  transition: opacity 0.3s; 
  z-index: 999; 
`; 
 
export const MadalWrapper = styled.div` 
  position: absolute; 
  top: 0; 
  left: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  min-height: 100%; 
`; 
 
export const MadalContent = styled.div` 
  position: relative; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
  width: 303px; 
  border-radius: 20px; 
  border-color: #ffff; 
  background: #10100f; 
  padding: 25px; 
  transition: opacity 0.3s, transform 0.3s; 
  @media screen and (min-width: 768px) { 
    /* flex-direction: row; */ 
    gap: 16px; 
    /* align-items: flex-start; */ 
    padding: 32px; 
    padding-top: 39px; 
    width: 430px; 
  } 
`; 
 
export const Image = styled.div` 
  /* display: flex; */ 
  width: 270px; 
  height: 226px; 
  // padding: 45px 105px; 
  /* justify-content: center;  
    align-items: center; */ 
  margin: 0 auto; 
  gap: 32px; 
  margin-bottom: 32px; 
  flex-shrink: 0; 
  border-radius: 12px; 
  border: 1px solid rgba(239, 237, 232, 0.2); 
  background: linear-gradient( 
      0deg, 
      rgba(4, 4, 4, 0.2) 0%, 
      rgba(4, 4, 4, 0.2) 100% 
    ), 
    url(<path-to-image>), lightgray 0px -17.5px / 100% 119.469% no-repeat; 
`; 
export const Timer = styled.div` 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
  gap: 14px; 
`; 
 
export const BurnedCal = styled.p` 
  color: rgba(239, 237, 232, 0.3); 
  font-family: Roboto; 
  font-size: 14px; 
  font-style: normal; 
  font-weight: 400; 
  line-height: 18px; 
  /* display: flex;  
    justify-content: center;  
    align-items: center; */ 
`; 
 
export const BurnedInformName = styled.span` 
  color: #e6533c; 
`; 
 
export const Ul = styled.ul` 
  display: flex; 
  flex-wrap: wrap; 
  padding: 0; 
  gap: 7px; 
  @media screen and (min-width: 768px) { 
    justify-content: flex-start; 
    max-width: 100%; 
  } 
`; 
export const Li = styled.li` 
  list-style-type: none; 
  display: flex; 
  flex-direction: column; 
  padding: 12px 50px 12px 18px; 
  /* width: 168px; */ 
  justify-content: center; 
  align-items: left; 
  border-radius: 12px; 
  border: 1px solid rgba(239, 237, 232, 0.2); 
  background: rgba(239, 237, 232, 0.05); 
  gap: 4px; 
  /* width: 93px; */ 
  @media screen and (min-width: 768px) { 
    padding: 12px 70px 12px 18px; 
  } 
`; 
export const Span = styled.span` 
  color: #e6533c; 
`; 
export const P = styled.p` 
  color: rgba(239, 237, 232, 0.3); 
  font-family: Roboto; 
  font-size: 14px; 
  font-style: normal; 
  font-weight: 400; 
  line-height: 18px; /* 128.571% */ 
  margin: 0; 
`; 
export const Button = styled.button` 
  display: flex; 
  padding: 12px 32px; 
  justify-content: start; 
  gap: 10px; 
  border-radius: 12px; 
  border: 0; 
  background: var(--orange, #e6533c); 
  color: #efede8; 
  font-family: Roboto; 
  font-size: 16px; 
  font-style: normal; 
  font-weight: 500; 
  line-height: 18px; 
  margin-top: 17px; 
  /* @media screen and (min-width: 768px) { 
    position: absolute; 
    bottom: 31px; 
    right: 31px; 
    margin-top: 0; 
  } */ 
`; 
export const Div = styled.div` 
  text-align: center; 
`; 
export const SvgPlay = styled.svg` 
  width: 14px; 
  height: 14px; 
  background-color: #e6533c; 
`; 
export const SvgPause = styled.svg` 
  width: 14px; 
  height: 14px; 
  background-color: #e6533c; 
`; 
export const Btn = styled.button` 
  width: 32px; 
  height: 32px; 
  border-radius: 8px; 
  background-color: #e6533c; 
`; 
 
export const Svg = styled.svg` 
  display: none; 
  position: absolute; 
  width: 26px; 
  height:26px; 
  right: 10px; 
  top: 10px; 
  @media screen and (min-width: 768px) { 
    display: block; 
  } 
`; 
 
export const H2 = styled.h2` 
  color: white; 
`; 
 
export const Button2 = styled.button` 
display: flex; 
align-items: center; 
justify-content: center; 
gap: 8px; 
margin-top: 16px; 
  background: transparent; 
  border: 0; 
  color: rgba(239, 237, 232, 0.3); 
  font-family: Roboto; 
  font-size: 14px; 
  font-style: normal; 
  font-weight: 400; 
  line-height: 18px; /* 128.571% */ 
`;