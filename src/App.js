import React, { Component } from 'react';
import CalendarWeek from './components/CalendarWeek/CalendarWeek';

import './App.css';

class App extends Component {
  state = {
    workingTime: [9, 17],
    weekStart: 6,
    busyHours: {
      0: [9, 10]
    }
  };
  render() {
    return (
      <div className="App">
        <CalendarWeek
          workingTime={this.state.workingTime}
          weekStart={this.state.weekStart}
          busyHours={this.state.busyHours}
        />
      </div>
    );
  }
}

export default App;
