import React from 'react';
import dayjs from 'dayjs';

import { DatePickerCustom, WrapDatePicker } from './CustomDatePicker.styled';
import { ConfigProvider } from 'antd';
import { palette } from '../../../styles';
import { selectSelectedDate } from '../../../redux/diary/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux'
import { getDiary } from '../../../redux/diary';
import { setSelectedDate } from '../../../redux/diary/operations';


const CustomDatePicker: React.FC = () => {
const selectedDate=useSelector(selectSelectedDate)
const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <WrapDatePicker>
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                colorPrimary: `${palette.colors.black}`,
                colorBgElevated: `${palette.colors.lightOrange}`,
                colorText: `${palette.colors.white}`,
                fontSize: 14,
                borderRadiusSM: 50,
                colorIcon:'#EF8964;'
              },
            },
          }}
        >
          <DatePickerCustom
    
            defaultValue={dayjs(selectedDate)}
            value={dayjs(selectedDate)}
            format={'DD/MM/YYYY'}
            style={{
              border: 'none',
              background: `${palette.colors.black}`,
              fontSize: '18px',
              color: `${palette.colors.white}`,
            }}
            showToday={false}
            onChange={(selectedDate)=>{ dispatch(getDiary(dayjs(selectedDate).format('DD/MM/YYYY')));
           dispatch(setSelectedDate(selectedDate))}}
           allowClear={false}
          />
        </ConfigProvider>
      </WrapDatePicker>
    </>
  );
};

export default CustomDatePicker;
