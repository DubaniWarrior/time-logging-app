import React, { Component } from 'react';
import './styles/main.scss';
import TimersDashboard from './components/TimersDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimersDashboard />
      </div>
    );
  }
}

export default App;
