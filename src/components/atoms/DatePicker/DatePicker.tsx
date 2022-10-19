import React from 'react';
import { StyledDatePicker } from './DatePicker.styled';

const DatePicker = () => {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <StyledDatePicker onChange={onChange} />
    </div>
  );
};

export default DatePicker;
