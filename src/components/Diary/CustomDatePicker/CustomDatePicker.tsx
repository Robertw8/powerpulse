import { useDispatch } from 'react-redux';
import { useDiary } from '../../../hooks';

import { DatePickerCustom, WrapDatePicker } from './CustomDatePicker.styled';
import { ConfigProvider } from 'antd';

import { palette } from '../../../styles';
import { AppDispatch } from '../../../redux';
import dayjs from 'dayjs';
import { getDiary } from '../../../redux/diary';
import { setSelectedDate } from '../../../redux/diary/operations';

const CustomDatePicker: React.FC = () => {
  const { selectedDate } = useDiary();
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
                colorIcon: '#EF8964;',
              },
            },
          }}
        >
          <DatePickerCustom
            disabledDate={date => date > dayjs()}
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
            onChange={selectedDate => {
              dispatch(getDiary(dayjs(selectedDate).format('DD/MM/YYYY')));
              dispatch(setSelectedDate(selectedDate));
            }}
            allowClear={false}
          />
        </ConfigProvider>
      </WrapDatePicker>
    </>
  );
};

export default CustomDatePicker;
