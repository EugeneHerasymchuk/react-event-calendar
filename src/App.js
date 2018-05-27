import React, { Component } from 'react';
import CalendarWeek from './components/CalendarWeek/CalendarWeek';

import './App.css';

class App extends Component {
  state = {
    workingTime: [9, 17],
    weekStart: 0,
    busyHours: {
      0: [9, 10],
      4: [13, 14]
    },
    daysOff: [1, 6]
  };

  handleClickEvent = (clickedDay, clickedHour) => {
    console.log('clicked', clickedHour, clickedDay);
  };
  render() {
    return (
      <div className="App">
        <CalendarWeek
          workingTime={this.state.workingTime}
          weekStart={this.state.weekStart}
          busyHours={this.state.busyHours}
          daysOff={this.state.daysOff}
          onClick={this.handleClickEvent}
        />
      </div>
    );
  }
}

export default App;
