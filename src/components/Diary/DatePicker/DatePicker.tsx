import React from 'react';
import dayjs from 'dayjs';

import { DatePickerCustom, WraoDatePicker } from './DatePicker.styled';
import { ConfigProvider } from 'antd';
import { palette } from '../../../styles';


const DatePicker: React.FC = () => {
  return (
    <>
      <WraoDatePicker>
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                colorPrimary: `${palette.colors.black}`,
                colorBgElevated: `${palette.colors.lightOrange}`,
                colorText: `${palette.colors.white}`,
                fontSize: 14,
                borderRadiusSM: 50,
              },
            },
          }}
        >
          <DatePickerCustom
            onChange={() => {
              // const isoTime = new Date(from).toISOString();
              // const unixTimeZero = new Date(from).toISOString();
        
            }}
            defaultValue={dayjs()}
            format={'DD/MM/YYYY'}
         
           
            style={{
              border: `1px solid ${palette.colors.white30}`,
              background: `${palette.colors.black}`,
              fontSize: '18px',
              color: `${palette.colors.white}`,
            }}
            showToday={false}
          />
        </ConfigProvider>
      </WraoDatePicker>
    </>
  );
};

export default DatePicker;
