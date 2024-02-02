import { ConfigProvider } from 'antd';
import { DatePickerCustom, WrapDatePicker } from './DatePicker.styled';

import dayjs from 'dayjs';
import { FormikValues } from 'formik';
import { palette } from '../../../../styles';

const DatePicker: React.FC<FormikValues> = ({ formik }) => {
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
              },
            },
          }}
        >
          <DatePickerCustom
            id="birthday"
            name="birthday"
            size="large"
            onChange={(_, from) => {
              formik.setFieldValue('birthday', from);
            }}
            defaultValue={dayjs(formik.values.birthday)}
            style={{
              border: `1px solid ${palette.colors.white30}`,
              background: `${palette.colors.black}`,
              fontSize: '18px',
              color: `${palette.colors.white}`,
            }}
            showToday={false}
          />
        </ConfigProvider>
      </WrapDatePicker>
    </>
  );
};

export default DatePicker;
