import React from 'react';
// import PropTypes from 'prop-types';
import DayHeader from './DayHeader/DayHeader';

import './CalendarDay.css';

const CalendarDay = () => {
  return (
    <div className="rt-calendar-day">
      <DayHeader />
    </div>
  );
};

CalendarDay.propTypes = {};

export default CalendarDay;
