// import { Icon } from "../../Icon"

import { StyledStatusBlock,TitleBlock,IconTextWrap,StatusValue } from "./DailyStatusBlock.styled"

interface DailyProps{text:string; backgroundColor?:string,value:number|string, textColor?:string,whiteSpace?:string, children?:React.ReactElement }

const DailyStatusBlock:React.FC<DailyProps>=({text,backgroundColor, textColor,whiteSpace,children,value})=>{
    return <StyledStatusBlock backgroundColor={backgroundColor}>
       <IconTextWrap whiteSpace={whiteSpace}> 
        {children}
        <TitleBlock  textColor={textColor}>{text}</TitleBlock>
        </IconTextWrap > 
        <StatusValue>{value}</StatusValue>
        </StyledStatusBlock>
}
export default DailyStatusBlock