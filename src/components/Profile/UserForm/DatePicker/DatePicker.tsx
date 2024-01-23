import React from 'react';
import dayjs from 'dayjs';
import { FormikValues } from 'formik';
import { DatePickerCustom } from './DatePicker.styled';

const DatePicker: React.FC<FormikValues> = ({ formik }) => {
  return (
    <>
      <DatePickerCustom
        id="birthday"
        name="birthday"
        size="large"
        onChange={() => {
          console.log(formik.handleChange);

          formik.handleChange;
        }}
        defaultValue={dayjs(formik.values.birthday)}
        format={'DD.MM.YYYY'}
        style={{}}
        dropdownClassName="search-dropdown"
        popupStyle={{
          backgroundColor: 'tomato',
        }}
      />
    </>
  );
};

export default DatePicker;
