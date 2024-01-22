import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});

interface MyCalendarProps {
  onChange?: (newDate: Dayjs | null) => void;
}

const MyCalendar: React.FC<MyCalendarProps> = ({ onChange }) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-01-20'));

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <DemoContainer components={['DateCalendar']}>
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={handleDateChange}
            showDaysOutsideCurrentMonth={true}
            sx={{
              backgroundColor: '#EF8964',
              borderRadius: '8px',
              width: '215px',
              height: '236px',
              position: 'fixed',
              zIndex: 9999,
              top: '30%',
              left: '68%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default MyCalendar;

//     color: '#EFEDE8',
// fontFamily: 'Roboto',
// fontSize: '14px',
// fontStyle: 'normal',
// fontWeight:'400',
// lineHeight: '18px',
// letterSpacing: '-0.28px'
