import React from 'react';
import PropTypes from 'prop-types';

import './CalendarHour.css';

const CalendarHour = ({ hour, isBusy = false }) => {
  const classes = [
    'rt-calendar-hour',
    isBusy ? 'rt-busy-hour' : 'rt-working-hour'
  ];
  return (
    <div className={classes.join(' ')}>
      {hour} - {hour + 1}
    </div>
  );
};

CalendarHour.propTypes = {
  hour: PropTypes.number.isRequired,
  isBusy: PropTypes.bool
};

export default CalendarHour;
