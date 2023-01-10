import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setTodos((prev) => [input, ...prev]);
  };

  return (
    <div>
      <h3>{moment(value).format("YYYY년 MM월 DD일")} </h3>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        showNeighboringMonth={false}
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>추가</button>
      <h4>{todos}</h4>
    </div>
  );
};

export default MyCalendar;
