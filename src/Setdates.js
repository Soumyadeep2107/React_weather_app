// SetDates.js
import React, { useState } from 'react';

const SetDates = () => {
  const [date, setDate] = useState('');

  const apikey = "cdbb9bb9e06c4573812185129230406";
  const apiurl = "https://api.weatherapi.com/v1/current.json?key=";

  const getDayFullName = (num) => {
    switch (num) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Don't Know";
    }
  };

  const getMonthFullName = (num) => {
    switch (num) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "Don't Know";
    }
  };

  const checkDate = async (city) => {
    try {
      const response = await fetch(apiurl + apikey + `&q=${city}`);
      const data = await response.json();

      const exactTime = data.location.localtime.split(" ")[1];
      const exactDate = data.location.localtime.split(" ")[0];
      const exactDay = getDayFullName(new Date(exactDate).getDay());
      const exactMonth = getMonthFullName(new Date(exactDate).getMonth());

      const exactHour = exactTime.split(":")[0];
      const exactMinute = exactTime.split(":")[1];

      setDate(
        exactHour +
          ':' +
          exactMinute +
          ' - ' +
          exactDay +
          ', ' +
          new Date(exactDate).getDate() +
          ' ' +
          exactMonth +
          ' ' +
          new Date(exactDate).getFullYear()
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => checkDate(e.target.value)}
      />
      <p id="date">{date}</p>
    </div>
  );
};

export default SetDates;
