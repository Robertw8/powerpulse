import { Icon } from '../../Icon';
import { StyledDateControl, ArrowControl, ReverseIcon, SelectedDate } from './DiaryDateControl.styled';
// import { MyCalendar } from '../Calendar';
// import { DateText } from './dataText';
import { 

  // useEffect, useRef, 
  useState } from 'react';
import dayjs from 'dayjs';

const DiaryDateControl: React.FC = () => {
  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  // const calendarRef = useRef<HTMLDivElement>(null);

  // const handleCalendarToggle = () => {
  //   setIsCalendarOpen(!isCalendarOpen);
  // };

  // const handleClickOutsideCalendar = (event: MouseEvent) => {
  //   if (
  //     calendarRef.current &&
  //     !calendarRef.current.contains(event.target as Node)
  //   ) {
  //     setIsCalendarOpen(false);
  //   }
  // };

  // const handleDateChange = (newDate: Dayjs | null) => {
  //   if (newDate) {
  //     setSelectedDate(newDate);
  //   }
  //   setIsCalendarOpen(false);
  // };
  const handleAddDate = () => {
   const result = dayjs(selectedDate).add(1, 'day')
    setSelectedDate(result);
  };

const handleDeleteDate= () => {
  const result = dayjs(selectedDate).subtract(1, 'day')
   setSelectedDate(result);
 };
 
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutsideCalendar);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutsideCalendar);
  //   };
  // }, []);

  return (
    <>
      <StyledDateControl>
        {/* {isCalendarOpen && (
          <div ref={calendarRef}>
            <MyCalendar onChange={handleDateChange} />
          </div>
        )}
        <DateText onClick={handleDateClick}>
          <p style={{ marginRight: '20px', marginLeft: '0px' }}>
            {selectedDate.format('DD/MM/YYYY')}
          </p>
        </DateText> */}
        <SelectedDate>{dayjs(selectedDate).format('DD/MM/YYYY')}</SelectedDate>
        <Icon
          name="calendar"
          iconWidth={{ mobile: '20px', tablet: '24px' }}
          iconHeight={{ mobile: '20px', tablet: '24px' }}
          // onClick={handleCalendarToggle}
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
