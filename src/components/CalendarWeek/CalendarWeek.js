import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from '../CalendarDay/CalendarDay';
import './CalendarWeek.css';

const CalendarWeek = ({ workingTime, weekStart, busyHours }) => {
  console.log(workingTime, weekStart, busyHours);
  return (
    <div className="rt-calendar-week">
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
    </div>
  );
};

/*
  workingTime - The array of two numbers for defining the start and end hours
  weekStart: - Index of the day when week should start. 0 - Monday, 6 - Sunday
  busyHours: - Object with index of days as keys and arrays of checked hours as values
 */

CalendarWeek.propTypes = {
  workingTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  weekStart: PropTypes.number.isRequired,
  busyHours: PropTypes.object
};

export default CalendarWeek;
