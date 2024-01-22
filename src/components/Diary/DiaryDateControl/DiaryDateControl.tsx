import { Icon } from '../../Icon';
import { StyledDateControl, ArrowControl } from './DiaryDateControl.styled';
import { MyCalendar } from '../Calendar';
import { DateText } from './dataText';
import { useEffect, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const DiaryDateControl: React.FC = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs('2024-01-21'));
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleCalendarToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleClickOutsideCalendar = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setIsCalendarOpen(false);
    }
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
    }
    setIsCalendarOpen(false);
  };
  const handleDateClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideCalendar);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCalendar);
    };
  }, []);

  return (
    <>
      <StyledDateControl>
        {isCalendarOpen && (
          <div ref={calendarRef}>
            <MyCalendar onChange={handleDateChange} />
          </div>
        )}
        <DateText onClick={handleDateClick}>
          <p style={{ marginRight: '20px', marginLeft: '0px' }}>
            {selectedDate.format('DD/MM/YYYY')}
          </p>
        </DateText>
        <Icon
          name="calendar"
          iconWidth={{ mobile: '20px', tablet: '20px' }}
          iconHeight={{ mobile: '20px', tablet: '20px' }}
          onClick={handleCalendarToggle}
        />
        <ArrowControl>
          <Icon
            name="arrow-left"
            iconWidth={{ mobile: '16px', tablet: '16px' }}
            iconHeight={{ mobile: '16px', tablet: '16px' }}
          />
          <Icon
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
