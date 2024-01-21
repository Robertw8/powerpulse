import { Icon } from "../../Icon"
import { StyledDateControl,ArrowControl } from "./DiaryDateControl.styled"

const DiaryDateControl: React.FC=()=>{
    return <>
    <StyledDateControl>
<p style={{marginRight:'20px', marginLeft:'0px'}}>21/01/2024</p>
        <Icon   name="calendar"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}/>
                 <ArrowControl>   
                    <Icon   name="arrow"
                    iconWidth={{ mobile: '16px', tablet: '16px' }}
                    iconHeight={{ mobile: '16px', tablet: '16px' }}/>
                     <Icon   name="arrow"
                    iconWidth={{ mobile: '16px', tablet: '16px' }}
                    iconHeight={{ mobile: '16px', tablet: '16px' }}/>
                    </ArrowControl> 
    </StyledDateControl>
    </>
}
export default DiaryDateControl