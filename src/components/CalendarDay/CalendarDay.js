import React from 'react';
import PropTypes from 'prop-types';
import DayHeader from './DayHeader/DayHeader';

import './CalendarDay.css';

const CalendarDay = ({ dayName }) => {
  return (
    <div className="rt-calendar-day">
      <DayHeader name={dayName} />
    </div>
  );
};

CalendarDay.propTypes = {
  dayName: PropTypes.string.isRequired
};

export default CalendarDay;
