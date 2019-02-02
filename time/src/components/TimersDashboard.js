import React, { Component } from 'react';
import { Col } from 'reactstrap';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uui from 'uuid';

class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: 'the great kreek',
        project: 'Halo foam',
        id: uui.v4(),
        elapsed: 5638493,
        runningSince: Date.now(),
      },
      {
        title: 'ndende ngouane',
        project: 'ntasmabs magotsi',
        id: uui.v4(),
        elapsed: 2738733,
        runningSince: null,
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Col md="3">
            <EditableTimerList timers={this.state.timers} />
            <ToggleableTimerForm isOpen={true} />
          </Col>
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
