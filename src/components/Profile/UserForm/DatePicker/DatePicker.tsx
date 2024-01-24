import React from 'react';
import dayjs from 'dayjs';
import { FormikValues } from 'formik';
import { DatePickerCustom, WraoDatePicker } from './DatePicker.styled';
import { ConfigProvider } from 'antd';

const DatePicker: React.FC<FormikValues> = ({ formik }) => {
  return (
    <>
      <WraoDatePicker>
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                colorPrimary: '#040404',
                colorBgElevated: '#EF8964',
                colorText: '#fff',
                fontSize: 14,
                borderRadiusSM: 50,
              },
            },
          }}
        >
          <DatePickerCustom
            id="birthday"
            name="birthday"
            size="large"
            onChange={(_, from) => {
              // const isoTime = new Date(from).toISOString();
              // console.log(isoTime);
              // const unixTimeZero = new Date(from).toISOString();
              formik.setFieldValue('birthday', from);
            }}
            defaultValue={dayjs(formik.values.birthday)}
            // format={'DD.MM.YYYY'}
            style={{
              border: '1px solid rgba(239, 237, 232, 0.3)',
              background: '#040404',
              fontSize: '18px',
              color: '#fff',
              // padding: '14px',
            }}
            showToday={false}
          />
        </ConfigProvider>
      </WraoDatePicker>
    </>
  );
};

export default DatePicker;
