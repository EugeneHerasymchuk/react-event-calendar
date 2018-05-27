import React from 'react';
import PropTypes from 'prop-types';
import DayHeader from './DayHeader/DayHeader';
import CalendarHour from '../CalendarHour/CalendarHour';

import './CalendarDay.css';

const CalendarDay = ({ dayName, workingTime, busyHours = [] }) => {
  const workingHours = [];
  for (let h = workingTime[0]; h < workingTime[1]; h++) {
    workingHours.push(h);
  }
  const hours = workingHours.map(hour => (
    <CalendarHour key={hour} hour={hour} isBusy={busyHours.includes(hour)} />
  ));
  return (
    <div className="rt-calendar-day">
      <DayHeader name={dayName} />
      {hours}
    </div>
  );
};

CalendarDay.propTypes = {
  dayName: PropTypes.string.isRequired,
  workingTime: PropTypes.arrayOf(PropTypes.number).isRequired,
  busyHours: PropTypes.object
};

export default CalendarDay;
