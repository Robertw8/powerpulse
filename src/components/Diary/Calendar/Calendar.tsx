// import React from 'react';
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// import type { Dayjs } from 'dayjs';
// import dayLocaleData from 'dayjs/plugin/localeData';
// import { Calendar, Col, Radio, Row, Select, theme ,ConfigProvider} from 'antd';
// import type { CalendarProps } from 'antd';

// dayjs.extend(dayLocaleData);

 
// const MyCalendar: React.FC = () => {
//   const { token } = theme.useToken();

//   const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
//     console.log(value.format('YYYY-MM-DD'), mode);
//   };

//   const wrapperStyle: React.CSSProperties = {
//     width: 215,
//     border: `1px solid ${token.colorBorderSecondary}`,
//     borderRadius: token.borderRadiusLG,
//   };

//   return (<ConfigProvider
//     theme={{
//       components: {
//         Calendar: {
//           /* here is your component tokens */
//           fullBg:'#EF8964',
//           fullPanelBg:'#EF8964',
//           itemActiveBg:'#040404',
//           miniContentHeight:236,
//           monthControlWidth:10
//         },
//       },
//     }}
//   >
//      <div style={wrapperStyle}>
//       <Calendar
  
//         fullscreen={false}
//         headerRender={({ value, type, onChange, onTypeChange }) => {
//           const start = 0;
//           const end = 12;
//           const monthOptions = [];

//           let current = value.clone();
//           const localeData = value.localeData();
//           const months = [];
//           for (let i = 0; i < 12; i++) {
//             current = current.month(i);
//             months.push(localeData.monthsShort(current));
//           }

//           for (let i = start; i < end; i++) {
//             monthOptions.push(
//               <Select.Option key={i} value={i} className="month-item">
//                 {months[i]}
//               </Select.Option>,
//             );
//           }

//           const year = value.year();
//           const month = value.month();
//           const options = [];
//           for (let i = year - 10; i < year + 10; i += 1) {
//             options.push(
//               <Select.Option key={i} value={i} className="year-item">
//                 {i}
//               </Select.Option>,
//             );
//           }
//           return (
//             <div style={{ padding: 8 }}>
      
//               <Row gutter={8}>
//                 <Col>
//                   <Radio.Group
//                     size="small"

//                     onChange={(e) => onTypeChange(e.target.value)}
//                     value={type}
//                   >
//                     <Radio.Button value="month">Month</Radio.Button>
//                     <Radio.Button value="year">Year</Radio.Button>
//                   </Radio.Group>
//                 </Col>
//                 <Col>
//                   <Select
//                     size="small"
//                     popupMatchSelectWidth={false}
//                     className="my-year-select"
//                     value={year}
//                     onChange={(newYear) => {
//                       const now = value.clone().year(newYear);
//                       onChange(now);
//                     }}
//                   >
//                     {options}
//                   </Select>
//                 </Col>
//                 <Col>
//                   <Select
//                     size="small"
//                     popupMatchSelectWidth={false}
//                     value={month}
//                     onChange={(newMonth) => {
//                       const now = value.clone().month(newMonth);
//                       onChange(now);
//                     }}
//                   >
//                     {monthOptions}
//                   </Select>
//                 </Col>
//               </Row>
//             </div>
//           );
//         }}
//         onPanelChange={onPanelChange}
//       />
//     </div>
//   </ConfigProvider>
   
//   );
// };


// export default MyCalendar;
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
    weekStart: 1,
})

const MyCalendar:React.FC=() =>{
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-01-20'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
      <DemoContainer components={['DateCalendar']}>
        <DemoItem >
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} showDaysOutsideCurrentMonth={true} sx={{backgroundColor:'#EF8964', borderRadius:'8px'}}/>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>)}

    export default MyCalendar




//     color: '#EFEDE8',
// fontFamily: 'Roboto',
// fontSize: '14px',
// fontStyle: 'normal',
// fontWeight:'400',
// lineHeight: '18px',
// letterSpacing: '-0.28px'