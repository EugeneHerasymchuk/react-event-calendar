import React from 'react';
import PropTypes from 'prop-types';

import './CalendarHour.css';

const CalendarHour = ({ hour, isBusy = false, dayOff, onClick }) => {
  const classes = [
    'rt-calendar-hour',
    dayOff ? 'rt-day-off' : isBusy ? 'rt-busy-hour' : 'rt-working-hour'
  ];
  return (
    <div
      onClick={() => {
        if (!dayOff && !isBusy) {
          onClick(hour);
        }
      }}
      className={classes.join(' ')}
    >
      {hour} - {hour + 1}
    </div>
  );
};

CalendarHour.propTypes = {
  hour: PropTypes.number.isRequired,
  isBusy: PropTypes.bool,
  dayOff: PropTypes.bool,
  onClick: PropTypes.func
};

export default CalendarHour;
