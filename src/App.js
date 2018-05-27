import React, { Component } from 'react';
import CalendarWeek from './components/CalendarWeek/CalendarWeek';

class App extends Component {
  state = {
    workingTime: [8, 18],
    weekStart: true,
    busyHours: {
      0: [9, 10],
      4: [13, 14]
    },
    daysOff: [1, 6],
    weekDays: {
      0: 'Mon',
      1: 'Tue',
      2: 'Wed',
      3: 'Thu',
      4: 'Fri',
      5: 'Sat',
      6: 'Sun'
    }
  };

  handleClickEvent = (clickedDay, clickedHour) => {
    alert(`clicked ${clickedHour} ${clickedDay}`);
    this.setState({
      busyHours: {
        ...this.state.busyHours,
        [clickedDay]: [...(this.state.busyHours[clickedDay] || []), clickedHour]
      }
    });
  };
  render() {
    return (
      <div>
        <CalendarWeek
          weekDays={this.state.weekDays}
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
