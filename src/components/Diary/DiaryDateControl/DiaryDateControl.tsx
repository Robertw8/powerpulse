import { AppDispatch } from '../../../redux';
import { Icon } from '../../Icon';
import { StyledDateControl, ArrowControl, ReverseIcon, SelectedDate } from './DiaryDateControl.styled';
import dayjs from 'dayjs';
import { selectSelectedDate } from '../../../redux/diary/selectors';
import { useDispatch,
   useSelector 
  } 
   from 'react-redux';
import { getDiary, setSelectedDate } from '../../../redux/diary/operations';



const DiaryDateControl: React.FC = () => {
  const selectedDate= useSelector(selectSelectedDate)
  const dispatch = useDispatch<AppDispatch>();
 
  
  const handleAddDate = () => {
   const result = dayjs(selectedDate).add(1, 'day')
   dispatch(getDiary(dayjs(result).format('DD/MM/YYYY')))
   dispatch(setSelectedDate(dayjs(result).format()))
  };

const handleDeleteDate= () => {
  const result = dayjs(selectedDate).subtract(1, 'day')
  dispatch(getDiary(dayjs(result).format('DD/MM/YYYY')))
  dispatch(setSelectedDate(dayjs(result).format()))
 };


  return (
    <>


      <StyledDateControl>
 
        <SelectedDate>{dayjs(selectedDate).format('DD/MM/YYYY')}</SelectedDate>
        <Icon
          name="calendar"
          iconWidth={{ mobile: '20px', tablet: '24px' }}
          iconHeight={{ mobile: '20px', tablet: '24px' }}

        />
        <ArrowControl>
        <ReverseIcon>
          <Icon onClick={handleDeleteDate}
            name="arrow"
            iconWidth={{ mobile: '16px', tablet: '16px' }}
            iconHeight={{ mobile: '16px', tablet: '16px' }}
          />
          </ReverseIcon>
          <Icon onClick={handleAddDate}
            name="arrow"
            iconWidth={{ mobile: '16px', tablet: '16px' }}
            iconHeight={{ mobile: '16px', tablet: '16px' }}
          />
      
         
        </ArrowControl>
      </StyledDateControl>
    </>
  );
};
export default DiaryDateControl;
