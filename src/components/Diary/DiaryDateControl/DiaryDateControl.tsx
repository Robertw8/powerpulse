
import dayjs from "dayjs"
import { Icon } from "../../Icon"
import { StyledDateControl,ArrowControl,ReverseIcon } from "./DiaryDateControl.styled"

const DiaryDateControl: React.FC=()=>{
    return <>
    <StyledDateControl>
<p style={{marginRight:'20px', marginLeft:'0px'}}>{dayjs().format('DD/MM/YYYY')}</p>
        <Icon   name="calendar"
                    iconWidth={{ mobile: '20px', tablet: '20px' }}
                    iconHeight={{ mobile: '20px', tablet: '20px' }}/>
                 <ArrowControl>   
                 <   ReverseIcon>      <Icon   name="arrow" 
                    iconWidth={{ mobile: '16px', tablet: '16px' }}
                    iconHeight={{ mobile: '16px', tablet: '16px' }}/>
            </ReverseIcon>
                     <Icon   name="arrow"
                    iconWidth={{ mobile: '16px', tablet: '16px' }}
                    iconHeight={{ mobile: '16px', tablet: '16px' }}/>
     
                    </ArrowControl> 
    </StyledDateControl>
    </>
}
export default DiaryDateControl