import React, {Component} from 'react';
import {Col} from 'reactstrap';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uui from 'uuid';
import helpers from '../js/helpers';

class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: 'the great kreek',
        project: 'Halo foam',
        id: uui.v4(),
        elapsed: 5638493,
        runningSince: Date.now()
      }, {
        title: 'ndende ngouane',
        project: 'ntasmabs magotsi',
        id: uui.v4(),
        elapsed: 2738733,
        runningSince: null
      }
    ]
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  }

  handleDeleteTimer = (timerId) => {
    this.deleteTimer(timerId)
  }

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  }

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  }

  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    console.log(t);
    this.setState({
      timers: this
        .state
        .timers
        .concat(t)
    });
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this
        .state
        .timers
        .map((timer) => {
          if (timer.id === attrs.id) {
            return Object.assign({}, timer, {
              title: attrs.title,
              project: attrs.project
            });
          } else {
            return timer;
          }
        })
    })
  }

  deleteTimer = (timerId) => {
    this.setState({
      timers: this
        .state
        .timers
        .filter(timer => timer.id !== timerId)
    })
  }

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this
        .state
        .timers
        .map((timer) => {
          if (timer.id === timerId) {
            return Object.assign({}, timer, {runningSince: now});
          } else {
            return timer;
          }
        })
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this
        .state
        .timers
        .map((timer) => {
          if (timer.id === timerId) {
            const lastElapsed = now - timer.runningSince;
            return Object.assign({}, timer, {
              elapsed: timer.elapsed + lastElapsed,
              runningSince: null
            });
          } else {
            return timer;
          }
        })
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Col md="3">
            <EditableTimerList
              timers={this.state.timers}
              onFormSubmit={this.handleEditFormSubmit}
              onFormDelete={this.handleDeleteTimer}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}/>
            <ToggleableTimerForm isOpen={true} onFormSubmit={this.handleCreateFormSubmit}/>
          </Col>
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
