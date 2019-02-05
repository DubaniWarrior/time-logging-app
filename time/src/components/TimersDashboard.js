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
    this.updateTime(attrs);
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

  updateTimer = (attrs) {}


  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Col md="3">
            <EditableTimerList timers={this.state.timers}/>
            <ToggleableTimerForm isOpen={true} onFormSubmit={this.handleCreateFormSubmit}/>
          </Col>
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
