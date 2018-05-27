import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from '../CalendarDay/CalendarDay';
import './CalendarWeek.css';

const CalendarWeek = ({
  workingTime,
  weekStart = 0,
  busyHours = {},
  daysOff = []
}) => {
  console.log(workingTime, weekStart, busyHours, daysOff);

  const weekDays = {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday'
  };

  const weekKeys = [0, 1, 2, 3, 4, 5, 6];

  const userKeys = [
    weekStart === 0 ? weekKeys.shift() : weekKeys.pop(),
    ...weekKeys
  ];

  const userDays = userKeys.map(key => {
    return (
      <CalendarDay
        key={key}
        workingTime={workingTime}
        dayName={weekDays[key]}
        busyHours={busyHours[key]}
        isOff={daysOff.includes(key)}
      />
    );
  });
  return <div className="rt-calendar-week">{userDays}</div>;
};

/*
  workingTime - The array of two numbers for defining the start and end hours
  weekStart: (not Required) - Index of the day when week should start. 0 - Monday, 6 - Sunday
  busyHours: (not Required) - Object with index of days as keys and arrays of checked hours as values
  daysOff: (not Required) - Array with days off
 */

CalendarWeek.propTypes = {
  workingTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  weekStart: PropTypes.number,
  busyHours: PropTypes.object,
  daysOff: PropTypes.array
};

export default CalendarWeek;
