import React from 'react';
import PropTypes from 'prop-types';

import './CalendarHour.css';

const CalendarHour = ({ hour }) => {
  return (
    <div className="rt-calendar-hour">
      {hour} - {hour + 1}
    </div>
  );
};

CalendarHour.propTypes = {
  hour: PropTypes.number.isRequired
};

export default CalendarHour;
