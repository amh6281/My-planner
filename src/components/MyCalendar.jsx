import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h3>{moment(value).format("YYYY년 MM월 DD일")} </h3>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default MyCalendar;
